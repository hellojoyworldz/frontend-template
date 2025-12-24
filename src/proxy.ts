import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "@/lib/i18n/routing";

const intlMiddleware = createMiddleware(routing);

// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
  return intlMiddleware(request);
}

// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }

// See "Matching Paths" below to learn more
// matcher 설정: `/api`, `/trpc`, `/_next`, `/_vercel`, 파일 경로를 제외한 모든 경로에 미들웨어 적용
export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
