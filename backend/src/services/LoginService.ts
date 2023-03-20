import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

import { SALT_ROUNDS } from '../common/constant';
import * as db from '../models/index';
import config from '../util/config';

interface ILoginService {
    createNewUser: (
        username: string,
        password: string,
        firstname: string,
        lastname: string,
        gender: string
    ) => Promise<string>;

    login: (username: string, password: string) => Promise<string>;
}
class LoginService implements ILoginService {
    public async createNewUser(
        username: string,
        password: string,
        firstname: string,
        lastname: string,
        gender: string
    ) {
        try {
            const exitingUser = await db.User.findOne({ username });
            if (exitingUser) return 'Username already exited';
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

            const token = await jwt.sign(
                { userId: user.id, username: user.username },
                config.JWT_SECRET,
                { expiresIn: config.JWT_EXPIRE }
            );

            user.token = token;
            await user.save();

            return token;
        } catch (error) {
            console.log('Error: ', error);
        }
    }

    public async login(username, password) {
        try {
            const exitingUser = await db.User.findOne({ username });
            console.log('exitingUser: ', exitingUser);

            if (!exitingUser) return 'User not found!';
            const checkedPassword = bcrypt.compareSync(
                password,
                exitingUser.password
            );
            if (!checkedPassword) return 'Password is not correctly';

            const token = await jwt.sign(
                { userId: exitingUser.id, username: exitingUser.username },
                config.JWT_SECRET,
                { expiresIn: config.JWT_EXPIRE }
            );

            exitingUser.token = token;
            await exitingUser.save();

            return token;
        } catch (error) {
            console.log('Error: ', error);
        }
    }
}

export default new LoginService();
