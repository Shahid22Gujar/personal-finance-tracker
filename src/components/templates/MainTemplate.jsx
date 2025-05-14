import Navbar from "../organisms/Navbar";
const MainTemplate = ({ children }) => (
  <div className="dashboard-layout">
    <Navbar />
    <div className="content-full">{children}</div>
  </div>
);
export default MainTemplate;