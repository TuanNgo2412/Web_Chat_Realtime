import express from 'express';

import LoginController from '../controllers/LoginController';

const router = express.Router();

router.post('/login', LoginController.login);
router.post('/register', LoginController.createNewUser);
router.get('/register-page', LoginController.registerPage);
router.get('/', LoginController.home);

export { router };
