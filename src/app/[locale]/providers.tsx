"use client";

import { NextIntlClientProvider } from "next-intl";
import type { AbstractIntlMessages } from "next-intl";
import { ApolloProvider } from "@apollo/client/react";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";
import client from "@/lib/apollo/client";

interface Props {
  children: React.ReactNode;
  locale: string;
  session: Session | null;
  messages: AbstractIntlMessages;
}

export default function Providers({ children, locale, session, messages }: Props) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ApolloProvider client={client}>
        <SessionProvider session={session}>{children}</SessionProvider>
      </ApolloProvider>
    </NextIntlClientProvider>
  );
}
