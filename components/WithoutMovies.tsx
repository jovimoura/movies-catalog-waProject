import { SadIcon } from './Icons'

export function WithoutMovies() {
  return (
    <div className="flex justify-center flex-1 ml-28">
      {SadIcon()}
      Not movies...
    </div>
  )
}
