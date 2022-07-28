import { Movie, MovieProps } from './Movie'

export function ListMovies({ movies }: any): any {
  return (
    <div className="">
      <ul className="overflow-visible">
        {movies.map((item: MovieProps, i: number) => {
          return (
            <li className="flex justify-center" key={i}>
              <Movie
                title={item.title}
                description={item.description}
                movie_banner={item.movie_banner}
                director={item.director}
                producer={item.producer}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
