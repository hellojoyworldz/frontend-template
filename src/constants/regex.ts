import { RULES, FILTER } from "@/lib/regex";

// 검증용 정규식
export const REGEX = {
  ID: RULES.LOW_NUM_SPID_SEQ_LOW_8_20,
  PASSWORD: RULES.EN_NUM_SPPW_REQ_UP_SPPW_8,
  NAME: RULES.UL,
  EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  PHONE: /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/,
  BIRTHDAY: /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/,
};

// 치환용 정규식
export const REPLACE = {
  ID: FILTER.LOW_NUM_SPID,
  PASSWORD: FILTER.EN_NUM_SPPW,
  NAME: FILTER.UL,
};
