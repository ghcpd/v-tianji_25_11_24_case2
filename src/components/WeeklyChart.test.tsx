import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { WeeklyChart } from './WeeklyChart';

describe('WeeklyChart Component', () => {
  const mockData = [
    { day: 'Mon', value: 7500, maxValue: 12000 },
    { day: 'Tue', value: 9200, maxValue: 12000 },
    { day: 'Wed', value: 8432, maxValue: 12000 },
    { day: 'Thu', value: 10200, maxValue: 12000 },
    { day: 'Fri', value: 9800, maxValue: 12000 },
    { day: 'Sat', value: 11500, maxValue: 12000 },
    { day: 'Sun', value: 6800, maxValue: 12000 },
  ];

  it('should render chart label', () => {
    render(
      <WeeklyChart
        data={mockData}
        label="Weekly Steps"
        unit="steps"
      />,
    );

    expect(screen.getByText(/Weekly Steps - Weekly Summary/)).toBeInTheDocument();
  });

  it('should render all day labels', () => {
    render(
      <WeeklyChart
        data={mockData}
        label="Steps"
        unit="steps"
      />,
    );

    expect(screen.getByText('Mon')).toBeInTheDocument();
    expect(screen.getByText('Tue')).toBeInTheDocument();
    expect(screen.getByText('Sun')).toBeInTheDocument();
  });

  it('should render data values for each day', () => {
    render(
      <WeeklyChart
        data={mockData}
        label="Steps"
        unit="steps"
      />,
    );

    expect(screen.getByText('7500')).toBeInTheDocument();
    expect(screen.getByText('9200')).toBeInTheDocument();
    expect(screen.getByText('11500')).toBeInTheDocument();
  });

  it('should render correct number of bars', () => {
    const { container } = render(
      <WeeklyChart
        data={mockData}
        label="Steps"
        unit="steps"
      />,
    );

    const bars = container.querySelectorAll('.bg-gradient-to-t');
    expect(bars).toHaveLength(7);
  });
});
