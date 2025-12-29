type Rule = {
  set: string;
  min?: number;
  max?: number;
};

interface Options {
  allow: string;
  sequence?: Rule[];
  require?: Rule[];
  min?: number;
  max?: number;
  flags?: string;
}

const buildQuantifier = (min?: number, max?: number, quantifier = "+") => {
  if (min == null && max == null) return quantifier;
  if (min != null && max != null) return `{${min},${max}}`;
  if (min != null) return `{${min},}`;
  return `{0,${max}}`;
};

/**
 * 검증용 정규식 생성기
 * 구조
 * - 순서o: /^(길이체크)(필수포함체크)(순서패턴)[나머지허용문자]*$/
 * - 순서x: /^(필수포함체크)[허용문자]{길이체크}$/
 */
export const buildRegex = ({ allow, require = [], min, max, sequence, flags }: Options) => {
  const lookaheads = require
    .map((rule) => {
      const parts: string[] = [];
      if (rule.min != null) parts.push(`(?=(?:.*[${rule.set}]){${rule.min},})`);
      if (rule.max != null) parts.push(`(?!.*(?:[${rule.set}].*){${rule.max + 1},})`);

      return parts.join("");
    })
    .join("");

  const sequenceRules = sequence?.length ? sequence : undefined;
  if (sequenceRules) {
    const lengthLookahead = min != null || max != null ? `(?=.{${min ?? 0},${max ?? ""}}$)` : "";
    const sequencePattern = sequenceRules
      .map((rule) => `[${rule.set}]${buildQuantifier(rule.min, rule.max, "+")}`)
      .join("");
    const source = `^${lengthLookahead}${lookaheads}${sequencePattern}[${allow}]*$`;

    return new RegExp(source, flags);
  }

  const quantifier = buildQuantifier(min, max, "+");
  const source = `^${lookaheads}[${allow}]${quantifier}$`;

  return new RegExp(source, flags);
};

/**
 * 치환용 정규식 생성기
 * 구조: /[^허용문자]/g
 */
export const buildReplace = (allow: string, flags: string = "") => {
  return new RegExp(`[^${allow}]`, `g${flags}`);
};
