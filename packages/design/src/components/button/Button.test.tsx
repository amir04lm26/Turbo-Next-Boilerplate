import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('renders the button', () => {
    const label = 'label'
    const bgColor = '#f139f2'
    render(<Button label={label} backgroundColor={bgColor} />)

    const button = screen.getByText(label)

    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle({ backgroundColor: bgColor })
  })
})
