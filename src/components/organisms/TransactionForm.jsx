import { useState } from "react";
import FormField from "../molecules/FormField";
import Input from "../atoms/Input";
import Select from "../atoms/Select";
import Button from "../atoms/Button";
const TransactionForm = () => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Groceries');
  const [type, setType] = useState('Income');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Transaction Added: ${type} - ${category} - $${amount}`);
  };

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      <FormField label="Amount"><Input value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="$0.00" /></FormField>
      <FormField label="Description"><Input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter description" /></FormField>
      <FormField label="Category"><Select options={["Groceries", "Rent", "Entertainment"]} value={category} onChange={(e) => setCategory(e.target.value)} /></FormField>
      <FormField label="Transaction Type"><Select options={["Income", "Expense"]} value={type} onChange={(e) => setType(e.target.value)} /></FormField>
      <Button label="Submit" className="action-button" />
    </form>
  );
};
export default TransactionForm;