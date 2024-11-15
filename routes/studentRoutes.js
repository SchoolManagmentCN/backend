import express from 'express';
import { getStudent, addStudent, editStudent, removeStudent } from '../controller/studentController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/:id', authenticate, getStudent);
router.post('/', authenticate, addStudent);
router.put('/', authenticate, editStudent);
router.delete('/:id', authenticate, removeStudent);

export default router;