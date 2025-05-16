import { useNavigate } from "react-router-dom";
import Button from "../atoms/Button";
import DashboardLayout from "../templates/DashboardLayout";
import FinancialSummary from "../organisms/FinancialSummary";
import SpendingTrends from "../organisms/SpendingTrends";
import KeyStatsDisplay from "../organisms/KeyStatsDisplay";
const DashboardPage = () => {
  const navigate= useNavigate();
  return (
     <DashboardLayout>
      <div className="dashboard-content">
        <h2 className="dashboard-title">Dashboard</h2>
        <FinancialSummary />
        <SpendingTrends/>
        <KeyStatsDisplay/>
        <div className="actions">
          <Button label="Refresh" className="action-button" onClick={() => alert('Refreshed')} />
          <Button label="Add Transaction" className="action-button" onClick={() => navigate('/add-transaction')} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;