import { render, screen, fireEvent } from '@testing-library/react'
import Button from '@/components/common/Button'

describe('Button Component', () => {
  it('renders button with children text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)

    fireEvent.click(screen.getByText('Click me'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('does not call onClick when disabled', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick} disabled>Click me</Button>)

    fireEvent.click(screen.getByText('Click me'))
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('applies primary variant styles by default', () => {
    render(<Button>Primary Button</Button>)
    const button = screen.getByText('Primary Button')
    expect(button).toHaveClass('bg-primary-600')
  })

  it('applies secondary variant styles', () => {
    render(<Button variant="secondary">Secondary Button</Button>)
    const button = screen.getByText('Secondary Button')
    expect(button).toHaveClass('bg-gray-200')
  })

  it('applies danger variant styles', () => {
    render(<Button variant="danger">Danger Button</Button>)
    const button = screen.getByText('Danger Button')
    expect(button).toHaveClass('bg-danger')
  })

  it('applies success variant styles', () => {
    render(<Button variant="success">Success Button</Button>)
    const button = screen.getByText('Success Button')
    expect(button).toHaveClass('bg-success')
  })

  it('applies warning variant styles', () => {
    render(<Button variant="warning">Warning Button</Button>)
    const button = screen.getByText('Warning Button')
    expect(button).toHaveClass('bg-warning')
  })

  it('applies outline variant styles', () => {
    render(<Button variant="outline">Outline Button</Button>)
    const button = screen.getByText('Outline Button')
    expect(button).toHaveClass('border-2', 'border-primary-600')
  })

  it('applies ghost variant styles', () => {
    render(<Button variant="ghost">Ghost Button</Button>)
    const button = screen.getByText('Ghost Button')
    expect(button).toHaveClass('text-gray-700')
  })

  it('applies small size styles', () => {
    render(<Button size="sm">Small Button</Button>)
    const button = screen.getByText('Small Button')
    expect(button).toHaveClass('px-3', 'py-1.5', 'text-sm')
  })

  it('applies medium size styles by default', () => {
    render(<Button>Medium Button</Button>)
    const button = screen.getByText('Medium Button')
    expect(button).toHaveClass('px-4', 'py-2', 'text-sm')
  })

  it('applies large size styles', () => {
    render(<Button size="lg">Large Button</Button>)
    const button = screen.getByText('Large Button')
    expect(button).toHaveClass('px-6', 'py-3', 'text-base')
  })

  it('applies full width styles when fullWidth is true', () => {
    render(<Button fullWidth>Full Width Button</Button>)
    const button = screen.getByText('Full Width Button')
    expect(button).toHaveClass('w-full')
  })

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom Class Button</Button>)
    const button = screen.getByText('Custom Class Button')
    expect(button).toHaveClass('custom-class')
  })

  it('renders with correct button type', () => {
    render(<Button type="submit">Submit Button</Button>)
    const button = screen.getByText('Submit Button')
    expect(button).toHaveAttribute('type', 'submit')
  })

  it('has default button type', () => {
    render(<Button>Default Type Button</Button>)
    const button = screen.getByText('Default Type Button')
    expect(button).toHaveAttribute('type', 'button')
  })

  it('applies disabled styles when disabled', () => {
    render(<Button disabled>Disabled Button</Button>)
    const button = screen.getByText('Disabled Button')
    expect(button).toHaveClass('disabled:opacity-50', 'disabled:cursor-not-allowed')
    expect(button).toBeDisabled()
  })
})
