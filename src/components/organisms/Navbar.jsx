import Heading from "../atoms/heading";
const Navbar = () => (
  <nav className="navbar">
    <Heading className='text-color'>Personal Finance Tracker</Heading>
    <div className="nav-links">
      <a href="/">Dashboard</a>
      <a href="/add-transaction">Add Transaction</a>
      <a href="/history">Transaction History</a>
      <a href="/budgets">Budgets</a>
      <a href="/reports">Reports</a>
      <a href="/settings">Settings</a>
    </div>
  </nav>
);
export default Navbar;