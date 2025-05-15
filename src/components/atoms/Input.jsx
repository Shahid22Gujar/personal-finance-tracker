const Input = ({ value,inputType,isRequired,name, onChange, placeholder, className }) => <input name={name} value={value} required={isRequired} type={inputType} onChange={onChange} placeholder={placeholder} className={className} />;
export default Input;
