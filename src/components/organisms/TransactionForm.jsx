import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTransaction } from "../../slices/transactionSlice";
import FormField from "../molecules/FormField";
import Input from "../atoms/Input";
import Select from "../atoms/Select";
import Button from "../atoms/Button";
import Paragraph from "../atoms/Paragraph";
import { convertDateToDateStr } from "../../utils/utils";
const TransactionForm = () => {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);
  const [amountError,setAmountError]=useState('')
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Groceries');
  const [type, setType] = useState('Income');

  const handleAmountChange=(event)=>{
    const amountValue=event.target.value;
    if(amountValue<0){
      setAmountError('Amount should be greater than 0')
    }else{
      setAmountError('')
    }
    setAmount(amountValue)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amountError){
      alert('Please fix errors to submit form.')

    }
    else{
      const date = new Date();
      dispatch(addTransaction({date:convertDateToDateStr(date),type:type,category:category,amount:amount,description:description}));
      navigate('/history');
    }
    
  };

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      <FormField label="Amount"><Input inputType='number' value={amount} onChange={handleAmountChange} placeholder="$0.00" />{amountError && <Paragraph paragraphText={amountError} className='error-text' />}</FormField>
      <FormField label="Description"><Input value={description} inputType='text' isRequired={false} onChange={(e) => setDescription(e.target.value)} placeholder="Enter description" /></FormField>
      <FormField label="Category"><Select options={["Groceries", "Rent", "Entertainment"]} value={category} onChange={(e) => setCategory(e.target.value)} /></FormField>
      <FormField label="Transaction Type"><Select options={["Income", "Expense"]} value={type} onChange={(e) => setType(e.target.value)} /></FormField>
      <Button label="Submit" className="action-button" />
    </form>
  );
};
export default TransactionForm;