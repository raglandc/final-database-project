import { useEffect, useState } from "react";

export default function MovieCard({ movieId, title, image, session })
{
  const [ isInWatchlist, setIsInWatchlist ] = useState(false);
  const email = session.user.email;

  
  useEffect(() => 
  {
    const fetchWatchlist = async () => 
    {
      if (session)
      {
        const response = await fetch("/api/get-watchlist", {
          method: "POST",
          body: JSON.stringify({email, movieId}),
          headers: {
            "Content-Type": "application/json",
          }
        });
        const result = await response.json();
        setIsInWatchlist(result.isMovieInWatchList != false);
      }
    }
    fetchWatchlist();
  }, [session]);

  const watchlistClickHandler = async () => 
  {
    if (isInWatchlist)
    {
      //remove from watch list
      const response = await fetch("/api/remove-from-watchlist", {
        method: "POST",
        body: JSON.stringify({email, movieId}),
        headers: {
          "Content-Type": "application/json",
        }
      })
      setIsInWatchlist(false);
    }

    else {
      //add to database
      const response = await fetch("/api/add-to-watchlist", {
        method: "POST",
        body: JSON.stringify({email, movieId}),
        headers: {
          "Content-Type": "application/json",
        }
      })
      setIsInWatchlist(true);
    }
  } 

  return (
    <div className="relative rounded-md shadow-sm w-full min-h-96 m-auto my-2">
      <div className="text-white absolute overflow-hidden -top-3 bg-teal-900 rounded-xl -right-2 w-20 flex justify-between">
        <button className="hover:bg-teal-800 w-2/4 px-3 py-2"
                // onClick={}
        >
          ❤️
        </button>
        <button className="hover:bg-teal-800 w-2/4 px-3 py-2"
                onClick={watchlistClickHandler}
        >
          {isInWatchlist ? '-' : '+'}
        </button>
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