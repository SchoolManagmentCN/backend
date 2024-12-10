import express from 'express';
import { getSubject, addSubject, editSubject, removeSubject, getSubjects } from '../controller/subjectController.js';

const router = express.Router();

router.get('/:id', getSubject);
router.post('/', addSubject);
router.put('/:id', editSubject);
router.delete('/:id', removeSubject);
router.get('/', getSubjects);

export default router;
