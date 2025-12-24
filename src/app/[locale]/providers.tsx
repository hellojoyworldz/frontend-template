"use client";

import { NextIntlClientProvider } from "next-intl";
import { ApolloProvider } from "@apollo/client/react";
import { SessionProvider } from "next-auth/react";
import client from "@/lib/apollo/client";

type Props = {
  children: React.ReactNode;
  locale: string;
};

export default function Providers({ children, locale }: Props) {
  return (
    <NextIntlClientProvider locale={locale}>
      <ApolloProvider client={client}>
        <SessionProvider>{children}</SessionProvider>
      </ApolloProvider>
    </NextIntlClientProvider>
  );
}
