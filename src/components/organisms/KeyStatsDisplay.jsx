import KeyStats from "../molecules/KeyStats";
import { useSelector } from 'react-redux';
const KeyStatsDisplay = () => {
  const { topCategory, biggestExpense } = useSelector((state) => state.dashboard);

  return (
    <div className="key-stats-display">
      <KeyStats title="Top Expense Category" value={topCategory} />
      <KeyStats title="Biggest Expense of the Month" value={biggestExpense} />
    </div>
  );
};

export default KeyStatsDisplay;
