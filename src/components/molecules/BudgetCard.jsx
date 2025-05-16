import { useDispatch } from "react-redux";
import ProgressBar from "../atoms/ProgressBar";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
const BudgetCard = ({ category, budget, spent, onEdit }) =>{
  const dispatch = useDispatch();
  return  (
  
  <div className="budget-card">
    <Text className="budget-category">{category}</Text>
    <Text className="budget-amount">Budget: ${budget}</Text>
    <Text className="budget-spent">Spent: ${spent}</Text>
    <ProgressBar value={spent} max={budget} className="budget-progress" />
    <br></br>
    <Button label="Edit" className="action-button" onClick={() => dispatch(onEdit({category:category}))} />
  </div>
)
};
export default BudgetCard;