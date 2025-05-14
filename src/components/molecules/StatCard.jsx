// StatCard (for displaying Total Income, Total Expenses, etc.)
const StatCard = ({ title, value }) => (
  <div className="stat-card">
    <h3>{title}</h3>
    <p>{value}</p>
  </div>
);
export default StatCard;