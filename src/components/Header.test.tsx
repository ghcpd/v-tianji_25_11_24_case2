import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header Component', () => {
  it('should render main title', () => {
    render(<Header />);
    expect(screen.getByText(/Fitness Progress Tracker/)).toBeInTheDocument();
  });

  it('should render subtitle', () => {
    render(<Header />);
    expect(
      screen.getByText('Monitor your health metrics and achieve your goals'),
    ).toBeInTheDocument();
  });

  it('should render week date information', () => {
    render(<Header />);
    expect(screen.getByText(/Week of Nov 24, 2024/)).toBeInTheDocument();
  });

  it('should have correct styling classes', () => {
    const { container } = render(<Header />);
    const header = container.querySelector('header');
    expect(header).toHaveClass('bg-gradient-to-r');
    expect(header).toHaveClass('from-blue-600');
    expect(header).toHaveClass('to-purple-600');
  });
});
