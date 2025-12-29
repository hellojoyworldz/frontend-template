import { LOGIN } from "@/graphql/auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const credentialProvider = CredentialsProvider({
  name: "Credentials",
  credentials: {
    username: { label: "username", type: "text" },
    password: { label: "password", type: "password" },
  },
  async authorize(credentials) {
    const response = await fetch(process.env.GRAPHQL_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: LOGIN,
        variables: {
          input: {
            email: credentials?.username,
            password: credentials?.password,
          },
        },
      }),
    });

    const json = await response.json();
    const login = json?.data?.login;

    if (!response.ok || !login?.access_token) return null;

    return {
      id: credentials?.username ?? "credentials",
      email: credentials?.username,
      accessToken: login.access_token,
      refreshToken: login.refresh_token,
      tokenType: login.token_type,
      expiresIn: login.expires_in,
    };
  },
});
