import MainTemplate from "../templates/MainTemplate";
import TransactionForm from "../organisms/TransactionForm";
const AddTransactionPage = () => (
  <MainTemplate>
    <div className="transaction-content">
      <h2 className="dashboard-title">Add Transaction</h2>
      <TransactionForm />
    </div>
  </MainTemplate>
);

export default AddTransactionPage;