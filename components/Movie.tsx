import Image from 'next/image'

export interface MovieProps {
  movie_banner?: string
  title?: string
  description?: string
  director?: string
  producer?: string
}

export function Movie({
  movie_banner,
  title,
  description,
  director,
  producer
}: MovieProps) {
  return (
    <div className="flex w-4/5 border-2 border-transparent text-zinc-400 bg-gray-600 mb-6 p-2 hover:border-zinc-400 transition-colors">
      <div className="mr-2 flex items-center">
        {movie_banner ? (
          <Image src={movie_banner} width={120} height={120} />
        ) : (
          false
        )}
      </div>
      <div className="w-3/4 ">
        <h2 className="font-bold text-zinc-100 text-xl">{title}</h2>
        <p className="break-words w-full text-zinc-300">{description}</p>
        <div className="flex justify-end items-center">
          <p className="mr-2 text-sm">Director:</p>
          <p className="mr-2 text-zinc-200">{director}</p>
          <p className="mr-2 text-sm">Producer:</p>
          <p className="text-zinc-200">{producer}</p>
        </div>
      </div>
    </div>
  )
}
