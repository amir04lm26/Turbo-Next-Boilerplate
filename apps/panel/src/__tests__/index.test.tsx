import { render, screen } from '@testing-library/react'
import Home from 'pages/index'

describe('Home', () => {
  it('renders some buttons', () => {
    render(<Home />)

    expect(screen.getByText('Next.js!', { exact: false })).toBeTruthy()
  })
})
