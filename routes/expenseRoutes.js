import express from 'express';
import { getExpense, addExpense, editExpense, removeExpense, getExpenses } from '../controller/expenseController.js';

const router = express.Router();

router.get('/:id', getExpense);
router.post('/', addExpense);
router.put('/:id', editExpense);
router.delete('/:id', removeExpense);
router.get('/', getExpenses);

export default router;
