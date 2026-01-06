"use client";

import { useEffect, useRef } from "react";
import { useLocale } from "next-intl";
import { LOCALE_MAP } from "@/lib/i18n";
import { useAuth, useChangeLocale } from "@/hooks";

export default function LocaleSync() {
  const isSyncedRef = useRef(false);
  const { isLoggedIn, user } = useAuth();
  const userLocale = user?.locale;
  const pageLocale = useLocale();

  const { changeLocale } = useChangeLocale();

  useEffect(() => {
    if (isSyncedRef.current || !isLoggedIn) return;

    // 페이지 locale 서버에 반영
    if (!userLocale || pageLocale !== userLocale) {
      isSyncedRef.current = true;
      changeLocale(LOCALE_MAP[pageLocale].status);
    }

    // 서버 locale 페이지에 반영
    // if (pageLocale !== userLocale) {
    //   isSyncedRef.current = true;
    //   replaceLocale(userLocale);
    // }
  }, [isLoggedIn, pageLocale, userLocale]);

  return null;
}
