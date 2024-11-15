// routes/teacherRoutes.js
import express from 'express';
import { getTeacher, addTeacher, editTeacher, removeTeacher } from '../controller/teacherController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/:id', authenticate, getTeacher);
router.post('/', authenticate, addTeacher);
router.put('/', authenticate, editTeacher);
router.delete('/:id', authenticate, removeTeacher);

export default router;