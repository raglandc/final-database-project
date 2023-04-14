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
        <main className='min-h-screen w-full'>
          <h1>Recently Added</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {movies.map((movie) => {
              return <MovieCard 
                key={movie.MoviesID} 
                title={movie.M_title}
                overview={movie.M_overview}
                rating={movie.m_voteAvg}
                image={movie.Poster_Link}
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
      { Released_Year: 'asc' },
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