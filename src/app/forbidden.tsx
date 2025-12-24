import { getTranslations, getLocale } from "next-intl/server";
import Link from "next/link";

export default async function Forbidden() {
  const locale = await getLocale();
  const t = await getTranslations({ locale });

  return (
    <div>
      <h2>Forbidden</h2>
      <p>You are not authorized to access this resource.</p>
      <Link href="/">Return Home {t("common.confirm")}</Link>
    </div>
  );
}
