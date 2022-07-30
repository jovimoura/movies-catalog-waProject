interface TitleProps {
  firstWord: string
  secondWord?: string
}

export function Title({ firstWord, secondWord }: TitleProps) {
  return (
    <h1 className="text-6xl font-semibold py-5">
      {firstWord} <a className="text-green-300">{secondWord}</a>
    </h1>
  )
}
