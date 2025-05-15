import ProfileForm from "../molecules/ProfileForm";
const ProfileSettings = ({ name, email,currency, onChange }) => (
  <div className="profile-settings">
    <h3>Profile Information</h3>
    <ProfileForm name={name} email={email} currency={currency} onChange={onChange} />
  </div>
);
export default ProfileSettings;