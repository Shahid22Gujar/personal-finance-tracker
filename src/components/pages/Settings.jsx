import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SettingTemplate from "../templates/SettingsLayout";
import { handleProfileSetting } from "../../slices/profileSettingSlice";
import Button from "../atoms/Button";
import ProfileSettings from "../organisms/ProfileSettings";
import NotificationSettings from "../organisms/NotificationSettings";
export default function Settings() {
  const dispatch = useDispatch();
  const profileConfig = useSelector((state) => state.setting);
  const currencySaved = profileConfig.currency;
  const nameSaved = profileConfig.name;
  const emailSaved = profileConfig.email;
  const notificationsSaved = profileConfig.notifications;
  const [currency, setCurrency] = useState(currencySaved);
  const [name, setName] = useState(nameSaved);
  const [email, setEmail] = useState(emailSaved);
  const [notifications, setNotifications] = useState(notificationsSaved);

  useEffect(() => {
    setCurrency(currencySaved);
    setName(nameSaved);
    setEmail(emailSaved);
    setNotifications(notificationsSaved);
  }, [nameSaved, emailSaved, currencySaved, notificationsSaved]);

  const handleChange = (field, value) => {
    if (field === "name") setName(value);
    if (field === "email") setEmail(value);
    if (field === "notifications") setNotifications(value);
    if (field === "currency") setCurrency(value);
  };
  return (
    <SettingTemplate>
      <h2 className="dashboard-title">Settings</h2>
      <ProfileSettings
        name={name}
        email={email}
        currency={currency}
        onChange={handleChange}
      />
      <NotificationSettings
        notifications={notifications}
        onChange={handleChange}
      />
      <Button
        label="Save Changes"
        className="save-button"
        onClick={() => {
          dispatch(
            handleProfileSetting({
              name: name,
              email: email,
              currency: currency,
              notifications: notifications,
            })
          );
          alert("Changes Saved");
        }}
      />
    </SettingTemplate>
  );
}
