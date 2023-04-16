import { useSession } from 'next-auth/react';

import prisma from '../../lib/prisma';
import MovieCard from '@/components/MovieCard';
import Layout from '@/components/Layout';

export default function RecentlyAdded({movies})
{
  const { data : session } = useSession();

  if (session)
  {
    return (
      <Layout>
        <main className='min-h-screen w-8/12 m-auto xl:w-5/12 my-20 pb-80'>
          <h1 className='text-6xl font-bold my-6'>Recently Added</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {movies.map((movie) => {
              return <MovieCard 
                session={session}
                key={movie.MoviesID} 
                title={movie.M_title}
                rating={movie.m_voteAvg}
                image={movie.Poster_Link}
                movieId={movie.MoviesID}
                />
            })}
          </div>
        </main>
      </Layout>
    )
  }
  else 
  {
    return <p>No user signed in</p> 
  }
}

export async function getServerSideProps()
{
  const movies = await prisma.movies.findMany({
    orderBy: [
      { Released_Year: 'desc' },
      { IMDB_Rating: 'desc' },
    ],
    take: 10
  });
  return {
    props: { 
      movies: JSON.parse(JSON.stringify(movies)), 
    }
  }
}