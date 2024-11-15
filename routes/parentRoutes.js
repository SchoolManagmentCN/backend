import express from 'express';
import { getParent, addParent, editParent, removeParent } from '../controller/parentController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/:id', authenticate, getParent);
router.post('/', authenticate, addParent);
router.put('/', authenticate, editParent);
router.delete('/:id', authenticate, removeParent);

export default router;