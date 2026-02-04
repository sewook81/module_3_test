import { render, screen } from '@testing-library/react'
import Badge from '@/components/common/Badge'

describe('Badge Component', () => {
  it('renders children content', () => {
    render(<Badge>Badge Text</Badge>)
    expect(screen.getByText('Badge Text')).toBeInTheDocument()
  })

  it('applies info status styles by default', () => {
    render(<Badge>Info Badge</Badge>)
    const badge = screen.getByText('Info Badge')
    expect(badge).toHaveClass('bg-blue-100', 'text-primary-700')
  })

  it('applies success status styles', () => {
    render(<Badge status="success">Success Badge</Badge>)
    const badge = screen.getByText('Success Badge')
    expect(badge).toHaveClass('bg-green-100', 'text-success')
  })

  it('applies warning status styles', () => {
    render(<Badge status="warning">Warning Badge</Badge>)
    const badge = screen.getByText('Warning Badge')
    expect(badge).toHaveClass('bg-yellow-100', 'text-warning')
  })

  it('applies danger status styles', () => {
    render(<Badge status="danger">Danger Badge</Badge>)
    const badge = screen.getByText('Danger Badge')
    expect(badge).toHaveClass('bg-red-100', 'text-danger')
  })

  it('applies neutral status styles', () => {
    render(<Badge status="neutral">Neutral Badge</Badge>)
    const badge = screen.getByText('Neutral Badge')
    expect(badge).toHaveClass('bg-gray-100', 'text-gray-700')
  })

  it('applies small size styles', () => {
    render(<Badge size="sm">Small Badge</Badge>)
    const badge = screen.getByText('Small Badge')
    expect(badge).toHaveClass('px-2', 'py-0.5', 'text-xs')
  })

  it('applies medium size styles by default', () => {
    render(<Badge>Medium Badge</Badge>)
    const badge = screen.getByText('Medium Badge')
    expect(badge).toHaveClass('px-2.5', 'py-1', 'text-xs')
  })

  it('applies large size styles', () => {
    render(<Badge size="lg">Large Badge</Badge>)
    const badge = screen.getByText('Large Badge')
    expect(badge).toHaveClass('px-3', 'py-1.5', 'text-sm')
  })

  it('applies custom className', () => {
    render(<Badge className="custom-class">Custom Badge</Badge>)
    const badge = screen.getByText('Custom Badge')
    expect(badge).toHaveClass('custom-class')
  })

  it('has base badge styles', () => {
    render(<Badge>Base Badge</Badge>)
    const badge = screen.getByText('Base Badge')
    expect(badge).toHaveClass('inline-flex', 'items-center', 'font-semibold', 'rounded-full')
  })
})
