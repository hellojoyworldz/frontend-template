"use client";

import { LocaleSelector } from "@/components/shared";
import { Link } from "@/lib/i18n/navigation";
import { ROUTES } from "@/constants/routes";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-amber-200 p-4">
      <h1>
        <Link href={ROUTES.HOME}>LOGO</Link>
      </h1>
      <LocaleSelector />
      <nav>
        <ul className="flex gap-4 bg-amber-300 p-2">
          <li>
            <Link href={ROUTES.AUTH.SIGNIN}>Sign In</Link>
          </li>
          <li>
            <Link href={ROUTES.AUTH.SIGNUP}>Sign Up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
