import Decimal from "decimal.js";

// 소수점 처리 정책 - scale: 소수점 자리수, rounding: 반올림 모드
const DECIMAL_POLICY = {
  DEFAULT: { scale: 5, rounding: Decimal.ROUND_DOWN },
  KRW: { scale: 0, rounding: Decimal.ROUND_DOWN },
  USD: { scale: 2, rounding: Decimal.ROUND_DOWN },
} satisfies Record<string, { scale: number; rounding: Decimal.Rounding }>;

// DECIMAL_POLICY 키에 대한 타입 추론
export type DecimalUnit = keyof typeof DECIMAL_POLICY;

// 백엔드 검증이 필요한 경우 값을 백엔드와 일치시켜야 함
Decimal.set({ precision: 10 });
export { Decimal };

// 소수점 처리 정책 적용 함수
export const applyDecimalPolicy = (value: Decimal, unit: DecimalUnit) => {
  const { scale, rounding } = DECIMAL_POLICY[unit];

  return value.toDecimalPlaces(scale, rounding);
};
