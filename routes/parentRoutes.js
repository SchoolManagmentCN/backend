import express from 'express';
import { getParent, addParent, editParent, removeParent, getParents } from '../controller/parentController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/:id',  getParent);
router.post('/',  addParent);
router.put('/', editParent);
router.delete('/:id', removeParent);
router.get('/', getParents);

export default router;
