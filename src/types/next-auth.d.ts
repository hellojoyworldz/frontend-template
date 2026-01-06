import type { DefaultSession, DefaultUser } from "next-auth";
import type { AdapterUser } from "next-auth/adapters";
import type { LoginMutation, MeQuery } from "@/graphql/graphql";

export type AuthUser = MeQuery["me"] | LoginMutation["login"]["user"];

declare module "next-auth" {
  interface Session {
    access_token?: string;
    refresh_token?: string;
    token_type?: string;
    expires_in?: number;
    expires_at?: number;
    user?: AuthUser;
    error?: string;
  }

  interface User {
    access_token?: string;
    refresh_token?: string;
    token_type?: string;
    expires_in?: number | string;
    expires_at?: number | string;
    user?: AuthUser;
  }
}

declare module "next-auth/adapters" {
  interface AdapterUser {
    access_token?: string;
    refresh_token?: string;
    token_type?: string;
    expires_in?: number | string;
    expires_at?: number | string;
    user?: AuthUser;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    access_token?: string;
    refresh_token?: string;
    token_type?: string;
    expires_in?: number;
    expires_at?: number;
    user?: AuthUser;
    error?: "RefreshAccessTokenError";
  }
}
