import { SessionUser } from "@typedefs/app.types";
import { NextAuthOptions, getServerSession } from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_APP_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_APP_CLIENT_SECRET as string,
    }),
  ],
};

export const getLoggedUser = async (): Promise<SessionUser | null> => {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) return null;

  return session.user;
};