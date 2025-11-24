import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders the main title', () => {
    render(<App />);
    
    expect(screen.getByText(/Fitness Progress Tracker/)).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    render(<App />);
    
    expect(screen.getByText(/Track your journey to a healthier you/)).toBeInTheDocument();
  });

  it('renders all section titles', () => {
    render(<App />);
    
    expect(screen.getByText('Your Metrics')).toBeInTheDocument();
    expect(screen.getByText('Goals')).toBeInTheDocument();
    expect(screen.getByText('Weekly Summary')).toBeInTheDocument();
  });

  it('renders metric cards', () => {
    render(<App />);
    
    expect(screen.getByText('Total Workouts')).toBeInTheDocument();
    expect(screen.getByText('Calories Burned')).toBeInTheDocument();
    expect(screen.getByText('Active Minutes')).toBeInTheDocument();
    expect(screen.getByText('Distance')).toBeInTheDocument();
  });

  it('renders goal cards', () => {
    render(<App />);
    
    expect(screen.getByText('Monthly Workout Goal')).toBeInTheDocument();
    expect(screen.getByText('Weight Loss Target')).toBeInTheDocument();
    expect(screen.getByText('5K Running Goal')).toBeInTheDocument();
  });

  it('renders footer message', () => {
    render(<App />);
    
    expect(screen.getByText(/Keep pushing your limits!/)).toBeInTheDocument();
  });

  it('displays all metric icons', () => {
    render(<App />);
    
    // Icons appear multiple times (in metrics and weekly summary), so use getAllByText
    expect(screen.getAllByText('💪').length).toBeGreaterThan(0);
    expect(screen.getAllByText('🔥').length).toBeGreaterThan(0);
    expect(screen.getAllByText('⏱️').length).toBeGreaterThan(0);
    expect(screen.getByText('🏃')).toBeInTheDocument();
  });
});
