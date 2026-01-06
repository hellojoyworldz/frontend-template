// 페이지 경로
export const ROUTES = {
  HOME: "/",
  MAIN: "/main",
  AUTH: {
    SIGNIN: "/signin",
    SIGNUP: "/signup",
  },
  MY: {
    MYPAGE: "/my",
    SETTINGS: "/my/settings",
  },
} as const;

// 인증 불필요 페이지 목록
export const PUBLIC_ROUTES = [ROUTES.HOME, ROUTES.MAIN, ROUTES.AUTH.SIGNIN, ROUTES.AUTH.SIGNUP];
