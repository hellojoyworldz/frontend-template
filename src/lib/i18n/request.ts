import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  // timeZone
  const cookieStore = await cookies();
  const tz = cookieStore.get("timeZone")?.value ?? "UTC";

  return {
    locale,
    timeZone: tz,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
