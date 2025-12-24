// 필요할 때 yarn add decimal.js 설치하여 사용 (설치했으면 주석 제거)
import Decimal from "decimal.js";
import { applyDecimalPolicy, DecimalUnit } from "@/lib/decimal/decimal";
import { DEFAULT_UNIT } from "@/constants/decimal";

type Values = Decimal.Value[];
type Operation = "plus" | "minus" | "mul" | "div";

const calculateDecimal = (values: Values, unit: DecimalUnit, operation: Operation): Decimal => {
  if (values.length === 0) return new Decimal(0);

  const [first, ...rest] = values.map((v) => new Decimal(v));
  const result = rest.reduce((acc, cur) => {
    if (operation === "div" && cur.isZero()) throw new Error("Divide by zero");

    return acc[operation](cur);
  }, first);

  return applyDecimalPolicy(result, unit);
};

// 개별 연산 함수
export const plus = (v: Values, u: DecimalUnit = DEFAULT_UNIT) => calculateDecimal(v, u, "plus");
export const minus = (v: Values, u: DecimalUnit = DEFAULT_UNIT) => calculateDecimal(v, u, "minus");
export const multiply = (v: Values, u: DecimalUnit = DEFAULT_UNIT) => calculateDecimal(v, u, "mul");
export const divide = (v: Values, u: DecimalUnit = DEFAULT_UNIT) => calculateDecimal(v, u, "div");
