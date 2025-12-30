import type { FieldValues, Path, RegisterOptions, UseFormRegister } from "react-hook-form";

export const createRegisterBuilder =
  <TFieldValues extends FieldValues>(register: UseFormRegister<TFieldValues>) =>
  <TFieldName extends Path<TFieldValues>>(field: TFieldName, options?: RegisterOptions<TFieldValues, TFieldName>) => ({
    ...register(field, options),
    id: field,
  });
