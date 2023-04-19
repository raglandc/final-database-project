import { useSession, getSession } from "next-auth/react";
import prisma from "../../lib/prisma";
import Layout from "@/components/Layout";
import MovieCard from "@/components/MovieCard";

export default function FavoritesPage({ movies })
{ 
  const { data: session } = useSession()

  if (session) 
  {
  return (
    <Layout>
      <main className="min-h-screen w-8/12 m-auto xl:w-5/12 my-20 pb-80">
        <div className="py-9 w-full text-center text-white mt-8 m-auto bg-teal-700  rounded-md">
          <h1 className="text-5xl">{session.user.name}'s favorites list 🎥</h1>
        </div>
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
          }) : <p>No movies in {session.user.name}'s favorites</p>}
        </div>
      </main>
    </Layout>
  )
  }
  else {
    return <p>Error. No user signed in.</p>
  }
}

export async function getServerSideProps(context)
{
  const session = await getSession(context);

  //get user information
  const user = await prisma.user.findUnique({
    where : {
      email: session.user.email
    }
  })

  const userId = user.id;
  
  //get watchlist information
  const moviesFromFavorites = await prisma.userLikes.findMany({
    where: { 
      userId: userId,
    },
  })

  // Get movie information
  const movieIds = moviesFromFavorites.map((movie) => movie.movieId)

  const movies = await prisma.movies.findMany({
    where: {
      MoviesID: {
        in: movieIds,
      },
    },
  })

  return {
    props: {
      movies: JSON.parse(JSON.stringify(movies)),
    }
  }
}