import express from 'express';
import UserController from "../controllers/user/user.controller.js";

const router = express.Router();

router.post('/user/login', UserController.login)
router.post('/user/logout', UserController.logout)
router.post('/user/loginGoogle', UserController.loginGoogle)
router.post('/user/loginApple', UserController.loginApple)

export default router;