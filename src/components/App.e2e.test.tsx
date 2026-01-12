import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('E2E: Fitness Tracker User Journey', () => {
  it('should display complete fitness dashboard on load', () => {
    render(<App />);

    // Header section - use regex to avoid footer text
    expect(screen.getByRole('heading', { name: /Fitness Progress Tracker/ })).toBeInTheDocument();

    // Current Metrics section
    expect(screen.getByText('Current Metrics')).toBeInTheDocument();
    expect(screen.getByText('Current Weight')).toBeInTheDocument();
    expect(screen.getByText('Steps Today')).toBeInTheDocument();
    expect(screen.getByText('Workout Time')).toBeInTheDocument();
    expect(screen.getByText('Calories')).toBeInTheDocument();

    // Weekly Goals section
    expect(screen.getByText('Weekly Goals')).toBeInTheDocument();
    expect(screen.getByText('Weight Loss Goal')).toBeInTheDocument();
    expect(screen.getByText('Daily Steps Goal')).toBeInTheDocument();

    // Weekly Summary section
    expect(screen.getByText('Weekly Summary')).toBeInTheDocument();

    // Footer
    expect(screen.getByText(/Keep pushing forward/)).toBeInTheDocument();
  });

  it('should display accurate metric values from store', () => {
    render(<App />);

    // Check specific metric values
    const metricElements = screen.getAllByText(/75/);
    expect(metricElements.length).toBeGreaterThan(0);

    const stepsElements = screen.getAllByText(/8432/);
    expect(stepsElements.length).toBeGreaterThan(0);
  });

  it('should display weekly data for all 7 days', () => {
    render(<App />);

    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    days.forEach((day) => {
      const elements = screen.getAllByText(day);
      expect(elements.length).toBeGreaterThan(0);
    });
  });

  it('should show progress bars for all goals', () => {
    const { container } = render(<App />);

    const progressBars = container.querySelectorAll('.bg-gradient-to-t, .bg-blue-500, .bg-green-500, .bg-orange-500, .bg-purple-500');
    expect(progressBars.length).toBeGreaterThan(0);
  });

  it('should have proper semantic HTML structure', () => {
    const { container } = render(<App />);

    expect(container.querySelector('header')).toBeInTheDocument();
    expect(container.querySelector('main')).toBeInTheDocument();
    expect(container.querySelector('footer')).toBeInTheDocument();
    expect(container.querySelector('section')).toBeInTheDocument();
  });

  it('should display responsive grid layouts', () => {
    const { container } = render(<App />);

    const grids = container.querySelectorAll('[class*="grid"]');
    expect(grids.length).toBeGreaterThan(0);
  });

  it('should apply gradient and styling to header', () => {
    const { container } = render(<App />);

    const header = container.querySelector('header');
    expect(header).toHaveClass('bg-gradient-to-r');
    expect(header).toHaveClass('from-blue-600');
    expect(header).toHaveClass('to-purple-600');
    expect(header).toHaveClass('text-white');
  });

  it('should display all icons in metric cards', () => {
    render(<App />);

    // Check for emoji icons
    expect(screen.getByText('⚖️')).toBeInTheDocument();
    expect(screen.getByText('👟')).toBeInTheDocument();
    expect(screen.getByText('🏋️')).toBeInTheDocument();
    expect(screen.getByText('🔥')).toBeInTheDocument();
  });
});
