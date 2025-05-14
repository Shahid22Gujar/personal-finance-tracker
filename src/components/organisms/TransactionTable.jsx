import { useState } from "react";
import Button from "../atoms/Button";
import Select from "../atoms/Select";
const TransactionTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [sortBy, setSortBy] = useState('date');
  const [filterType, setFilterType] = useState('All');

  const transactions = Array.from({ length: 25 }, (_, i) => ({
    date: '2023-05-01', category: 'Groceries', amount: (i + 1) * 10, type: i % 2 === 0 ? 'Expense' : 'Income', description: 'Sample transaction'
  }));

  const filteredTransactions = transactions.filter((t) => filterType === 'All' || t.type === filterType);

  const sortedTransactions = [...filteredTransactions].sort((a, b) => {
    if (sortBy === 'amount') return b.amount - a.amount;
    return new Date(b.date) - new Date(a.date);
  });

  const paginatedTransactions = sortedTransactions.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const totalPages = Math.ceil(sortedTransactions.length / itemsPerPage);

  return (
    <div className="transaction-table-container">
      <div className="filter-sort-controls">
        <Select options={['All', 'Income', 'Expense']} value={filterType} onChange={(e) => setFilterType(e.target.value)} className="filter-select" />
        <Select options={['date', 'amount']} value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="sort-select" />
      </div>
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {paginatedTransactions.map((transaction, index) => (
            <tr key={index} className="transaction-row">
              <td>{transaction.date}</td>
              <td>{transaction.category}</td>
              <td>${transaction.amount.toFixed(2)}</td>
              <td>{transaction.type}</td>
              <td>{transaction.description}</td>
              <td><Button label="Edit" className="action-button edit" /></td>
              <td><Button label="Delete" className="action-button delete" /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-controls">
        <Button label="Previous" onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} />
        <span>Page {currentPage} of {totalPages}</span>
        <Button label="Next" onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} />
      </div>
    </div>
  );
};
export default TransactionTable;