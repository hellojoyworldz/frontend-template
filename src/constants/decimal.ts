// 필요할 때 yarn add decimal.js 설치하여 사용 (설치했으면 주석 제거)
// 기본 설정은 lib폴더에서 관리
import Decimal from "decimal.js";
import { DecimalUnit } from "@/lib/decimal/decimal";

export const DEFAULT_UNIT = "DEFAULT";
export const DECIMAL_POLICY: Record<DecimalUnit, { scale: number; rounding: Decimal.Rounding }> = {
  DEFAULT: { scale: 5, rounding: Decimal.ROUND_DOWN },
  KRW: { scale: 0, rounding: Decimal.ROUND_DOWN },
  USD: { scale: 2, rounding: Decimal.ROUND_DOWN },
};
