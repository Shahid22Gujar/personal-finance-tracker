import Navbar from "../organisms/Navbar";
const SettingTemplate = ({ children }) => (
  <div className="dashboard-layout">
    <Navbar />
    <div className="settings-page">{children}</div>
  </div>
);
export default SettingTemplate;