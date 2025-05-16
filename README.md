# Atomic Design Project Structure
**Deployed URL:** [Personal Finance Tracker](https://tutedude-personal-finance-tracker.netlify.app/)

## Dashboard Page

### Atoms

* **Text** (Total Income, Total Expenses, Savings, etc.)
* **Buttons** (Refresh, Add Transaction)
* **Icons** (Chart icons)

### Molecules

* **StatCard** (for displaying Total Income, Total Expenses, etc.)
* **Chart** (BarChart, PieChart)

### Organisms

* **FinancialSummary** (combining multiple StatCards)
* **SpendingTrends** (Chart components)

### Template

* **DashboardLayout** (header, sidebar, content area)

### Page

* **DashboardPage**

---

## Add Transaction Page

### Atoms

* **Input** (Amount, Description)
* **Select** (Category, Transaction Type)
* **Button** (Submit, Reset)
* **DatePicker**

### Molecules

* **FormField** (Label + Input)
* **TransactionTypeSelector** (Income/Expense dropdown)

### Organisms

* **TransactionForm** (Form with validation)

### Template

* **TransactionLayout** (header, sidebar, form area)

### Page

* **AddTransactionPage**

---

## Transaction History Page

### Atoms

* **Text** (Category, Date, Amount)
* **Button** (Edit, Delete)

### Molecules

* **TableRow** (Individual transaction row)
* **PaginationControl**

### Organisms

* **TransactionTable** (All transactions with sorting/filtering)

### Template

* **HistoryLayout** (header, sidebar, table area)

### Page

* **TransactionHistoryPage**

---

## Budgets Page

### Atoms

* **Text** (Category, Budget, Spent)
* **ProgressBar** (for budget utilization)
* **Button** (Add, Update)

### Molecules

* **BudgetCard** (Category + Budget + Progress)

### Organisms

* **BudgetList** (All budgets)

### Template

* **BudgetLayout** (header, sidebar, budget area)

### Page

* **BudgetsPage**

---

## Reports Page

### Atoms

* **Text** (Report Type, Date Range)
* **Button** (Export as PDF/CSV)

### Molecules

* **DateRangePicker**
* **Chart** (BarChart, LineChart)

### Organisms

* **ReportViewer** (Interactive reports)

### Template

* **ReportsLayout** (header, sidebar, report area)

### Page

* **ReportsPage**

---

## Settings/Profile Page

### Atoms

* **Input** (Name, Email)
* **Button** (Save Changes)

### Molecules

* **ProfileForm**
* **PreferencesForm**

### Organisms

* **ProfileSettings** (Form for profile details)
* **NotificationSettings** (Notification preferences)

### Template

* **SettingsLayout** (header, sidebar, settings area)

### Page

* **SettingsPage**

# 🚀 Why I Used Redux Toolkit in My Project

In my current project, I leveraged **Redux Toolkit (@reduxjs/toolkit)** instead of the traditional Redux setup because it significantly simplifies Redux development, enhances performance, and adheres to best practices.

---

## 🚀 Why Redux Toolkit is Better

### ✅ Simpler Code with `createSlice`

* **Traditional Redux:** Requires separate files and boilerplate for action creators, action types, and reducers.
* **Redux Toolkit:** Combines all three into a clean, efficient structure using `createSlice`.

```javascript
// ✅ Traditional Redux
const INCREMENT = "INCREMENT";
const increment = () => ({ type: INCREMENT });

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    default:
      return state;
  }
};

// ✅ Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
  },
});
```

---

### ✅ Automatic State Immutability with Immer

* Redux Toolkit uses **Immer** under the hood, allowing direct state mutations without violating immutability.

---

### ✅ Built-in Best Practices

* Automatically sets up **Redux DevTools Extension**.
* Provides **better error messages** during development.
* Simplifies configuration with **`configureStore`**.

---

### ✅ Scalable Structure

* `createSlice` and `configureStore` allow efficient organization of the Redux store, making it easier to scale.

---

### ✅ Built-in Redux Thunk

* Async actions are easily managed without the need for additional middleware.

---

### ✅ Installation Command

```bash
// Install Redux Toolkit and React-Redux
npm install @reduxjs/toolkit react-redux
```


# Command to run the application:
- `npm run dev`
# Command to deploy project on Netlify
- `npm install netlify-cli -g`
- `netlify init`