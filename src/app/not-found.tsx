import { getTranslations, getLocale } from "next-intl/server";
import Link from "next/link";

export default async function NotFound() {
  const locale = await getLocale();
  const t = await getTranslations({ locale });

  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource </p>
      <Link href="/">Return {t("common.confirm")}</Link>
    </div>
  );
}
