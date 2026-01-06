import { cookies } from "next/headers";
import CredentialsProvider from "next-auth/providers/credentials";
import { DEFAULT_LOCALE } from "@/lib/i18n";
import { fetchLogin } from "./service";

export const credentialProvider = CredentialsProvider({
  name: "Credentials",
  credentials: {
    username: { label: "username", type: "text" },
    password: { label: "password", type: "password" },
  },
  async authorize(credentials) {
    const cookieStore = await cookies();
    const locale = cookieStore.get("NEXT_LOCALE")?.value ?? DEFAULT_LOCALE;
    const data = await fetchLogin(locale, credentials?.username, credentials?.password);

    return {
      ...data,
      id: data.user?.id ?? credentials?.username ?? "credentials",
      user: data.user,
      info: {
        access_token: data.access_token,
        refresh_token: data.refresh_token,
        token_type: data.token_type,
        expires_in: data.expires_in,
        expires_at: data.expires_at,
      },
    };
  },
});
