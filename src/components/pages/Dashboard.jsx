import Button from "../atoms/Button";
import DashboardLayout from "../templates/DashboardLayout";
import FinancialSummary from "../organisms/FinancialSummary";
import SpendingTrends from "../organisms/SpendingTrends";
const DashboardPage = () => {
  return (
     <DashboardLayout>
      <div className="dashboard-content">
        <h2 className="dashboard-title">Dashboard</h2>
        <FinancialSummary />
        <SpendingTrends/>
        <div className="actions">
          <Button label="Refresh" className="action-button" onClick={() => alert('Refreshed')} />
          <Button label="Add Transaction" className="action-button" onClick={() => alert('Add Transaction')} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;