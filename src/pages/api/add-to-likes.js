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

    if (movieId)
    {
      await prisma.userLikes.create({
        data: {
          userId,
          movieId,
        }
      })
    }

    res.status(200).json({message: "Successfully added to favorites"});
  }
  catch (error)
  {
    console.error(error);
    res.status(500).json({ error: "Failed to add to favorites"})
  }
}


