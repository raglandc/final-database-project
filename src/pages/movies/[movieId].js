import { useRouter } from 'next/router';

import prisma from '../../../lib/prisma';
import Layout from '@/components/Layout';

export default function MovieDetailsPage({ movie }) {
  const router = useRouter();
  const { movieId } = router.query;

  return (
    <Layout>
      <main className='m-auto w-10/12 min-h-screen'>
        <div className='flex p-5 justify-around items-center'>
          <div>
            <h1 className='text-3xl mb-3'>{movie.M_title}</h1>
            <p><strong>Director:</strong> {movie.Director}</p>
            <p><strong>Genre:</strong> {movie.Genre}</p>
            <p><strong>Duration:</strong> {movie.Runtime} minutes</p>
            <p><strong>Rating:</strong> {movie.IMDB_Rating}</p>
          </div>
          <img 
            className='h-80'
            src={movie.Poster_Link}
            alt="movie cover image"
          />
        </div>
        <div className='px-5'>
          <strong>Overview:</strong>
          <p>{movie.M_overview}</p>
        </div>
      </main>
    </Layout>
  );
}

export async function getServerSideProps(context) {
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