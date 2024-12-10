import expenseRepository from '../repositories/expenseRepository.js';

const getExpenseById = async (id) => {
  return await expenseRepository.getExpenseById(id);
};

const createExpense = async (expenseData) => {
  return await expenseRepository.createExpense(expenseData);
};

const updateExpense = async (expenseData) => {
  return await expenseRepository.updateExpense(expenseData);
};

const deleteExpense = async (id) => {
  await expenseRepository.deleteExpense(id);
};

const getAllExpenses = async () => {
  return await expenseRepository.getAllExpenses();
}

export { getExpenseById, createExpense, updateExpense, deleteExpense, getAllExpenses };
