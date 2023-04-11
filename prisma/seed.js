const { PrismaClient } = require('@prisma/client');
const fs = require('fs');

// Instantiate PrismaClient
const prisma = new PrismaClient();

async function importData() {
    try {
        // Connect to Prisma database
        await prisma.$connect();

        // Import data for title_basics
        await importTitleBasics();

        // Import data for title_ratings
        await importTitleRatings();

        // Add more import functions for other tables as needed

        console.log('Data imported successfully!');
    } catch (error) {
        console.error(`Failed to import data: ${error}`);
    } finally {
        // Disconnect from Prisma database
        await prisma.$disconnect();
    }
}

async function importTitleBasics() {
    // Read data from title_basics.tsv file
    const data = fs.readFileSync('./data.tsv', 'utf-8');
    const rows = data.trim().split('\n');
    const headers = rows.shift().split('\t');

    // Insert data into title_basics model
    for (const row of rows) {
        const values = row.split('\t');
        const item = headers.reduce((acc, header, index) => {
            acc[header] = values[index];
            return acc;
        }, {});

        await prisma.title_basics.create({
            data: {
                tconst: item.tconst,
                titleType: item.titleType,
                primaryTitle: item.primaryTitle,
                originalTitle: item.originalTitle,
                isAdult: item.isAdult,
                startYear: item.startYear,
                endYear: item.endYear,
                runtimeMinutes: item.runtimeMinutes,
                genres: item.genres,
            },
        });
    }
}

// async function importTitleRatings() {
//     // Read data from title_ratings.tsv file
//     const data = fs.readFileSync('./title_ratings.tsv', 'utf-8');
//     const rows = data.trim().split('\n');
//     const headers = rows.shift().split('\t');
//
//     // Insert data into title_ratings model
//     for (const row of rows) {
//         const values = row.split('\t');
//         const item = headers.reduce((acc, header, index) => {
//             acc[header] = values[index];
//             return acc;
//         }, {});
//
//         await prisma.title_ratings.create({
//             data: {
//                 tconst: item.tconst,
//                 averageRating: parseFloat(item.averageRating),
//                 numVotes: parseInt(item.numVotes),
//             },
//         });
//     }
// }

importData();
