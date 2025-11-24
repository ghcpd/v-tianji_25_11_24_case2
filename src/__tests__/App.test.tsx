import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('renders header and progress bar', () => {
    render(<App />)

    expect(screen.getByText(/Fitness Progress/i)).toBeInTheDocument()

    const bar = screen.getByTestId('progress-bar')
    expect(bar).toBeInTheDocument()
    // it should have style width defined (string)
    expect(bar.getAttribute('style') || '').toContain('width')
  })
})
