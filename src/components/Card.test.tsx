import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card Component', () => {
  it('should render children content', () => {
    render(
      <Card>
        <p>Test content</p>
      </Card>,
    );

    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    const { container } = render(
      <Card className="custom-class">
        <p>Content</p>
      </Card>,
    );

    const cardDiv = container.firstChild as HTMLElement;
    expect(cardDiv).toHaveClass('custom-class');
    expect(cardDiv).toHaveClass('bg-white');
    expect(cardDiv).toHaveClass('rounded-lg');
  });

  it('should have correct styling classes', () => {
    const { container } = render(
      <Card>
        <p>Styled</p>
      </Card>,
    );

    const cardDiv = container.firstChild as HTMLElement;
    expect(cardDiv).toHaveClass('shadow-md');
    expect(cardDiv).toHaveClass('p-6');
    expect(cardDiv).toHaveClass('hover:shadow-lg');
  });
});
