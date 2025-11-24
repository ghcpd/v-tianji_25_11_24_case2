import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { GoalCard } from '../components/GoalCard';
import type { Goal } from '../types';

describe('GoalCard', () => {
  const mockGoal: Goal = {
    id: '1',
    title: 'Monthly Workout Goal',
    target: 30,
    current: 24,
    unit: 'sessions',
    deadline: '2025-11-30',
  };

  it('renders goal information correctly', () => {
    render(<GoalCard goal={mockGoal} />);
    
    expect(screen.getByText('Monthly Workout Goal')).toBeInTheDocument();
    expect(screen.getByText('24 / 30 sessions')).toBeInTheDocument();
    expect(screen.getByText(/Due:/)).toBeInTheDocument();
  });

  it('calculates progress percentage correctly', () => {
    render(<GoalCard goal={mockGoal} />);
    
    expect(screen.getByText('80% Complete')).toBeInTheDocument();
  });

  it('displays "In Progress" badge for incomplete goals', () => {
    render(<GoalCard goal={mockGoal} />);
    
    expect(screen.getByText('In Progress')).toBeInTheDocument();
  });

  it('displays "Completed" badge for completed goals', () => {
    const completedGoal = { ...mockGoal, current: 30 };
    render(<GoalCard goal={completedGoal} />);
    
    expect(screen.getByText('✓ Completed')).toBeInTheDocument();
  });

  it('displays "Completed" badge for goals exceeding target', () => {
    const exceededGoal = { ...mockGoal, current: 35 };
    render(<GoalCard goal={exceededGoal} />);
    
    expect(screen.getByText('✓ Completed')).toBeInTheDocument();
  });

  it('caps progress bar at 100%', () => {
    const exceededGoal = { ...mockGoal, current: 40, target: 30 };
    render(<GoalCard goal={exceededGoal} />);
    
    const progressFill = document.querySelector('.goal-progress-fill') as HTMLElement;
    expect(progressFill.style.width).toBe('100%');
  });
});
