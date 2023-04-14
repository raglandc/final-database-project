import { useSession } from "next-auth/react";
import prisma from "../../lib/prisma";
import Layout from "@/components/Layout";
import MovieBar from "@/components/MovieCard";

export default function WatchList({movies})
{
  const { data: session } = useSession()

  if (session) 
  {
  return (
    <Layout>
      <main className="min-h-screen m-auto w-10/12">
        <div className="p-4 w-10/12 text-white mt-8 m-auto bg-teal-900 opacity-80 rounded-md">
          <h1 className="text-5xl">{session.user.name}'s watch list 🎥</h1>
        </div>
        {/* {movies.map((movie) => {
          return <MovieBar 
                  title={movie.M_title}
                  overview={movie.M_overview}
                  />
        })} */}
      </main>
    </Layout>
  )
  }
  else {
    return <p>Error. No user signed in.</p>
  }
}