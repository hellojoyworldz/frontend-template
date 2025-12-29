// 필요할 때 yarn add decimal.js 설치하여 사용 (설치했으면 주석 제거)
import { DECIMAL_POLICY } from "@/constants/decimal";
import Decimal from "decimal.js";

export type DecimalUnit = "DEFAULT" | "KRW" | "USD";

// precision - 백엔드 검증이 필요한 경우 값을 백엔드와 일치시켜야 함
Decimal.set({ precision: 10 });

export { Decimal };

export const applyDecimalPolicy = (value: Decimal, unit: DecimalUnit) => {
  const { scale, rounding } = DECIMAL_POLICY[unit];

  return value.toDecimalPlaces(scale, rounding);
};
