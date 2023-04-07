import NextAuth from 'next-auth';

import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from "@prisma/client"

import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from "next-auth/providers/google"
// import prisma from '../../../../lib/prisma';

const prisma = new PrismaClient()

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        // GitHubProvider({
        //         clientId: process.env.GITHUB_ID,
        //         clientSecret: process.env.GITHUB_SECRET,
        // }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);