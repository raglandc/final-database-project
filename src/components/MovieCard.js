import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import prisma from "../../lib/prisma";

export default function MovieCard({ movieId, title, image })
{
  const { data : session } = useSession();
  const [ isInWatchlist, setIsInWatchlist ] = useState(false);

  useEffect(() => {
    const fetchWatchlist = async () => {
      if (session)
      {
        const userId = session.user.id;
        const result = await prisma.movieWatchlist.findFirst({
          where: {
            userId,
            MovieID: movieId
          }
        });

        setIsInWatchlist(result !== null);
      }
    }
    fetchWatchlist();
  }, [session]);
  
  const watchlistClickHandler = async () => {
    const userId = session.user.id;
    if (isInWatchlist)
    {
      //remove from watch list
      await prisma.movieWatchlist.deleteMany({
        where: {
          userId, 
          MovieID: movieId,
        }
      })
      setIsInWatchlist(false);
    }

    else {
      //add to database
      await prisma.movieWatchlist.create({
        data: {
          userId,
          MovieID: movieId, 
        }
      })
      setIsInWatchlist(true);
    }
    // const response = await fetch("/api/set-watchlist.js", {
    //   method: "POST",
    //   body: JSON.stringify({userId, movieID}),
    //   headers: {
    //     "Content-Type": "application/json",
    //   }
    // });
  } 

  return (
    <div className="relative rounded-md shadow-sm w-full min-h-96 m-auto my-2">
      <div className="text-white absolute overflow-hidden -top-3 bg-teal-900 rounded-xl -right-2 w-20 flex justify-between">
        <button className="hover:bg-teal-800 w-2/4 px-3 py-2"
                // onClick={}
        >❤️</button>
        <button className="hover:bg-teal-800 w-2/4 px-3 py-2"
                onClick={watchlistClickHandler}
        >+</button>
      </div>
      <img
        alt={title}
        src={image}
        className="w-full h-10/12"
      />
      <div className="w-full p-4 bg-teal-900 h-2/12">
        <p className="text-white py-2">{title.length > 18 ? title.slice(0, 18) + "..." : title}</p>
      </div>
    </div>
  )
}