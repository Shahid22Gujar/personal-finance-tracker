import ProgressBar from "../atoms/ProgressBar";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
const BudgetCard = ({ category, budget, spent, onEdit }) => (
  <div className="budget-card">
    <Text className="budget-category">{category}</Text>
    <Text className="budget-amount">Budget: ${budget}</Text>
    <Text className="budget-spent">Spent: ${spent}</Text>
    <ProgressBar value={spent} max={budget} className="budget-progress" />
    <Button label="Edit" className="action-button" onClick={() => onEdit(category)} />
  </div>
);
export default BudgetCard;