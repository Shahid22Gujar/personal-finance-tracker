import { useState } from "react";
import Input from '../atoms/Input';
import Button from '../atoms/Button'
const BudgetForm = ({ onAddBudget, isEditing, onUpdate, editCategory, editBudget }) => {
  const [category, setCategory] = useState(editCategory || '');
  const [budget, setBudget] = useState(editBudget || 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (category && budget > 0) {
      isEditing ? onUpdate(category, budget) : onAddBudget({ category, budget, spent: 0 });
      setCategory('');
      setBudget(0);
    }
  };

  return (
    <form className="budget-form" onSubmit={handleSubmit}>
      <Input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" disabled={isEditing} />
      <Input value={budget} onChange={(e) => setBudget(parseFloat(e.target.value) || 0)} placeholder="Budget" />
      <Button label={isEditing ? "Update Budget" : "Add Budget"} className="action-button" type="submit" />
    </form>
  );
};
export default BudgetForm;