import express from 'express';

import LoginController from '../controllers/LoginController';

const router = express.Router();

router.post('/register', LoginController.register);
router.get('/register-page', LoginController.registerPage);
router.get('/', LoginController.home);

export { router };
