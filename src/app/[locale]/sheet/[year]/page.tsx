import { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { type SupportedLocale } from "@/lib/i18n";
import { getEventList } from "@/services/eventService";
import Contents from ".";

interface Props {
  params: Promise<{ year: string }>;
  searchParams: Promise<{ day?: string }>;
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { year } = await params;
  const { day } = await searchParams;
  const locale = (await getLocale()) as SupportedLocale;

  const data = await getEventList({
    year: Number(year),
    locale,
    day: Number(day),
  });

  if (!data) return {};

  const canonicalUrl = `http://localhost:3000/${locale}/sheet/${data.targetYear}?day=${data.targetDay}`;

  return {
    title: data?.info?.subject,
    description: data?.info?.subject,
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function SheetPage({ params, searchParams }: Props) {
  const { year } = await params;
  const { day } = await searchParams;
  const locale = (await getLocale()) as SupportedLocale;

  const data = await getEventList({
    year: Number(year),
    locale,
    day: Number(day),
  });

  if (!data) return <div>Data not found</div>;

  return <Contents data={data} locale={locale} />;
}
