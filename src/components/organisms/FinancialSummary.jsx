// FinancialSummary (combining multiple StatCards)
import { useSelector } from 'react-redux'; // for reading data from store redux
import StatCard from "../molecules/StatCard";
const FinancialSummary = () => {
  const { totalIncome, totalExpenses, savings } = useSelector((state) => state.dashboard);
  return (<div className="financial-summary">
      <StatCard title="Total Income" value={totalIncome} />
      <StatCard title="Total Expenses" value={totalExpenses} />
      <StatCard title="Savings" value={savings} />
    </div>)
};
export default FinancialSummary;