"use client";

import { useEffect } from "react";
import Link from "next/link";
import { cx } from "class-variance-authority";
import { useSearchParams } from "next/navigation";
import { usePathname, useRouter } from "@/lib/i18n/navigation";
import { type SupportedLocale } from "@/lib/i18n";
import { History } from "@/services/eventService";

const SMW_URL = "https://smw.seoulmetaweek.com/";

interface Props {
  data: History;
  locale: SupportedLocale;
}

export default function Contents({ data, locale }: Props) {
  const { targetYear, targetDay, targetDays, info, overview, schedules } = data;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const currentDay = Number(searchParams.get("day")) || 1;

    const isYearMismatch = !pathname.includes(`/${targetYear}`);
    const isDayMismatch = targetDay !== currentDay;

    if (isYearMismatch || isDayMismatch) {
      router.replace(`/sheet/${targetYear}?day=${targetDay}`);
    }
  }, [targetYear, targetDay, pathname, searchParams, router]);

  return (
    <div className="flex flex-col gap-4 p-6">
      <h1 className="text-2xl font-bold">
        {targetYear} - DAY{targetDay}
      </h1>

      {info && (
        <>
          <h2>{info?.subject}</h2>
          <p className="text-gray-600">{info?.description}</p>
          <p>{info?.itinerary}</p>
        </>
      )}

      {overview && (
        <div className="mt-4 rounded-lg border p-4 shadow-sm">
          <h2 className="text-xl font-semibold">Overview</h2>
          <p className="mt-2">
            <strong>Title:</strong> {overview.title}
          </p>
          <p>
            <strong>Date:</strong> {overview.date}
          </p>
          <p>
            <strong>Venue:</strong> {overview.venue}
          </p>
          <p>
            <strong>Host:</strong> {overview.host}
          </p>
          <p>
            <strong>Program:</strong> {overview.program}
          </p>
        </div>
      )}

      {targetDays && (
        <div className="mt-4 flex flex-wrap gap-2">
          {targetDays
            .sort((a, b) => a - b)
            .map((day) => (
              <Link
                key={day}
                href={`/${locale}/sheet/${targetYear}?day=${day}`}
                className={cx(
                  "rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 active:scale-95",
                  targetDay === day ? "font-bold shadow-lg" : "font-medium",
                )}
              >
                Day {day}
              </Link>
            ))}
        </div>
      )}

      {info?.pdf && (
        <a
          href={`${SMW_URL}${info.pdf}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          View PDF Overview
        </a>
      )}

      {info?.day && (
        <p className="mt-2 text-gray-500 italic">
          Day{targetDay} - {info.day}
        </p>
      )}

      {schedules && (
        <>
          {schedules.map((item) => (
            <div key={item.id} className="mt-6 rounded-lg border p-4 shadow-sm">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-500">
                {item.time} | {item.tag}
              </p>

              {item.moderator.length > 0 && (
                <div className="mt-2">
                  <h3 className="font-semibold">Moderators:</h3>
                  <ul className="list-inside list-disc">
                    {item.moderator.map((mod, index) => (
                      <li key={index}>
                        {mod.name} - {mod.position} ({mod.rank})
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {item.speaker.length > 0 && (
                <div className="mt-2">
                  <h3 className="font-semibold">Speakers:</h3>
                  <ul className="list-inside list-disc">
                    {item.speaker.map((spk, index) => (
                      <li key={index}>
                        {spk.name} - {spk.position} ({spk.rank})
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {item.panelist.length > 0 && (
                <div className="mt-2">
                  <h3 className="font-semibold">Panelists:</h3>
                  <ul className="list-inside list-disc">
                    {item.panelist.map((pan, index) => (
                      <li key={index}>
                        {pan.name} - {pan.position} ({pan.rank})
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
}
