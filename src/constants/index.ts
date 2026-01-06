// paths, regex, routes,  site 등
// 특정 라이브러리나 기능에 종속적이지 않은 상수들만 이곳에 추가할 것
export { ASSETS, API } from "./paths";
export { REGEX, REPLACE } from "./regex";
export { ROUTES, PUBLIC_ROUTES } from "./routes";
export { SITE } from "./site";

export const GRAPHQL_URL = process.env.NEXT_PUBLIC_GRAPHQL_URL;
export const REFRESH_BUFFER_MS = 60 * 1000;
export const AUTH_MAX_AGE = 30 * 24 * 60 * 60;
export const AUTH_SESSION_ONLY = 60 * 60;

export const RULES = {
  ID: { MIN: 8, MAX: 20 },
  PASSWORD: { MIN: 8, MAX: 64 },
} as const;

export const CODES = {
  ERROR: {
    // SIGNIN: next-auth 에러 코드
    SIGNIN: {
      CREDENTIALS: "CredentialsSignin",
      OAUTH: "OAuthSignin",
      EMAIL: "EmailSignin",
    },
  },
} as const;
