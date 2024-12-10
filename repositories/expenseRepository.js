import expenseModel from '../models/expenseModel.js';

const expenseRepository = {
  getExpenseById: async (id) => {
    return await expenseModel.getExpenseById(id);
  },
  createExpense: async (expenseData) => {
    return await expenseModel.createExpense(expenseData);
  },
  updateExpense: async (expenseData) => {
    return await expenseModel.updateExpense(expenseData);
  },
  deleteExpense: async (id) => {
    await expenseModel.deleteExpense(id);
  },
  getAllExpenses: async () => {
    return await expenseModel.getAllExpenses();
  }
};

export default expenseRepository;
