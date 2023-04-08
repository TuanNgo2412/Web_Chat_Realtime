import { Request, Response } from 'express';

import { Token } from '../interfaces/common';
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

    public async register(req: Request, res: Response) {
        try {
            const { username, password, firstname, lastname, gender } = req.body;
            if (!username || !password)
                res.status(400).json({
                    message: 'Missing username or password parameter!!!!',
                });
            const data: Token = await LoginService.register(username, password, firstname, lastname, gender);
            return res.status(200).json(data);
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
                    message: 'Missing username or password!',
                });
            }
            const data: Token = await LoginService.login(username, password);
            return res.status(200).json(data);
        } catch (error) {
            console.log('Error: ', error);
            res.status(500).json('Internal Server error');
        }
    }

    public async refreshToken(req: Request, res: Response) {
        try {
            const refreshToken: string = req.body.refreshToken;

            if (!refreshToken) {
                return res.status(401).json({ message: `Missing refresh token` });
            }

            const data: Token = await LoginService.refreshToken(refreshToken);

            return res.status(200).json({
                data,
            });
        } catch (error) {
            console.log('Error: ', error);
            res.status(500).json('Internal Server error');
        }
    }
}

export default new LoginController();
