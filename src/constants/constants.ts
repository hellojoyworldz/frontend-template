export const RULES = {
  DEFAULT_LOCALE: "en",
  ID: {
    MIN: 4,
    MAX: 20,
  },
  PASSWORD: {
    MIN: 8,
    MAX: 64,
  },
} as const;

export const ERROR_CODE = {
  SIGNIN: {
    CREDENTIALS: "CredentialsSignin",
    OAUTH: "OAuthSignin",
    EMAIL: "EmailSignin",
  },
} as const;
