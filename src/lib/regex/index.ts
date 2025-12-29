import { buildRegex, buildReplace } from "@/lib/regex/builder";

// 기본 문자셋 정의
const CHARSET = {
  UL: "\\p{L}", // 모든 언어의 문자(Unicode Letter)
  KO: "가-힣", // 한글
  EN: "A-Za-z", // 영문자
  UP: "A-Z", // 대문자
  LOW: "a-z", // 소문자
  NUM: "0-9", // 숫자
  WS: "\\s", // 공백 문자(Whitespace)

  // 특수문자
  SP: "!@#$%^&*()_+=\\[\\]{};'\":\\\\|,.<>/?`~\\-",
  SPID: "_-", // 아이디용
  SPPW: "!@#$%^&*()_+=~\\-", // 비밀번호용
};

// 허용 문자셋 조합
const ALLOWS = {
  EN_NUM_SP: `${CHARSET.EN}${CHARSET.NUM}${CHARSET.SP}`,
  LOW_NUM_SPID: `${CHARSET.LOW}${CHARSET.NUM}${CHARSET.SPID}`,
  EN_NUM_SPPW: `${CHARSET.EN}${CHARSET.NUM}${CHARSET.SPPW}`,
};

// 검증용 규칙
export const RULES = {
  // 기본
  UL: buildRegex({ allow: CHARSET.UL, flags: "u" }),
  KO: buildRegex({ allow: CHARSET.KO }),
  EN: buildRegex({ allow: CHARSET.EN }),
  UP: buildRegex({ allow: CHARSET.UP }),
  LOW: buildRegex({ allow: CHARSET.LOW }),
  NUM: buildRegex({ allow: CHARSET.NUM }),
  WS: buildRegex({ allow: CHARSET.WS }),
  SP: buildRegex({ allow: CHARSET.SP }),
  SPID: buildRegex({ allow: CHARSET.SPID }),
  SPPW: buildRegex({ allow: CHARSET.SPPW }),

  // 영문/숫자/특수문자 조합, 대문자 2자 이상/소문자 1자 이상 필수, 8~20자
  EN_NUM_SP_REQ_UP_MIN2_LOW_MIN1_8_20: buildRegex({
    allow: ALLOWS.EN_NUM_SP,
    require: [
      { set: CHARSET.UP, min: 2 },
      { set: CHARSET.LOW, min: 1 },
    ],
    min: 8,
    max: 20,
  }),
  // 영문/숫자/특수문자 조합, 대문자 3자 이상/소문자 3자 이하, 대문자 2자 이상+소문자 2자 이하로 시작, 8~20자
  EN_NUM_SP_REQ_UP_MIN3_LOW_MAX3_SEQ_UP_MIN2_LOW_MAX2_8_20: buildRegex({
    allow: ALLOWS.EN_NUM_SP,
    require: [
      { set: CHARSET.UP, min: 3 },
      { set: CHARSET.LOW, max: 3 },
    ],
    sequence: [
      { set: CHARSET.UP, min: 2 },
      { set: CHARSET.LOW, max: 2 },
    ],
    min: 8,
    max: 20,
  }),
  // 소문자/숫자/특수문자 조합, 소문자로 시작, 8~20자
  LOW_NUM_SPID_SEQ_LOW_8_20: buildRegex({
    allow: ALLOWS.LOW_NUM_SPID,
    sequence: [{ set: CHARSET.LOW }],
    min: 8,
    max: 20,
  }),
  // 영문/숫자/특수문자 조합, 대문자 또는 특수문자 필수, 8~20자
  EN_NUM_SPPW_REQ_UP_OR_SPPW_8_20: buildRegex({
    allow: ALLOWS.EN_NUM_SPPW,
    require: [{ set: `${CHARSET.UP}${CHARSET.SPPW}` }],
    min: 8,
    max: 20,
  }),
  // 영문/숫자/특수문자 조합, 대문자/특수문자 필수, 8~20자
  EN_NUM_SPPW_REQ_UP_SPPW_8_20: buildRegex({
    allow: ALLOWS.EN_NUM_SPPW,
    require: [{ set: CHARSET.UP }, { set: CHARSET.SPPW }],
    min: 8,
    max: 20,
  }),
};

// 치환용 규칙
export const FILTER = {
  // 기본
  UL: buildReplace(CHARSET.UL, "u"),
  KO: buildReplace(CHARSET.KO),
  EN: buildReplace(CHARSET.EN),
  UP: buildReplace(CHARSET.UP),
  LOW: buildReplace(CHARSET.LOW),
  NUM: buildReplace(CHARSET.NUM),
  WS: buildReplace(CHARSET.WS),
  SP: buildReplace(CHARSET.SP),
  SPID: buildReplace(CHARSET.SPID),
  SPPW: buildReplace(CHARSET.SPPW),

  EN_NUM_SP: buildReplace(ALLOWS.EN_NUM_SP),
  LOW_NUM_SPID: buildReplace(ALLOWS.LOW_NUM_SPID),
  EN_NUM_SPPW: buildReplace(ALLOWS.EN_NUM_SPPW),
};
