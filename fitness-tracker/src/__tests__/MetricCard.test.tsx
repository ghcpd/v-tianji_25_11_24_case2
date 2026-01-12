import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MetricCard } from '../components/MetricCard';
import type { WorkoutMetric } from '../types';

describe('MetricCard', () => {
  const mockMetric: WorkoutMetric = {
    id: '1',
    name: 'Total Workouts',
    value: 24,
    unit: 'sessions',
    icon: '💪',
    change: 12.5,
  };

  it('renders metric information correctly', () => {
    render(<MetricCard metric={mockMetric} />);
    
    expect(screen.getByText('Total Workouts')).toBeInTheDocument();
    expect(screen.getByText('24')).toBeInTheDocument();
    expect(screen.getByText('sessions')).toBeInTheDocument();
    expect(screen.getByText('💪')).toBeInTheDocument();
  });

  it('displays positive change correctly', () => {
    render(<MetricCard metric={mockMetric} />);
    
    expect(screen.getByText(/↑/)).toBeInTheDocument();
    expect(screen.getByText(/12.5% from last month/)).toBeInTheDocument();
  });

  it('displays negative change correctly', () => {
    const negativeMetric = { ...mockMetric, change: -5.5 };
    render(<MetricCard metric={negativeMetric} />);
    
    expect(screen.getByText(/↓/)).toBeInTheDocument();
    expect(screen.getByText(/5.5% from last month/)).toBeInTheDocument();
  });

  it('formats large numbers with locale string', () => {
    const largeValueMetric = { ...mockMetric, value: 3450 };
    render(<MetricCard metric={largeValueMetric} />);
    
    expect(screen.getByText('3,450')).toBeInTheDocument();
  });
});
