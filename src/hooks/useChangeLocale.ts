"use client";

import { useSearchParams } from "next/navigation";
import { useChangeLocaleMutation, type LocaleStatus } from "@/graphql/graphql";
import { useRouter, usePathname } from "@/lib/i18n/navigation";
import { useAuth } from "@/hooks";

export default function useChangeLocale() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queryParams = searchParams.toString();
  const { updateAuth } = useAuth();
  const [changeLocaleMutation] = useChangeLocaleMutation();

  // 로그인 후 changeLocaleMutation
  const changeLocale = (locale: LocaleStatus) => {
    changeLocaleMutation({
      variables: { input: { locale } },
      onCompleted: async ({ changeLocale: { status, data } }) => {
        if (status === "success") {
          const locale = data?.locale;
          await updateAuth({ locale });
          replaceLocale(locale);
        }
      },
    });
  };

  // path replace
  const replaceLocale = (locale: string) => {
    const path = queryParams ? `${pathname}?${queryParams}` : pathname;
    router.replace(path, { locale });
  };

  return { replaceLocale, changeLocale };
}
