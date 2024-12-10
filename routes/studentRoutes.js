import express from 'express';
import multer from 'multer';
import { getStudent, addStudent, editStudent, removeStudent, getStudents } from '../controller/studentController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB límite
    }
});

router.post('/',
    upload.fields([
        { name: 'studentImage', maxCount: 1 },
        { name: 'parentImage', maxCount: 1 }
    ]),
    addStudent
);

router.get('/:id', getStudent);
router.post('/', upload.fields([{ name: 'studentImage' }, { name: 'parentImage' }]), addStudent);
router.put('/:id', upload.fields([{ name: 'studentImage' }, { name: 'parentImage' }]), editStudent);
router.delete('/:id',removeStudent);
router.get('/', getStudents);

export default router;
