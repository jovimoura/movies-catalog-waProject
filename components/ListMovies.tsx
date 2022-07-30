import { Movie, MovieProps } from './Movie'
import { WithoutMovies } from './WithoutMovies'

interface ListMoviesProps {
  movies: any
}

export function ListMovies({ movies }: ListMoviesProps): any {
  return (
    <div>
      <ul>
        {movies.length !== 0 ? (
          movies.map((item: MovieProps, i: number) => {
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
          })
        ) : (
          <WithoutMovies />
        )}
      </ul>
    </div>
  )
}
