import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MetricCard } from './MetricCard';

describe('MetricCard Component', () => {
  it('should render metric label and value', () => {
    render(
      <MetricCard
        label="Test Metric"
        value={100}
        unit="units"
        icon="🎯"
        color="blue"
      />,
    );

    expect(screen.getByText('Test Metric')).toBeInTheDocument();
    expect(screen.getByText(/100/)).toBeInTheDocument();
  });

  it('should display correct icon', () => {
    render(
      <MetricCard
        label="Weight"
        value={75}
        unit="kg"
        icon="⚖️"
        color="green"
      />,
    );

    expect(screen.getByText('⚖️')).toBeInTheDocument();
  });

  it('should render unit when provided', () => {
    render(
      <MetricCard
        label="Steps"
        value={8432}
        unit="steps"
        icon="👟"
        color="orange"
      />,
    );

    expect(screen.getByText(/steps/)).toBeInTheDocument();
  });

  it('should apply correct color class', () => {
    const { container } = render(
      <MetricCard
        label="Test"
        value={50}
        icon="🔥"
        color="purple"
      />,
    );

    const coloredDiv = container.querySelector('.bg-purple-50');
    expect(coloredDiv).toBeInTheDocument();
  });
});
