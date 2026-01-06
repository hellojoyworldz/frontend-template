import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import { REFRESH_BUFFER_MS, AUTH_MAX_AGE } from "@/constants";
import { credentialProvider } from "./credentialProvider";
import { oauthProviders } from "./oauthProviders";
import { fetchRefreshToken, toEpochMs } from "./service";

export const authOptions: NextAuthOptions = {
  providers: [credentialProvider, ...Object.values(oauthProviders)],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user, account, trigger, session }) {
      // update session
      if (trigger === "update" && session) {
        return { ...token, ...session };
      }

      // Credentials sign in
      if (user) {
        const { user: me, access_token, refresh_token, token_type, expires_in, expires_at } = user;
        if (me) token.user = me;
        if (access_token) token.access_token = access_token;
        if (refresh_token) token.refresh_token = refresh_token;
        if (token_type) token.token_type = token_type;
        if (expires_in) {
          token.expires_in = expires_in as number;
          token.expires_at = toEpochMs(expires_in);
        } else if (expires_at) {
          token.expires_at = toEpochMs(expires_at);
        }
      }

      // OAuth sign in
      if (account) {
        const { access_token, refresh_token, token_type, expires_at } = account;
        if (access_token) token.access_token = access_token;
        if (refresh_token) token.refresh_token = refresh_token;
        if (token_type) token.token_type = token_type;
        if (expires_at) {
          token.expires_in = expires_at;
          token.expires_at = toEpochMs(expires_at);
        }
      }

      if (!token.refreshToken) {
        return token;
      }

      if (token.expires_at && Date.now() < token.expires_at - REFRESH_BUFFER_MS) {
        return token;
      }

      // refresh access token
      try {
        const refreshed = await fetchRefreshToken(token.refresh_token);
        token.access_token = refreshed.access_token;
        token.refresh_token = refreshed.refresh_token;
        token.token_type = refreshed.token_type;
        token.expires_at = refreshed.expires_at;
        return token;
      } catch {
        token.error = "RefreshAccessTokenError";
        return token;
      }
    },
    async session({ session, token }) {
      session.access_token = token.access_token;
      session.refresh_token = token.refresh_token;
      session.token_type = token.token_type;
      session.expires_in = token.expires_in;
      session.expires_at = token.expires_at;
      session.user = token.user;

      return session;
    },
  },
};

export default NextAuth(authOptions);
