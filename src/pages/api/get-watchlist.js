import prisma from "../../../lib/prisma";

export default async function handler(req, res)
{
  const { email, movieId } = await req.body;

  //get user info
  const user = await prisma.user.findUnique({
    where : {
      email: email
    }
  })

  const userId = user.id;

  const movie = await prisma.movieWatchlist.findFirst({
    where: {
      userId, 
      movieId 
    }
  })

  const isMovieInWatchList = !!movie;

  res.status(200).json({ isMovieInWatchList });
}