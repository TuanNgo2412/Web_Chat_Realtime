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

  public register(req: Request, res: Response) {
    try {
    } catch (error) {
      console.log('Error: ', error);
    }
  }
}

export default new LoginController();
