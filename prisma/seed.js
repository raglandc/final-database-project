const { PrismaClient } = require('@prisma/client');
const fs = require('fs');

const prisma = new PrismaClient();

// Read the .csv file
const fileContents = fs.readFileSync('movies.csv', 'utf-8');

// Parse the contents of the .csv file
const lines = fileContents.split('\n');

// Loop through the parsed data and insert into the Movies model
for (const line of lines) {
    const [posterLink, title, year, certificate, runtime, genre, imdbRating, overview, metaScore, director, star1, star2, star3, star4, voteCount, gross] = line.split(',');

    const movieData = {
        Poster_Link: posterLink,
        M_title: title,
        Released_Year: parseInt(year),
        Certificate: certificate,
        Runtime: parseInt(runtime),
        Genre: genre.split(','), // Split genre by comma to create an array
        IMDB_Rating: parseFloat(imdbRating),
        M_overview: overview,
        Meta_score: metaScore ? parseInt(metaScore) : null,
        Director: director,
        Star1: star1,
        Star2: star2,
        Star3: star3,
        Star4: star4,
        m_voteCount: parseInt(voteCount),
        Gross: gross ? parseInt(gross) : null,
    };

    prisma.movies.create({ data: movieData })
        .catch(error => console.error(error));
}

console.log('Data seeding complete!');
