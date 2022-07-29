interface PaginationProps {
  fnc?: any
}

export function Pagination({ fnc }: PaginationProps) {
  function generateRange(n: number) {
    return Array.from({ length: n }, (_, i) => i + 1)
  }
  return (
    <div>
      <ul>
        {generateRange(5).map((item: any, i: number) => {
          return (
            <li
              key={i}
              className="border-2 border-zinc-400 px-6 py-3 hover:bg-zinc-400 hover:text-black transition-colors active:bg-zinc-50"
              onClick={() => {
                fnc(item)
              }}
            >
              {item}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
