const PreferencesForm = ({ notifications=false, onChange }) => (
  <div className="preferences-form">
    <label>
      <input type="checkbox" checked={Boolean(notifications)} onChange={(e) => onChange('notifications', e.target.checked)} /> Notifications
    </label>
  </div>
);
export default PreferencesForm;