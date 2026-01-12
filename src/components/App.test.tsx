import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('App Integration', () => {
  it('should render main application', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /Fitness Progress Tracker/ })).toBeInTheDocument();
    expect(screen.getByText('Current Metrics')).toBeInTheDocument();
    expect(screen.getByText('Weekly Goals')).toBeInTheDocument();
    expect(screen.getByText('Weekly Summary')).toBeInTheDocument();
  });

  it('should display all metric cards', () => {
    render(<App />);

    expect(screen.getByText('Current Weight')).toBeInTheDocument();
    expect(screen.getByText('Steps Today')).toBeInTheDocument();
    expect(screen.getByText('Workout Time')).toBeInTheDocument();
    expect(screen.getByText('Calories')).toBeInTheDocument();
  });

  it('should display all goal progress sections', () => {
    render(<App />);

    expect(screen.getByText('Weight Loss Goal')).toBeInTheDocument();
    expect(screen.getByText('Daily Steps Goal')).toBeInTheDocument();
    expect(screen.getByText('Workout Duration Goal')).toBeInTheDocument();
    expect(screen.getByText('Calorie Intake Goal')).toBeInTheDocument();
  });

  it('should render footer', () => {
    render(<App />);

    expect(
      screen.getByText(/Fitness Progress Tracker. Keep pushing forward!/),
    ).toBeInTheDocument();
  });

  it('should have main layout structure', () => {
    const { container } = render(<App />);

    expect(container.querySelector('header')).toBeInTheDocument();
    expect(container.querySelector('main')).toBeInTheDocument();
    expect(container.querySelector('footer')).toBeInTheDocument();
  });
});
