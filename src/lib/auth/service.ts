import { print } from "graphql";
import { MUTATION_REFRESH_TOKEN, MUTATION_LOGIN, QUERY_ME } from "@/graphql/auth";
import { CODES } from "@/constants";
import { DEFAULT_LOCALE } from "@/lib/i18n";
import { httpRequest } from "@/lib/fetch";

export const fetchLogin = async (locale?: string, username?: string, password?: string) => {
  if (!username || !password) {
    throw new Error(CODES.ERROR.SIGNIN.CREDENTIALS);
  }

  const response = await httpRequest({
    headers: { "x-Locale": locale ?? DEFAULT_LOCALE },
    query: MUTATION_LOGIN,
    variables: {
      input: {
        email: username,
        password,
      },
    },
  });
  const json = await response.json();

  // graphql
  const gqlData = json?.data?.login;
  const gqlErrorMessage = json?.errors?.[0]?.message;
  if (gqlErrorMessage || gqlData) {
    if (gqlErrorMessage) {
      throw new Error(gqlErrorMessage);
    }

    if (!gqlData?.access_token) {
      throw new Error(gqlData?.message ?? CODES.ERROR.SIGNIN.CREDENTIALS);
    }

    return gqlData;
  }

  // rest api (사용 시 알맞게 수정하여 사용)
  const data = json?.data || json;
  const message = json?.message ?? CODES.ERROR.SIGNIN.CREDENTIALS;
  if (!response.ok || json.status !== "ok" || !data?.access_token) {
    throw new Error(message);
  }

  return data;
};

export const fetchMe = async (accessToken?: string) => {
  if (!accessToken) return null;

  const response = await httpRequest({ accessToken, query: QUERY_ME });
  const json = await response.json();

  // graphql
  const gqlData = json?.data?.me;
  const gqlErrorMessage = json?.errors?.[0]?.message;
  if (gqlErrorMessage || gqlData) {
    if (gqlErrorMessage || !gqlData) {
      return null;
    }

    return gqlData;
  }

  // rest api (사용 시 알맞게 수정하여 사용)
  const data = json?.data || json;
  if (!response.ok || json.status !== "ok" || !data) {
    return null;
  }

  return data;
};

export const fetchRefreshToken = async (refreshToken: string | undefined) => {
  if (!refreshToken) {
    throw new Error("No refresh token available");
  }

  const response = await httpRequest({
    query: print(MUTATION_REFRESH_TOKEN),
    variables: { refreshToken },
  });
  const json = await response.json();

  // graphql
  const gqlData = json?.data?.refresh_token;
  const gqlErrorMessage = json?.errors?.[0]?.message;
  if (gqlErrorMessage || gqlData) {
    if (gqlErrorMessage) {
      throw new Error(gqlErrorMessage);
    }

    if (!gqlData?.access_token) {
      throw new Error(gqlData?.message ?? "Refresh failed.");
    }

    return {
      access_token: gqlData.access_token,
      refresh_token: refreshToken,
      token_type: gqlData.token_type,
      expires_at: toEpochMs(gqlData.expires_in),
    };
  }

  // rest api (사용 시 알맞게 수정하여 사용)
  const data = json?.data || json;
  if (!response.ok || json.status !== "ok" || !data?.access_token) {
    throw new Error(data?.message ?? "Refresh failed.");
  }

  return {
    access_token: data.access_token,
    refresh_token: refreshToken,
    token_type: data.token_type,
    expires_at: toEpochMs(data.expires_in),
  };
};

export const toEpochMs = (value?: number | string) => {
  if (value == null) return undefined;

  // 숫자형 값을 ms 단위의 epoch 시간으로 변환
  const toEpochFromNumber = (num: number) => {
    if (!Number.isFinite(num)) return undefined;
    if (num > 1e12) return num; // ms
    if (num > 1e10) return num * 1000; // 초 -> ms
    return Date.now() + num * 1000; // 상대 시간(초) -> 현재시각 기준 절대 시간(ms)
  };

  if (typeof value === "string") {
    const raw = value.trim();
    const numeric = Number(raw);

    // 숫자형일 경우 바로 변환
    if (Number.isFinite(numeric)) return toEpochFromNumber(numeric);

    // "YYYY-MM-DD HH:mm:ss" → ISO -> ms
    const normalized = raw.replace(" ", "T");
    const parsed = Date.parse(normalized); // 날짜 문자열 -> ms
    return Number.isFinite(parsed) ? parsed : undefined;
  }

  return toEpochFromNumber(value);
};
