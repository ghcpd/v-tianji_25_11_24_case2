import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { WeeklySummaryComponent } from '../components/WeeklySummary';
import type { WeeklySummary } from '../types';

describe('WeeklySummary', () => {
  const mockSummary: WeeklySummary = {
    week: 'Nov 18 - Nov 24',
    totalCalories: 2850,
    totalWorkouts: 6,
    totalDuration: 360,
    activities: [
      { day: 'Mon', calories: 520, duration: 60, completed: true },
      { day: 'Tue', calories: 0, duration: 0, completed: false },
      { day: 'Wed', calories: 480, duration: 55, completed: true },
      { day: 'Thu', calories: 450, duration: 50, completed: true },
      { day: 'Fri', calories: 0, duration: 0, completed: false },
      { day: 'Sat', calories: 700, duration: 90, completed: true },
      { day: 'Sun', calories: 700, duration: 105, completed: true },
    ],
  };

  it('renders weekly summary header', () => {
    render(<WeeklySummaryComponent summary={mockSummary} />);
    
    expect(screen.getByText('Weekly Summary')).toBeInTheDocument();
    expect(screen.getByText('Nov 18 - Nov 24')).toBeInTheDocument();
  });

  it('displays summary statistics correctly', () => {
    render(<WeeklySummaryComponent summary={mockSummary} />);
    
    expect(screen.getByText('2,850')).toBeInTheDocument();
    expect(screen.getByText('Total Calories')).toBeInTheDocument();
    expect(screen.getByText('6')).toBeInTheDocument();
    expect(screen.getByText('Workouts')).toBeInTheDocument();
    expect(screen.getByText('360')).toBeInTheDocument();
    expect(screen.getByText('Minutes')).toBeInTheDocument();
  });

  it('renders all days of the week', () => {
    render(<WeeklySummaryComponent summary={mockSummary} />);
    
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    days.forEach(day => {
      expect(screen.getByText(day)).toBeInTheDocument();
    });
  });

  it('shows completed status for completed activities', () => {
    render(<WeeklySummaryComponent summary={mockSummary} />);
    
    const completedMarkers = screen.getAllByText('✓');
    expect(completedMarkers.length).toBe(5); // 5 completed activities
  });

  it('shows incomplete status for non-completed activities', () => {
    render(<WeeklySummaryComponent summary={mockSummary} />);
    
    const incompleteMarkers = screen.getAllByText('—');
    expect(incompleteMarkers.length).toBe(2); // 2 non-completed activities
  });

  it('displays calorie values for completed activities', () => {
    render(<WeeklySummaryComponent summary={mockSummary} />);
    
    expect(screen.getByText('520')).toBeInTheDocument();
    expect(screen.getByText('480')).toBeInTheDocument();
    expect(screen.getByText('450')).toBeInTheDocument();
  });
});
