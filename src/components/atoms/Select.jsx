const Select = ({ options, value, onChange, className }) => (
  <select value={value} onChange={onChange} className={className}>
    {options.map((option, index) => <option key={index} value={option}>{option}</option>)}
  </select>
);
export default Select;