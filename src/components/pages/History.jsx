import MainTemplate from "../templates/MainTemplate";
import TransactionTable from "../organisms/TransactionTable";
const TransactionHistoryPage = () => (
  <MainTemplate>
    <div className="transaction-content">
      <h2 className="dashboard-title">Transaction History</h2>
      <TransactionTable />
    </div>
  </MainTemplate>
);

export default TransactionHistoryPage;