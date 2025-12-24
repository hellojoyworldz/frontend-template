"use client"; // Error boundaries must be Client Components
import { useTranslations } from "next-intl";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const t = useTranslations();

  return (
    // global-error must include html and body tags
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <p>{error.message}</p>
        <button onClick={() => reset()}>Try again {t("common.confirm")}</button>
      </body>
    </html>
  );
}
