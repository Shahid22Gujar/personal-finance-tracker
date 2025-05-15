import { useState } from "react";
import MainTemplate from "../templates/MainTemplate";
import BudgetList from "../organisms/BudgetList";
import BudgetForm from "../organisms/BudgetForm";
export default function Budgets() {
   const [budgets, setBudgets] = useState([
    { category: 'Groceries', budget: 500, spent: 300 },
    { category: 'Entertainment', budget: 200, spent: 150 },
    { category: 'Utilities', budget: 150, spent: 120 }
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [editCategory, setEditCategory] = useState('');

  const handleAddBudget = (newBudget) => {
    setBudgets([...budgets, newBudget]);
  };

  const handleEdit = (category) => {
    setIsEditing(true);
    setEditCategory(category);
  };

  const handleUpdateBudget = (category, updatedBudget) => {
    setBudgets(budgets.map(b => b.category === category ? { ...b, budget: updatedBudget } : b));
    setIsEditing(false);
    setEditCategory('');
  };
  return (
    <MainTemplate>
       <h2 className="dashboard-title">Budgets</h2>
      <BudgetForm onAddBudget={handleAddBudget} isEditing={isEditing} onUpdate={handleUpdateBudget} editCategory={editCategory} />
      <BudgetList budgets={budgets} onEdit={handleEdit} />
    </MainTemplate>
  );
}