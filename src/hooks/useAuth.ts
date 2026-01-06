import { useSession } from "next-auth/react";

export default function useAuth() {
  const { data: session, status, update } = useSession();

  return {
    isLoggingIn: status === "loading",
    isLoggedIn: status === "authenticated",
    isGuest: status === "unauthenticated",
    user: session?.user,
    accessToken: session?.access_token,
    updateAuth: update,
  };
}
