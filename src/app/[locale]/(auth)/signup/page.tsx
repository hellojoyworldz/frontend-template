import { getTranslations } from "next-intl/server";
import SignupComponent from ".";

export async function generateMetadata() {
  const t = await getTranslations("meta.auth.signup");
  return {
    title: t("title") + " | " + t("title"),
    description: t("description"),
  };
}

export default function SignupPage() {
  return <SignupComponent />;
}
