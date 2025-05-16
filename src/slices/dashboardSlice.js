import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalIncome: 5000,
  totalExpenses: 1500,
  savings: 3500,
  topCategory: 'Groceries',
  biggestExpense: '$500 on Rent',
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    updateStats: (state, action) => {
      const { totalIncome, totalExpenses, savings } = action.payload;
      state.totalIncome = totalIncome;
      state.totalExpenses = totalExpenses;
      state.savings = savings;
    },
    updateKeyStats: (state, action) => {
      const { topCategory, biggestExpense } = action.payload;
      state.topCategory = topCategory;
      state.biggestExpense = biggestExpense;
    }
  }
});

export const { updateStats, updateKeyStats } = dashboardSlice.actions;
export default dashboardSlice.reducer;