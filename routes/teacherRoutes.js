// routes/teacherRoutes.js
import express from 'express';
import {
    getTeacher,
    addTeacher,
    editTeacher,
    removeTeacher,
    getTeachers
} from '../controller/teacherController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/:id', getTeacher);
router.get('/', getTeachers);
router.post('/', addTeacher);
router.put('/', editTeacher);
router.delete('/:id', removeTeacher);

export default router;
