import { useSelector } from "react-redux";
import { handleAddBudget,handleEdit,handleUpdateBudget } from "../../slices/budgetSlice";
import MainTemplate from "../templates/MainTemplate";
import BudgetList from "../organisms/BudgetList";
import BudgetForm from "../organisms/BudgetForm";
export default function Budgets() {
  const { isEditing, editCategory, budgets } = useSelector((state) => state.budget);
  return (
    <MainTemplate>
       <h2 className="dashboard-title">Budgets</h2>
      <BudgetForm onAddBudget={handleAddBudget} isEditing={isEditing} onUpdate={handleUpdateBudget} editCategory={editCategory} />
      <BudgetList budgets={budgets} onEdit={handleEdit} />
    </MainTemplate>
  );
}