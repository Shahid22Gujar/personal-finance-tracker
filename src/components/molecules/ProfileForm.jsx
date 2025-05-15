import Input from "../atoms/Input";
const ProfileForm = ({ name, email,currency, onChange }) => (
  <div className="profile-form">
    <Input inputType='text' isRequired={true} value={name} onChange={(e) => onChange('name', e.target.value)} placeholder="Name" className="profile-input" />
    <Input inputType='email' isRequired={true} value={email} onChange={(e) => onChange('email', e.target.value)} placeholder="Email" className="profile-input" />
    <Input  inputType='text' isRequired={true} value={currency} onChange={(e) => onChange('currency', e.target.value)} placeholder="Default Currency" className="profile-input" />
  </div>
);
export default ProfileForm;