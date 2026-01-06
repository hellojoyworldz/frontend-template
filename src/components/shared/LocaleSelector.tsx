"use client";

import { useLocale } from "next-intl";
import { LOCALE_MAP, LOCALE_OPTIONS } from "@/lib/i18n";
import { useAuth, useChangeLocale } from "@/hooks";

export default function LocaleSelector() {
  const locale = useLocale();
  const { isLoggedIn } = useAuth();
  const { replaceLocale, changeLocale } = useChangeLocale();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    if (locale === newLocale) return;
    if (isLoggedIn) {
      changeLocale(LOCALE_MAP[newLocale].status);
    } else {
      replaceLocale(newLocale);
    }
  };

  return (
    <select onChange={handleChange} value={locale}>
      {LOCALE_OPTIONS.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
