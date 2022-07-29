import { Movie, MovieProps } from './Movie'

interface ListMoviesProps {
  movies: any
  movieName?: string
}

export function ListMovies({ movies, movieName }: ListMoviesProps): any {
  return (
    <div>
      <ul>
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
