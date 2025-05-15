import KeyStats from "../molecules/KeyStats";
const KeyStatsDisplay = () => {
  const topCategory = "Groceries";
  const biggestExpense = "$500 on Rent";

  return (
    <div className="key-stats-display">
      <KeyStats title="Top Expense Category" value={topCategory} />
      <KeyStats title="Biggest Expense of the Month" value={biggestExpense} />
    </div>
  );
};

export default KeyStatsDisplay;
