import { useSession } from "next-auth/react";
import prisma from "../../lib/prisma";
import Layout from "@/components/Layout";
import MovieBar from "@/components/MovieBar";

export default function WatchList({movies})
{
  const { data: session } = useSession()

  if (session) 
  {
  return (
    <Layout>
      <main className="min-h-screen m-auto w-full flex">
        <aside className="w-4/12">
          <div className="p-4 w-10/12 text-white mt-8 m-auto bg-teal-900 opacity-80 rounded-md">
            <h1 className="text-5xl">{session.user.name}'s watch list 🎥</h1>
          </div>
        </aside>
        <section className="mx-auto h-full mt-8 w-8/12">
          {movies.map((movie) => {
            return <MovieBar 
                    title={movie.M_title}
                    overview={movie.M_overview}
                    />
          })}
        </section>
      </main>
    </Layout>
  )
  }
  else {
    return <p>Error. No user signed in.</p>
  }
}

export async function getServerSideProps()
{

  const movies = await prisma.movies.findMany({
    where: {
      MoviesID: {lte: 4}
    }
  });

  return {
    props: { 
      movies: JSON.parse(JSON.stringify(movies)), 
    }
  }
}