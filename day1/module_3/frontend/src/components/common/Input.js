export default function Input({
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  required = false,
  className = '',
  fullWidth = true,
  ...props
}) {
  const inputId = `input-${Math.random().toString(36).substr(2, 9)}`

  return (
    <div className={`${fullWidth ? 'w-full' : ''} ${className}`}>
      {/* 라벨 */}
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
          {required && <span className="text-danger ml-1">*</span>}
        </label>
      )}

      {/* 입력 필드 */}
      <input
        id={inputId}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={`
          w-full px-3 py-2 border rounded-lg transition-colors
          focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
          disabled:bg-gray-100 disabled:cursor-not-allowed
          ${error ? 'border-danger focus:ring-red-500' : 'border-gray-300'}
        `}
        {...props}
      />

      {/* 에러 메시지 */}
      {error && (
        <p className="mt-1 text-sm text-danger">{error}</p>
      )}
    </div>
  )
}
