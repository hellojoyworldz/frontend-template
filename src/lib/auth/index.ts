import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import { credentialProvider } from "./credentialProvider";
import { oauthProviders } from "./oauthProviders";

export const authOptions: NextAuthOptions = {
  providers: [credentialProvider, ...Object.values(oauthProviders)],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account, user }) {
      if (account?.access_token) {
        token.accessToken = account.access_token;
      }

      if (account?.refresh_token) {
        token.refreshToken = account.refresh_token;
      }

      if (account?.token_type) {
        token.tokenType = account.token_type;
      }

      if (account?.expires_at) {
        token.expiresIn = account.expires_at;
      }

      if (user?.accessToken) {
        token.accessToken = user.accessToken;
      }

      if (user?.refreshToken) {
        token.refreshToken = user.refreshToken;
      }

      if (user?.tokenType) {
        token.tokenType = user.tokenType;
      }

      if (user?.expiresIn) {
        token.expiresIn = user.expiresIn;
      }

      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string | undefined;
      session.refreshToken = token.refreshToken as string | undefined;
      session.tokenType = token.tokenType as string | undefined;
      session.expiresIn = token.expiresIn as number | undefined;

      return session;
    },
  },
};

export default NextAuth(authOptions);
