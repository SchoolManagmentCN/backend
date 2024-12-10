import { db } from '../config/config.js';

const expenseModel = {
  getExpenseById: async (id) => {
    const expenseRef = db.collection('expenses').doc(id);
    const expenseDoc = await expenseRef.get();
    return expenseDoc.exists ? expenseDoc.data() : null;
  },
  createExpense: async (expenseData) => {
    const expenseRef = db.collection('expenses').doc(expenseData.id);
    await expenseRef.set(expenseData);
    return expenseData;
  },
  updateExpense: async (expenseData) => {
    const expenseRef = db.collection('expenses').doc(expenseData.id);
    await expenseRef.update(expenseData);
    return expenseData;
  },
  deleteExpense: async (id) => {
    const expenseRef = db.collection('expenses').doc(id);
    await expenseRef.delete();
  },
  getAllExpenses: async () => {
    const expensesRef = db.collection('expenses');
    const expensesSnapshot = await expensesRef.get();
    const expenses = [];
    expensesSnapshot.forEach((doc) => {
      expenses.push(doc.data());
    });
    return expenses;
  }
};

export default expenseModel;
