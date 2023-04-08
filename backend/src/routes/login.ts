import express from 'express';

import LoginController from '../controllers/LoginController';

const router = express.Router();

router.post('/refresh-token', LoginController.refreshToken);
router.get('/register-page', LoginController.registerPage);
router.post('/login', LoginController.login);
router.post('/register', LoginController.register);
router.get('/', LoginController.home);

export { router };
