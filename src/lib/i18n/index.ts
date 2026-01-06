export const DEFAULT_LOCALE = "en";
export const SUPPORT_LOCALES = ["en", "ko"] as const;
export type SupportedLocale = (typeof SUPPORT_LOCALES)[number];

// graphql LocaleStatus 매핑
enum LocaleStatus {
  Korean = "KOREAN",
  English = "ENGLISH",
}

export const LOCALE_MAP: Record<string, { label: string; status: LocaleStatus }> = {
  ko: {
    label: "한국어",
    status: LocaleStatus.Korean,
  },
  en: {
    label: "English",
    status: LocaleStatus.English,
  },
} as const;

export const LOCALE_OPTIONS = SUPPORT_LOCALES.map((locale) => ({
  label: LOCALE_MAP[locale].label,
  status: LOCALE_MAP[locale].status,
  value: locale,
}));
