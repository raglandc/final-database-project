import prisma from "../../../lib/prisma";

export default async function handler(req, res)
{
  try {
    const { title, year, rating, genre } = req.body;
    const where = {};

    console.log(typeof(genre));

    if (title != "")
    {
      where.M_title = { contains: title };
    }

    if (year != "")
    {
      where.Released_Year = parseInt(year);
    }

    if (rating != 1.0)
    {
      where.IMDB_Rating = { lte : rating };
    }

    if (genre != "")
    {
      where.Genre = { in : [ genre ] };
    }

    const movies = await prisma.movies.findMany({
      where,
      orderBy: {
        M_title: "asc"
      },

    })

    const movieCount = await prisma.movies.count({
      where,
    })

    return res.status(200).json({ movies, movieCount });
  }
  catch (error)
  {
    console.error(error);

    return res.status(500).json({error: "failed to get movies"});
  }
}