import { getSession } from "next-auth/react";
import { useRouter } from 'next/router';

import prisma from '../../../lib/prisma';
import Layout from '@/components/Layout';

export default function MovieDetailsPage({ movie }) {
  const router = useRouter();
  const { movieId } = router.query;

  return (
    <Layout>
      <main className='m-auto w-10/12 xl:w-7/12 min-h-screen'>
        <div className='flex p-5 justify-around items-center'>
          <div>
            <h1 className='text-3xl mb-3'>{movie.M_title}</h1>
            <p><strong>Released:</strong> {movie.Released_Year}</p>
            <p><strong>Director:</strong> {movie.Director}</p>
            <p><strong>Genre(s):</strong> {movie.Genre}</p>
            <p><strong>Duration:</strong> {movie.Runtime} minutes</p>
            <p><strong>Rating:</strong> {movie.IMDB_Rating}</p>
            <p><strong>Starring:</strong> {movie.Star1}, {movie.Star2}, {movie.Star3}, {movie.Star4}</p>
          </div>
          <img 
            className='h-80'
            src={movie.Poster_Link}
            alt="movie cover image"
          />
        </div>
        <div className='px-5 m-auto xl:w-8/12'>
          <strong>Overview:</strong>
          <p>{movie.M_overview}</p>
        </div>
      </main>
    </Layout>
  );
}

export async function getServerSideProps(context)
{
  //if user is not logged in
  //redirect to login
  const session = await getSession(context);
  if (!session)
  {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      }
    }
  }

  const { movieId } = context.query;
  const movie = await prisma.movies.findUnique({
    where: {
      MoviesID: movieId,
    },
  });
  return {
    props: { movie : JSON.parse(JSON.stringify(movie)) }
  };
}







