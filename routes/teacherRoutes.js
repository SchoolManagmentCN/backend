import express from 'express';
import multer from 'multer';
import { getTeacher, addTeacher, editTeacher, removeTeacher, getTeachers } from '../controller/teacherController.js';

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB límite
  }
});

router.get('/:id', getTeacher);
router.get('/', getTeachers);
router.post('/', upload.single('teacherImage'), addTeacher);
router.put('/:id', upload.single('teacherImage'), editTeacher);
router.delete('/:id', removeTeacher);

export default router;
