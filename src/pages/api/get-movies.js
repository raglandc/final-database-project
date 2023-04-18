import prisma from "../../../lib/prisma";

export default async function handler(req, res)
{
  const { title, year, rating, genre, page, PER_PAGE } = req.body;

  const where = {};

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
    where.Genre = genre;
  }

  const movies = await prisma.movies.findMany({
    where,
    take: PER_PAGE,
    skip: parseInt((page - 1) * PER_PAGE),
    orderBy: {
      M_title: "asc"
    },

  })

  res.status(200).json({ movies });
}