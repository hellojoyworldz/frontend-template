import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import { credentialProvider } from "./credentialProvider";
import { oauthProviders, googleProvider } from "./oauthProviders";

export const authOptions: NextAuthOptions = {
  providers: [credentialProvider, googleProvider, ...Object.values(oauthProviders)],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.accessToken;
      }

      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string;

      return session;
    },
  },
};

export default NextAuth(authOptions);
