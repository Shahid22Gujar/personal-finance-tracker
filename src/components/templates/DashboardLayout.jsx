// DashboardLayout (header, sidebar, content area)
import Navbar from "../organisms/Navbar";
const DashboardLayout = ({ children }) => (
  <div className="dashboard-layout">
    <Navbar />
    <div className="content-full">{children}</div>
  </div>
);
export default DashboardLayout;