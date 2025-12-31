import Decimal from "decimal.js";
import { applyDecimalPolicy, type DecimalUnit } from "@/lib/decimal/config";

type Values = Decimal.Value[];
type Operation = "plus" | "minus" | "mul" | "div";

const calculateDecimal = (values: Values, unit: DecimalUnit = "DEFAULT", operation: Operation): Decimal => {
  if (values.length === 0) return new Decimal(0);

  const [first, ...rest] = values.map((v) => new Decimal(v));
  const result = rest.reduce((acc, cur) => {
    if (operation === "div" && cur.isZero()) throw new Error("Divide by zero");

    return acc[operation](cur);
  }, first);

  return applyDecimalPolicy(result, unit);
};

// 개별 연산 함수
export const plus = (v: Values, u?: DecimalUnit) => calculateDecimal(v, u, "plus");
export const minus = (v: Values, u?: DecimalUnit) => calculateDecimal(v, u, "minus");
export const multiply = (v: Values, u?: DecimalUnit) => calculateDecimal(v, u, "mul");
export const divide = (v: Values, u?: DecimalUnit) => calculateDecimal(v, u, "div");
