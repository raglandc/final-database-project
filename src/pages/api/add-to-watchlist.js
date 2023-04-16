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

  if (movieId)
  {
    await prisma.movieWatchlist.create({
      data: {
        userId,
        movieId,
      }
    })
  }
  else {
    //respond with error
  }

  res.status();
}