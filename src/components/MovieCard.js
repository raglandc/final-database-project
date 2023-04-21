import Link from "next/link";
import { useEffect, useState } from "react";

export default function MovieCard({ movieId, title, image, session })
{
  const [ isInWatchlist, setIsInWatchlist ] = useState(false);
  const [ isFavorite, setIsFavorite ] = useState(false);
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

    const fetchFavorites = async () => 
    {
      if (session)
      {
        const response = await fetch("/api/get-favorites", {
          method: "POST",
          body: JSON.stringify({email, movieId}),
          headers: {
            "Content-Type": "application/json",
          }
        });
        const result = await response.json();
        setIsFavorite(result.isFavorite != false);
      } 
    }

    fetchFavorites();
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

  const likeClickHandler = async () => 
  {
    if (isFavorite)
    {
      //remove from watch list
      const response = await fetch("/api/remove-from-likes", {
        method: "POST",
        body: JSON.stringify({email, movieId}),
        headers: {
          "Content-Type": "application/json",
        }
      })
      setIsFavorite(false);
    }

    else {
      //add to database
      const response = await fetch("/api/add-to-likes", {
        method: "POST",
        body: JSON.stringify({email, movieId}),
        headers: {
          "Content-Type": "application/json",
        }
      })
      setIsFavorite(true);
    }
  } 

  return (
    <div className="relative rounded-md shadow-sm w-full min-h-96 m-auto my-1">
      <div
        className="text-white absolute overflow-hidden -top-3 bg-teal-900 rounded-xl -right-2 w-20 flex z-10 justify-between">
        <button 
            title="add/remove from favorites"
            style={isFavorite ? {backgroundColor: '#f87171'} : {}}
            className="hover:bg-teal-800 w-2/4 px-3 py-2"
            onClick={likeClickHandler}
        >
          ❤️
        </button>
        <button 
          title="add/remove from watchlist"
          className="hover:bg-teal-800 w-2/4 px-3 py-2"
          onClick={watchlistClickHandler}
        >
          {isInWatchlist ? "-" : "+"}
        </button>
      </div>
      <img
        alt={title}
        src={image}
        className="w-full h-full"
      />
      <div className=" text-white w-full flex-col p-4 absolute top-0 left-0 right-0 bottom-0 flex justify-around items-center bg-black/50 h-full">
        <p className="text-xl font-bold">{title.length > 18 ? title.slice(0, 18) + "..." : title}</p>
        <Link href={`/movies/${movieId}`} className="hover:underline">Learn More</Link>
      </div>
    </div>
  )
}