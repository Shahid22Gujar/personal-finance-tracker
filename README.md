# Atomic Design Project Structure

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

# Command to deploy project on Netlify
- `npm install netlify-cli -g`
- `netlify init`