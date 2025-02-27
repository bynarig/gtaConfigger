import {Router} from 'express';
import UserController from '#controllers/user/user.controller';

const router = Router();

router.post('/user/login', UserController.login);
router.post('/user/logout', UserController.logout);
router.post('/user/loginGoogle', UserController.loginGoogle);
router.post('/user/loginApple', UserController.loginApple);

export default router;
