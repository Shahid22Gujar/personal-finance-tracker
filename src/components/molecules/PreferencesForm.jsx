const PreferencesForm = ({ notifications, onChange }) => (
  <div className="preferences-form">
    <label>
      <input type="checkbox" checked={notifications} onChange={(e) => onChange('notifications', e.target.checked)} /> Notifications
    </label>
  </div>
);
export default PreferencesForm;