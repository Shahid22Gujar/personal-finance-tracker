import {  Routes, Route } from "react-router-dom";
import './App.css'; // Custom CSS for styling
import DashboardPage from "./components/pages/Dashboard";
import AddTransaction from "./components/pages/AddTransaction";
import History from "./components/pages/History";
import Budgets from "./components/pages/Budgets";
import Reports from "./components/pages/Reports";
import Settings from "./components/pages/Settings";

function App() {
  return (
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/add-transaction" element={<AddTransaction />} />
        <Route path="/history" element={<History />} />
        <Route path="/budgets" element={<Budgets />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
  );
}

export default App;
