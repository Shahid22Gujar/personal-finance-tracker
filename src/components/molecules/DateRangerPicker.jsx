import Input from "../atoms/Input";
const DateRangePicker = ({ startDate, endDate, onChange }) => (
  <div className="date-range-picker">
    <Input inputType='date' isRequired={true} name='start' value={startDate} onChange={(e) => onChange('start', e.target.value)} placeholder="Start Date" />
    <Input inputType='date' isRequired={true} name='end' value={endDate} onChange={(e) => onChange('end', e.target.value)} placeholder="End Date" />
  </div>
);
export default DateRangePicker;