"use server";

import { unstable_cache } from "next/cache";
import { getGoogleSheet } from "@/lib/google/connect";
import { DEFAULT_LOCALE, type SupportedLocale } from "@/lib/i18n";
import { cache } from "react";

const START_YEAR = 2021;
const LATEST_YEAR = new Date().getFullYear();

interface EventListParams {
  year: number;
  locale?: SupportedLocale;
  day?: number;
}

interface Person {
  name: string;
  position: string;
  rank: string;
  description: string;
  profile: string | null;
  logo: string | null;
}

interface ScheduleItem {
  id: string;
  time: string;
  tag: string;
  title: string;
  moderator: Person[];
  speaker: Person[];
  panelist: Person[];
}

interface Overview {
  title?: string;
  venue?: string;
  host?: string;
  program?: string;
  date?: string;
}

interface Info {
  subject: string;
  description?: string;
  itinerary?: string;
  day?: string;
  pdf?: string | null;
}

export interface History {
  targetYear: number;
  targetDay: number;
  targetDays: number[];
  info: Info | null;
  overview: Overview | null;
  schedules: ScheduleItem[] | null;
}

const isEmptyObj = (obj: Record<string, any>) => {
  if (Object.keys(obj).length === 0) return true;
  return Object.values(obj).every((val) => !val || String(val).trim() === "");
};

const getValue = (row: any, field: string, locale: SupportedLocale) => {
  const isKo = locale === "ko";
  const primary = isKo ? field : `${field}_en`;
  const fallback = isKo ? `${field}_en` : field;

  const getVal = (f: string) => (typeof row.get === "function" ? row.get(f) : row[f]);

  return getVal(primary) || getVal(fallback) || "";
};

const getTargetDays = (row: Record<string, any>) => {
  const obj = row.toObject();
  return Object.keys(obj)
    .filter((key) => /^day\d+$/.test(key) && obj[key]?.trim())
    .map((key) => Number(key.replace("day", "")))
    .sort((a, b) => a - b);
};

const getPerson = (ids: string | undefined, locale: SupportedLocale, speakerMap: Record<string, any>): Person[] => {
  if (!ids) return [];

  return ids
    .split(",")
    .map((id) => {
      const s = speakerMap[id.trim()];
      if (!s) return null;
      return {
        name: getValue(s, "name", locale),
        position: getValue(s, "position", locale),
        rank: getValue(s, "rank", locale),
        description: getValue(s, "description", locale),
        profile: s.profile ? `${s.profile}` : null,
        logo: s.logo ? `${s.logo}` : null,
      };
    })
    .filter((p): p is Person => p !== null);
};

// 구글 시트에서 데이터 가져오기
const fetchEventSheet = async ({
  year,
  locale = DEFAULT_LOCALE,
  day = 1,
}: EventListParams): Promise<History | null> => {
  const doc = await getGoogleSheet();
  if (!doc) return null;
  await doc.loadInfo();
  const [overviewRows, scheduleRows, speakerRows] = await Promise.all([
    doc.sheetsByTitle["overview"].getRows(),
    doc.sheetsByTitle["schedule"].getRows(),
    doc.sheetsByTitle["speaker"].getRows(),
  ]);

  const targetYear = isNaN(year) || year < START_YEAR ? LATEST_YEAR : year;

  const overviewRow = overviewRows.find((row) => Number(row.get("year")) === targetYear);
  if (!overviewRow) return null;

  // const targetDays = Array.from(new Set(scheduleRow.map((row) => Number(row.get("day"))))).sort((a, b) => a - b);
  const targetDays = getTargetDays(overviewRow);
  if (targetDays.length === 0) return null;

  const targetDay = !isNaN(day) && targetDays.includes(Number(day)) ? Number(day) : targetDays[0] || 1;
  console.log("targetDay:", targetDay);
  console.log(targetDays);

  const infoData: Info = {
    itinerary: overviewRow.get("schedule") || "",
    subject: getValue(overviewRow, "subject", locale),
    description: getValue(overviewRow, "description", locale),
    pdf: getValue(overviewRow, "pdf", locale),
    day: getValue(overviewRow, `day${targetDay}`, locale),
  };

  const overviewData: Overview = {
    title: getValue(overviewRow, "title", locale),
    venue: getValue(overviewRow, "venue", locale),
    host: getValue(overviewRow, "host", locale),
    program: getValue(overviewRow, "program", locale),
    date: getValue(overviewRow, "date", locale),
  };

  const info = isEmptyObj(infoData) ? null : infoData;
  const overview = isEmptyObj(overviewData) ? null : overviewData;
  if (!info && !overview) return null;

  const scheduleRow = scheduleRows.filter((row) => Number(row.get("year")) === targetYear);
  if (scheduleRow.length === 0) {
    return {
      targetYear,
      targetDay,
      targetDays,
      info,
      overview,
      schedules: null,
    };
  }

  const targetSchedule = scheduleRows.filter((row) => Number(row.get("day")) === targetDay);

  const speakerMap = speakerRows.reduce(
    (acc, row) => {
      acc[row.get("id")] = row.toObject();
      return acc;
    },
    {} as Record<string, any>,
  );

  const schedules: ScheduleItem[] = targetSchedule.map((row, index) => ({
    id: row.get("id") || index.toString(),
    time: row.get("time") || "",
    tag: getValue(row, "tag", locale),
    title: getValue(row, "title", locale),
    moderator: getPerson(row.get("moderator"), locale, speakerMap),
    speaker: getPerson(row.get("speaker"), locale, speakerMap),
    panelist: getPerson(row.get("panelist"), locale, speakerMap),
  }));

  return {
    targetYear,
    targetDay,
    targetDays,
    info,
    overview,
    schedules,
  };
};

// 구글 시트 데이터 캐싱
const getCachedEventSheet = unstable_cache(
  async ({ year, locale, day }: EventListParams) => {
    return fetchEventSheet({ year, locale, day });
  },
  ["event-list-cache"],
  {
    // revalidate: 3600,
    tags: ["events"],
  },
);

// 페이지 내 중복 호출 방지
export const getEventList = cache(async ({ year, locale, day }: EventListParams) => {
  return getCachedEventSheet({ year, locale, day });
});
