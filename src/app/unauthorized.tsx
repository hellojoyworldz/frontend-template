import { getTranslations, getLocale } from "next-intl/server";

export default async function UnauthorizedPage() {
  const locale = await getLocale();
  const t = await getTranslations({ locale });

  return (
    <main>
      <h1>401 - Unauthorized</h1>
      <p>Please log in to access this page. {t("common.confirm")}</p>
    </main>
  );
}
