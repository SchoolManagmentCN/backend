import express from 'express';
import multer from 'multer';
import { getStudent, addStudent, editStudent, removeStudent } from '../controller/studentController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();
const upload = multer(); // Configure multer as needed

router.get('/:id', authenticate, getStudent);
router.post('/', authenticate, upload.fields([{ name: 'studentImage' }, { name: 'parentImage' }]), addStudent);
router.put('/', authenticate, upload.fields([{ name: 'studentImage' }, { name: 'parentImage' }]), editStudent);
router.delete('/:id', authenticate, removeStudent);

export default router;
