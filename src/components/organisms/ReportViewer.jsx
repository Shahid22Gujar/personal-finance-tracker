import Chart from '../molecules/Chart'
const ReportViewer = ({ data }) => (
  <div className="report-viewer">
    <Chart data={data} />
  </div>
);
export default ReportViewer;