import { getTranslations } from "next-intl/server";
import SigninComponent from ".";

export async function generateMetadata() {
  const t = await getTranslations("meta");
  return {
    title: t("auth.signin.title") + " | " + t("title"),
    description: t("auth.signin.description"),
  };
}

export default function SigninPage() {
  return <SigninComponent />;
}
