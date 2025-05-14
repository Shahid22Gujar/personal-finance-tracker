// SpendingTrends (Chart components)
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, ResponsiveContainer,Legend } from 'recharts';
// import '../App.css'; // Custom CSS for styling
const SpendingTrends = () => {
  const data = [
    { name: 'Jan', value: 400 }, { name: 'Feb', value: 300 }, { name: 'Mar', value: 500 }
  ];
  const pieData = [
    { name: 'Rent', value: 500 }, { name: 'Food', value: 300 }, { name: 'Transport', value: 200 }
  ];

  return (
    <div className="spending-trends">
      <h3>Spending Trends</h3>
      <div className="charts">
        <div className="chart">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#3498db" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="chart">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={100} label={({ name, value }) => `${name}: $${value}`}>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={["#3498db", "#2ecc71", "#e74c3c"][index]} />
                ))}
              </Pie>
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
export default SpendingTrends;