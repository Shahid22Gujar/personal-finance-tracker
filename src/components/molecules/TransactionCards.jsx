import Input from "../atoms/Input";
import Button from "../atoms/Button";
export default function TransactionForm({ onSubmit }) {
  return (
    <form className="p-3 bg-light rounded" onSubmit={onSubmit}>
      <Input type="text" placeholder="Description" />
      <Input type="number" placeholder="Amount" />
      <Input type="date" />
      <Button text="Add Transaction" />
    </form>
  );
}
