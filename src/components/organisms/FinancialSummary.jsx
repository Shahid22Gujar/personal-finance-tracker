// FinancialSummary (combining multiple StatCards)
import StatCard from "../molecules/StatCard";
const FinancialSummary = () => (
  <div className="financial-summary">
    <StatCard title="Total Income" value="$5,000" />
    <StatCard title="Total Expenses" value="$3,000" />
    <StatCard title="Savings" value="$2,000" />
  </div>
);
export default FinancialSummary;