import { SessionUser } from "@typedefs/app.types";
import { NextAuthOptions, getServerSession } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import GithubProvider from "next-auth/providers/github";
import { prisma } from "./database.lib";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  pages: { signIn: "/sign-in" },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_APP_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_APP_CLIENT_SECRET as string,
    }),
  ],
};

export const getLoggedUser = async (): Promise<SessionUser | null> => {
  const session = await getServerSession(authOptions);
  if (
    !session ||
    !session.user ||
    !session.user.name ||
    !session.user.image ||
    !session.user.email
  )
    return null;

  return {
    name: session.user.name,
    email: session.user.email,
    image: session.user.image,
  };
};
