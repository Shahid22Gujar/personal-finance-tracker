import { Alert } from "../organisms/Alert";
const ProgressBar = ({ value, max, className }) => (
  <div className={className}>
    <div className="progress-bar-fill" style={{ width: `${(value / max) * 100}%` }}></div>
  </div>
);

export default ProgressBar;