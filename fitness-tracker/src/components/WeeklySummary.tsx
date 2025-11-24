import type { WeeklySummary } from '../types';
import './WeeklySummary.css';

interface WeeklySummaryProps {
  summary: WeeklySummary;
}

export function WeeklySummaryComponent({ summary }: WeeklySummaryProps) {
  const maxCalories = Math.max(...summary.activities.map(a => a.calories));

  return (
    <div className="weekly-summary">
      <div className="summary-header">
        <h2 className="summary-title">Weekly Summary</h2>
        <span className="summary-week">{summary.week}</span>
      </div>

      <div className="summary-stats">
        <div className="summary-stat">
          <div className="stat-icon">🔥</div>
          <div>
            <div className="stat-value">{summary.totalCalories.toLocaleString()}</div>
            <div className="stat-label">Total Calories</div>
          </div>
        </div>
        <div className="summary-stat">
          <div className="stat-icon">💪</div>
          <div>
            <div className="stat-value">{summary.totalWorkouts}</div>
            <div className="stat-label">Workouts</div>
          </div>
        </div>
        <div className="summary-stat">
          <div className="stat-icon">⏱️</div>
          <div>
            <div className="stat-value">{summary.totalDuration}</div>
            <div className="stat-label">Minutes</div>
          </div>
        </div>
      </div>

      <div className="activity-chart">
        {summary.activities.map((activity) => (
          <div key={activity.day} className="activity-bar">
            <div className="activity-day">{activity.day}</div>
            <div className="bar-container">
              <div
                className={`bar-fill ${activity.completed ? 'completed' : 'incomplete'}`}
                style={{ 
                  height: maxCalories > 0 ? `${(activity.calories / maxCalories) * 100}%` : '0%' 
                }}
              >
                {activity.completed && (
                  <span className="bar-value">{activity.calories}</span>
                )}
              </div>
            </div>
            <div className={`activity-status ${activity.completed ? 'completed' : ''}`}>
              {activity.completed ? '✓' : '—'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
