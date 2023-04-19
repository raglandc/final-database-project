import prisma from "../../../lib/prisma";

export default async function handler(req, res)
{
  try 
  {
    const { email, movieId } = await req.body;

    //get user info
    const user = await prisma.user.findUnique({
      where : {
        email: email
      }
    })

    const userId = user.id;

    const movie = await prisma.userLikes.findFirst({
      where: {
        userId, 
        movieId 
      }
    })

    const isFavorite = !!movie;

    res.status(200).json({ isFavorite });
  }
  catch (error)
  {
    console.error(error);
    res.status(500).json({error: "Failed to get liked movie"})
  }
}