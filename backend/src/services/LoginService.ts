import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

import { SALT_ROUNDS } from '../common/constant';
import * as db from '../models/index';
import config from '../util/config';
import { Token } from '../interfaces/common';

interface ILoginService {
    register: (
        username: string,
        password: string,
        firstname: string,
        lastname: string,
        gender: string
    ) => Promise<Token>;
    login: (username: string, password: string) => Promise<Token>;
    refreshToken: (refreshToken: string) => Promise<Token>;
}
class LoginService implements ILoginService {
    public async register(username: string, password: string, firstname: string, lastname: string, gender: string) {
        try {
            const exitingUser = await db.User.findOne({ username });
            if (exitingUser) return { message: 'Username already exited!' };
            const hashedPassword = bcrypt.hashSync(password, SALT_ROUNDS);
            const user = await db.User.create({
                id: uuidv4(),
                username: username,
                password: hashedPassword,
                firstname: firstname,
                lastname: lastname,
                gender: gender,
                created_at: moment().unix(),
                updated_at: moment().unix(),
            });
            await user.save();

            const accessToken: string = await jwt.sign(
                { userId: user.id, userName: user.username },
                config.JWT_SECRET,
                { expiresIn: '1h' }
            );

            const refreshToken: string = await jwt.sign(
                { userId: user.id, firstName: user.firstname },
                config.JWT_REFRESH_SECRET,
                { expiresIn: '10d' }
            );

            user.accesstoken = accessToken;
            user.refreshtoken = refreshToken;

            await user.save();

            return {
                accessToken,
                refreshToken,
                message: `Create new user successfully!`,
            };
        } catch (error) {
            console.log('Error: ', error);
        }
    }

    public async login(username: string, password: string) {
        try {
            const exitingUser = await db.User.findOne({ username });

            if (!exitingUser) return { message: 'User not found!' };
            const checkedPassword = bcrypt.compareSync(password, exitingUser.password);
            if (!checkedPassword) return 'Password is not correctly';

            const accessToken: string = await jwt.sign(
                { userId: exitingUser.id, userName: exitingUser.username },
                config.JWT_SECRET,
                { expiresIn: '1h' }
            );

            const refreshToken: string = await jwt.sign(
                { userId: exitingUser.id, firstName: exitingUser.firstname },
                config.JWT_REFRESH_SECRET,
                { expiresIn: '10d' }
            );

            exitingUser.accesstoken = accessToken;
            exitingUser.refreshtoken = refreshToken;

            await exitingUser.save();

            return {
                accessToken,
                refreshToken,
                message: 'Login successfully!',
            };
        } catch (error) {
            console.log('Error: ', error);
        }
    }

    public async refreshToken(refreshToken: string) {
        const user = await db.User.findOne({ refreshtoken: refreshToken });
        if (!user) {
            return `Not find user has compatible token`;
        }

        const data = await jwt.verify(refreshToken, config.JWT_REFRESH_SECRET, async (err, decoded) => {
            console.log('err: ', err);
            if (err) {
                return err;
            }

            // Generate new access token
            const accessToken: string = jwt.sign(
                { userId: decoded.id, userName: decoded.username },
                config.JWT_SECRET,
                { expiresIn: '1h' }
            );

            // Generate new refresh token
            const refreshToken: string = jwt.sign(
                {
                    userId: decoded.id,
                    firstName: decoded.firstname,
                },
                config.JWT_REFRESH_SECRET,
                { expiresIn: '10d' }
            );

            user.accesstoken = accessToken;
            user.refreshtoken = refreshToken;
            await user.save();

            return {
                accessToken,
                refreshToken,
                message: `Get new access token and refresh token successfully!`,
            };
        });

        return { data };
    }
}

export default new LoginService();
