import express from 'express';
import * as Controller from './auth.controller';
import { authorization } from '../../middleware/authorization';
import * as Validation from './auth.validation';
const router = express.Router();

router.post('/signup', Validation.signup, Controller.signup)
router.post('/login', Validation.login, Controller.login)
router.get('/profile', authorization, Controller.profile)
router.put('/profile', authorization, Validation.editProfile, Controller.editProfile)
router.post('/logout', authorization, Controller.logout)

export default router;