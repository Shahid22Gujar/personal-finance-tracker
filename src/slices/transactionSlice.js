//TODO TransactionHistorySlice
import { createSlice } from '@reduxjs/toolkit';

const ExistingTransactions = Array.from({ length: 25 }, (_, i) => ({
    date: '2023-05-01', category: 'Groceries', amount: (i + 1) * 10, type: i % 2 === 0 ? 'Expense' : 'Income', description: 'Sample transaction'
  }));
const initialState = {
  transactions:ExistingTransactions
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      const { date, category, amount, type, description } = action.payload;
      state.transactions.push({
        date: date,
        category: category,
        amount: Number(amount),
        type: type,
        description: description
      });
    }
  }
});

export const { addTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;