import type { FieldValues, Path, RegisterOptions, UseFormRegister } from "react-hook-form";
import { z } from "zod";

// 필수 문자열 스키마 생성 함수
export const requiredString = (
  t: (key: string, values?: Record<string, number>) => string,
  { trim = true }: { trim?: boolean } = {},
) => {
  let schema = z.string();

  if (trim) {
    schema = schema.trim();
  }

  return schema.min(1, { message: t("validation.required") });
};

// register 속성 생성 함수
export const buildRegister =
  <TFieldValues extends FieldValues>(register: UseFormRegister<TFieldValues>) =>
  <TFieldName extends Path<TFieldValues>>(field: TFieldName, options?: RegisterOptions<TFieldValues, TFieldName>) => ({
    ...register(field, options),
    id: field,
  });
