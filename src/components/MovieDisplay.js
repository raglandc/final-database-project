import MovieCard from "./MovieCard"
import { useEffect } from "react"

export default function MovieDisplay({movies, session, page})
{
  useEffect(() => 
  {
  }, [page, movies])

  return ( 
    <div className="grid mt-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {movies.length > 0 ? movies.map((movie) => {
        return <MovieCard 
                  session={session}
                  key={movie.MoviesID}
                  title={movie.M_title}
                  rating={movie.m_voteAvg}
                  image={movie.Poster_Link}
                  movieId={movie.MoviesID}
                />
        }) : <p>No movies found. Try searching something else</p>
      }
    </div>
  )
}