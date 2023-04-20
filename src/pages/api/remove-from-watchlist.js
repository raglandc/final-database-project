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

    //delete the associated element from the table
    await prisma.movieWatchlist.delete({
      where: {
        userId_movieId: { userId, movieId }
      }
    })

    res.status(200).json({message: "Successfully removed from watchlist"});
  }
  catch (error)
  {
    console.error(error);
    res.status(500).json({error: "Failed to remove from watchlist"})
  }
}