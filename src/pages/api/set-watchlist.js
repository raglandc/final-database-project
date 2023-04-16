import prisma from "../../../lib/prisma";

export default async function handler(req, res)
{
  const { userID, movieID } = req.body;

  const movies = await prisma.moviewatchlist.findMany({
    where: {
      userId : userID, 
      movieId: movieID
    },
  })

  res.json( { movies } )
}