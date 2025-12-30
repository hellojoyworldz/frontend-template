import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { getServerSession } from "next-auth";
import clsx from "clsx";
import Providers from "./providers";
import { authOptions } from "@/lib/auth";
import { ASSETS } from "@/constants/paths";
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
      icon: ASSETS.FAVICON,
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      siteName: t("title"),
      images: [
        {
          url: ASSETS.OPENGRAPH,
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
  const [locale, session, messages] = await Promise.all([
    getLocale(),
    getServerSession(authOptions),
    getMessages(),
  ]);

  return (
    <html lang={locale}>
      <body className={clsx(pretendard.variable, noto.variable, notoSc.variable, poppins.variable, "antialiased")}>
        <Providers locale={locale} session={session} messages={messages}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
