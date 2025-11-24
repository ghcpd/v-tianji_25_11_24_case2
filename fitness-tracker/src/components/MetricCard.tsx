import type { WorkoutMetric } from '../types';
import './MetricCard.css';

interface MetricCardProps {
  metric: WorkoutMetric;
}

export function MetricCard({ metric }: MetricCardProps) {
  const isPositive = metric.change >= 0;
  const changeColor = isPositive ? '#10b981' : '#ef4444';

  return (
    <div className="metric-card">
      <div className="metric-icon">{metric.icon}</div>
      <div className="metric-content">
        <h3 className="metric-name">{metric.name}</h3>
        <div className="metric-value">
          {metric.value.toLocaleString()} <span className="metric-unit">{metric.unit}</span>
        </div>
        <div className="metric-change" style={{ color: changeColor }}>
          {isPositive ? '↑' : '↓'} {Math.abs(metric.change)}% from last month
        </div>
      </div>
    </div>
  );
}
