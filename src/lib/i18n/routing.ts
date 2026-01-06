import { defineRouting } from "next-intl/routing";
import { SUPPORT_LOCALES, DEFAULT_LOCALE } from "./";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: SUPPORT_LOCALES,

  // Used when no locale matches
  defaultLocale: DEFAULT_LOCALE,
  localeDetection: false, // 브라우저 언어 감지 비활성화
});
