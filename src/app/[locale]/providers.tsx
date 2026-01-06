"use client";

import { NextIntlClientProvider, type AbstractIntlMessages } from "next-intl";
import { ApolloProvider } from "@apollo/client/react";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";
import client from "@/lib/apollo/client";
import { AuthSessionSync, LocaleSync } from "@/providers";

interface Props {
  children: React.ReactNode;
  locale: string;
  session: Session | null;
  messages: AbstractIntlMessages;
  timeZone: string;
}

export default function Providers({ children, locale, session, messages, timeZone }: Props) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone={timeZone}>
      <ApolloProvider client={client}>
        <SessionProvider session={session} refetchOnWindowFocus={false}>
          <AuthSessionSync />
          <LocaleSync />
          {children}
        </SessionProvider>
      </ApolloProvider>
    </NextIntlClientProvider>
  );
}
