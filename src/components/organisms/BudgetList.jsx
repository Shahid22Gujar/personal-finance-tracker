import BudgetCard from "../molecules/BudgetCard";
const BudgetList = ({ budgets, onEdit }) => (
  <div className="budget-list">
    {budgets.map((budget, index) => (
      <BudgetCard key={index} {...budget} onEdit={onEdit} />
    ))}
  </div>
);

export default BudgetList;