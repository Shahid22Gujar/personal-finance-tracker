import Text from '../atoms/Text'
const KeyStats = ({ title, value }) => (
  <div className="key-stat">
    <Text className="key-stat-title">{title}</Text>
    <Text className="key-stat-value">{value}</Text>
  </div>
);
export default KeyStats;