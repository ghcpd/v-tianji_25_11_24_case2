import type { Goal } from '../types';
import './GoalCard.css';

interface GoalCardProps {
  goal: Goal;
}

export function GoalCard({ goal }: GoalCardProps) {
  const progress = (goal.current / goal.target) * 100;
  const isCompleted = progress >= 100;

  return (
    <div className="goal-card">
      <div className="goal-header">
        <h3 className="goal-title">{goal.title}</h3>
        <span className={`goal-badge ${isCompleted ? 'completed' : ''}`}>
          {isCompleted ? '✓ Completed' : 'In Progress'}
        </span>
      </div>
      <div className="goal-progress-info">
        <span className="goal-current">
          {goal.current} / {goal.target} {goal.unit}
        </span>
        <span className="goal-deadline">Due: {new Date(goal.deadline).toLocaleDateString()}</span>
      </div>
      <div className="goal-progress-bar">
        <div 
          className="goal-progress-fill" 
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
      <div className="goal-percentage">{progress.toFixed(0)}% Complete</div>
    </div>
  );
}
