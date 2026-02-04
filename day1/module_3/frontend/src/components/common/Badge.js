export default function Badge({
  children,
  status = 'info',
  size = 'md',
  className = ''
}) {
  // 사이즈별 스타일
  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-xs',
    lg: 'px-3 py-1.5 text-sm',
  }

  // 상태별 스타일
  const statusStyles = {
    success: 'bg-green-100 text-success',
    warning: 'bg-yellow-100 text-warning',
    danger: 'bg-red-100 text-danger',
    info: 'bg-blue-100 text-primary-700',
    neutral: 'bg-gray-100 text-gray-700',
  }

  return (
    <span
      className={`inline-flex items-center font-semibold rounded-full ${sizeStyles[size]} ${statusStyles[status]} ${className}`}
    >
      {children}
    </span>
  )
}
