interface InputProps {
  onChange?: (e: any) => void
  value?: any
  type?: string
  placeholder?: string
  icon?: string
  rest?: any
}

export function Input({
  onChange,
  value,
  type,
  placeholder,
  icon,
  rest
}: InputProps) {
  return (
    <div className="flex w-3/5 font-medium bg-zinc-700 py-2.5 pl-2  mb-5">
      {icon && (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mx-2 text-zinc-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
          </svg>
        </>
      )}
      <input
        className="focus:outline-none text-zinc-400 bg-transparent w-full"
        onChange={onChange}
        value={value}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  )
}
