import { useRouter } from 'next/router';

import prisma from '../../../lib/prisma';
import Layout from '@/components/Layout';

export default function MovieDetailsPage({ movie }) {
  const router = useRouter();
  const { movieId } = router.query;

  return (
    <Layout>
      <main className='min-h-screen'>
        <h1>{movie.M_title}</h1>
        <img 
          src={movie.Poster_Link}
          alt="movie cover image"
        />
        <p>{movie.M_overview}</p>
        <p>{movie.Runtime}</p>
        <p>{movie.IMBD_Rating}</p>
        <p>{movie.Genre}</p>
        <p>{movie.Director}</p>
        <p>{movie.Gross}</p>
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