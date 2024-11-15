import express from 'express';
import { login, register } from '../controller/authController';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/login', login);
router.post('/register', authenticate, register);

export default router;