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

  await prisma.movieWatchlist.delete({
    where: {
      userId_movieId: { userId, movieId }
    }
  })

  res.status();
}