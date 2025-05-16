import { createSlice } from "@reduxjs/toolkit";

const existingBudgets = [
  { id: 1, category: "Groceries", budget: 500, spent: 300 },
  { category: "Entertainment", budget: 200, spent: 150 },
  { category: "Utilities", budget: 150, spent: 120 },
];
const initialState = {
  budgets: existingBudgets,
  isEditing: false,
  editCategory: "",
};

const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    handleAddBudget: (state, action) => {
      console.log(action.payload)
      const { newBudget } = action.payload;
      state.budgets = [...state.budgets, newBudget];
    },
    handleEdit: (state, action) => {
      const { category } = action.payload;
      state.isEditing = true;
      state.editCategory = category;
    },
    handleUpdateBudget: (state, action) => {
      const { category, updatedBudget } = action.payload;
      state.budgets = state.budgets.map((b) =>
        b.category === category ? { ...b, budget: updatedBudget } : b
      );
      state.isEditing = false;
      state.editCategory = "";
    },
  },
});

export const { handleAddBudget, handleEdit, handleUpdateBudget } =
  budgetSlice.actions;
export default budgetSlice.reducer;
