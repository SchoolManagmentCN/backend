import { v4 as uuidv4 } from 'uuid';
import { createExpense, deleteExpense, getExpenseById, updateExpense, getAllExpenses } from '../services/expenseService.js';

export const getExpense = async (req, res) => {
  const { id } = req.params;
  const expense = await getExpenseById(id);
  if (!expense) {
    return res.status(404).send('Expense not found');
  }
  res.json(expense);
};

export const addExpense = async (req, res) => {
  const expenseData = req.body;
  expenseData.id = uuidv4(); // Generate a unique ID for the expense
  const newExpense = await createExpense(expenseData);
  res.status(201).json(newExpense);
};

export const editExpense = async (req, res) => {
  const expenseData = req.body;
  const updatedExpense = await updateExpense(expenseData);
  res.json(updatedExpense);
};

export const removeExpense = async (req, res) => {
  const { id } = req.params;
  await deleteExpense(id);
  res.status(204).send();
};

export const getExpenses = async (req, res) => {
  const expenses = await getAllExpenses();
  res.json(expenses);
};
