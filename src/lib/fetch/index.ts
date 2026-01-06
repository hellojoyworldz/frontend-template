import { print } from "graphql";
import type { DocumentNode } from "graphql";
import { GRAPHQL_URL } from "@/constants";

export const httpRequest = async ({
  method = "POST",
  requestUrl = GRAPHQL_URL,
  accessToken,
  headers,
  body,
  query,
  variables,
}: {
  method?: "POST" | "GET";
  requestUrl?: string;
  accessToken?: string;
  headers?: Record<string, string>;
  body?: Record<string, unknown> | string;
  query?: DocumentNode | string;
  variables?: Record<string, unknown>;
}) => {
  if (!requestUrl) throw new Error("requestUrl is not set");

  const requestHeaders = {
    "Content-Type": "application/json",
    ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
    ...headers,
  };

  const payload =
    typeof body === "string"
      ? body
      : JSON.stringify({
          ...(query ? { query: typeof query === "string" ? query : print(query) } : {}),
          ...(variables ? { variables } : {}),
          ...(body ?? {}),
        });

  const response = await fetch(requestUrl, {
    method,
    headers: requestHeaders,
    body: method === "GET" ? undefined : payload,
  });

  return response;
};
