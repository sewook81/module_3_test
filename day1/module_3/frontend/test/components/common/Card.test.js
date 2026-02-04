import { render, screen } from '@testing-library/react'
import Card from '@/components/common/Card'

describe('Card Component', () => {
  it('renders children content', () => {
    render(
      <Card>
        <p>Card Content</p>
      </Card>
    )
    expect(screen.getByText('Card Content')).toBeInTheDocument()
  })

  it('renders title when provided', () => {
    render(
      <Card title="Card Title">
        <p>Card Content</p>
      </Card>
    )
    expect(screen.getByText('Card Title')).toBeInTheDocument()
  })

  it('renders subtitle when provided', () => {
    render(
      <Card title="Card Title" subtitle="Card Subtitle">
        <p>Card Content</p>
      </Card>
    )
    expect(screen.getByText('Card Subtitle')).toBeInTheDocument()
  })

  it('renders action element when provided', () => {
    render(
      <Card title="Card Title" action={<button>Action Button</button>}>
        <p>Card Content</p>
      </Card>
    )
    expect(screen.getByText('Action Button')).toBeInTheDocument()
  })

  it('renders without header when title and action are not provided', () => {
    const { container } = render(
      <Card>
        <p>Card Content</p>
      </Card>
    )
    const header = container.querySelector('.border-b')
    expect(header).not.toBeInTheDocument()
  })

  it('applies padding by default', () => {
    const { container } = render(
      <Card title="Card Title">
        <p>Card Content</p>
      </Card>
    )
    const content = container.querySelector('.p-6')
    expect(content).toBeInTheDocument()
  })

  it('removes padding when padding is false', () => {
    const { container } = render(
      <Card title="Card Title" padding={false}>
        <p>Card Content</p>
      </Card>
    )
    const content = container.querySelector('.p-0')
    expect(content).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(
      <Card className="custom-class">
        <p>Card Content</p>
      </Card>
    )
    const card = container.firstChild
    expect(card).toHaveClass('custom-class')
  })

  it('has default card styles', () => {
    const { container } = render(
      <Card>
        <p>Card Content</p>
      </Card>
    )
    const card = container.firstChild
    expect(card).toHaveClass('bg-white', 'rounded-lg', 'shadow-md')
  })

  it('renders title without subtitle', () => {
    render(
      <Card title="Card Title">
        <p>Card Content</p>
      </Card>
    )
    expect(screen.getByText('Card Title')).toBeInTheDocument()
    expect(screen.queryByRole('paragraph', { class: 'text-sm' })).not.toBeInTheDocument()
  })

  it('renders header with correct layout', () => {
    const { container } = render(
      <Card title="Card Title" action={<button>Action</button>}>
        <p>Card Content</p>
      </Card>
    )
    const header = container.querySelector('.flex.items-center.justify-between')
    expect(header).toBeInTheDocument()
  })
})
