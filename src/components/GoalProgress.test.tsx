import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { GoalProgress } from './GoalProgress';

describe('GoalProgress Component', () => {
  it('should render goal name and progress values', () => {
    render(
      <GoalProgress
        name="Weight Loss Goal"
        current={75}
        target={72}
        unit="kg"
        color="blue"
      />,
    );

    expect(screen.getByText('Weight Loss Goal')).toBeInTheDocument();
    expect(screen.getByText(/75 \/ 72 kg/)).toBeInTheDocument();
  });

  it('should calculate progress percentage correctly', () => {
    render(
      <GoalProgress
        name="Steps Goal"
        current={5000}
        target={10000}
        unit="steps"
        color="green"
      />,
    );

    expect(screen.getByText('50% complete')).toBeInTheDocument();
  });

  it('should cap percentage at 100%', () => {
    render(
      <GoalProgress
        name="Test Goal"
        current={120}
        target={100}
        unit="unit"
        color="orange"
      />,
    );

    expect(screen.getByText('100% complete')).toBeInTheDocument();
  });

  it('should display complete when current equals target', () => {
    render(
      <GoalProgress
        name="Completed Goal"
        current={100}
        target={100}
        unit="min"
        color="purple"
      />,
    );

    expect(screen.getByText('100% complete')).toBeInTheDocument();
  });
});
