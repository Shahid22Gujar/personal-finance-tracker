import { useState } from "react";
import SettingTemplate from "../templates/SettingsLayout";
import Button from "../atoms/Button";
import ProfileSettings from "../organisms/ProfileSettings";
import NotificationSettings from "../organisms/NotificationSettings";
export default function Settings() {
  const [currency,setCurrency]=useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notifications, setNotifications] = useState(false);

  const handleChange = (field, value) => {
    if (field === 'name') setName(value);
    if (field === 'email') setEmail(value);
    if (field === 'notifications') setNotifications(value);
    if (field==='currency') setCurrency(value);
  };
  return (
    <SettingTemplate>
      <h2 className="dashboard-title">Settings</h2>
      <ProfileSettings name={name} email={email} currency={currency} onChange={handleChange} />
      <NotificationSettings notifications={notifications} onChange={handleChange} />
      <Button label="Save Changes" className="save-button" onClick={() => alert('Changes Saved')} />
    </SettingTemplate>
  );
}