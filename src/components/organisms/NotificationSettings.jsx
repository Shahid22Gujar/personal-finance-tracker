import PreferencesForm from "../molecules/PreferencesForm";
const NotificationSettings = ({ notifications, onChange }) => (
  <div className="notification-settings">
    <h3>Notification Preferences</h3>
    <PreferencesForm notifications={notifications} onChange={onChange} />
  </div>
);
export default NotificationSettings;