import { LOGIN } from "@/graphql/auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const credentialProvider = CredentialsProvider({
  name: "Credentials",
  credentials: {
    username: { label: "Username", type: "text", placeholder: "jsmith" },
    password: { label: "Password", type: "password" },
  },
  async authorize(credentials, req) {
    const response = await fetch(process.env.GRAPHQL_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: LOGIN,
        variables: {
          email: credentials?.username,
          password: credentials?.password,
        },
      }),
    });

    const json = await response.json();
    const user = json?.data?.login;

    if (!user) return null;

    if (response.ok && user) {
      return user;
    }

    return null;
  },
});
