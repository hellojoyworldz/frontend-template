import { getTranslations, getLocale } from "next-intl/server";
import Providers from "./providers";
import clsx from "clsx";
import { pretendard, noto, notoSc, poppins } from "@/lib/fonts";
import "@/styles/globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

// metadata
export async function generateMetadata() {
  const t = await getTranslations("meta");

  return {
    title: t("title"),
    description: t("description"),
    icons: {
      icon: `/favicon.ico`,
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      siteName: t("title"),
      images: [
        {
          url: `/opengraph-image.png`,
          width: 1200,
          height: 630,
        },
      ],
    },
    verification: {
      google: "",
      other: {},
    },
    metadataBase: SITE_URL,
    alternates: {
      canonical: SITE_URL,
    },
  };
}

// viewport
export function generateViewport() {
  return {
    width: "device-width",
    initialScale: 1.0,
    maximumScale: 1.0,
    userScalable: "no",
    viewportFit: "auto",
  };
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body className={clsx(pretendard.variable, noto.variable, notoSc.variable, poppins.variable, "antialiased")}>
        <Providers locale={locale}>{children}</Providers>
      </body>
    </html>
  );
}
