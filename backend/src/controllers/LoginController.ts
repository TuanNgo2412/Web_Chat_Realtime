import { Request, Response } from 'express';

import LoginService from '../services/LoginService';

class LoginController {
    public home(req: Request, res: Response) {
        try {
            res.send('HOME LOGIN PAGE!!!!!');
        } catch (error) {
            console.log('Server error: ', error);
        }
    }

    public registerPage(req: Request, res: Response) {
        try {
            res.send('REGISTER PAGE!!!!!');
        } catch (error) {
            console.log('error: ', error);
        }
    }

    public async createNewUser(req: Request, res: Response) {
        try {
            const { username, password, firstname, lastname, gender } =
                req.body;
            if (!username || !password)
                res.status(400).json({
                    errCode: -1,
                    message: 'Missing username or password parameter!!!!',
                });
            const token: string = await LoginService.createNewUser(
                username,
                password,
                firstname,
                lastname,
                gender
            );
            return res.status(200).json({
                errCode: 1,
                message: 'Create new account successfully !!!',
                token: token,
            });
        } catch (error) {
            console.log('Error: ', error);
            res.status(500).json('Internal Server error');
        }
    }

    public async login(req: Request, res: Response) {
        try {
            const { username, password } = req.body;
            if (!username || !password) {
                res.status(400).json({
                    errCode: -1,
                    message: 'Missing username or password!',
                });
            }
            const token: string = await LoginService.login(username, password);
            return res.status(200).json({
                token: token,
            });
        } catch (error) {
            console.log('Error: ', error);
            res.status(500).json('Internal Server error');
        }
    }
}

export default new LoginController();
