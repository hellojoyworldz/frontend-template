"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { REGEX, RULES } from "@/constants";
import { createRegisterBuilder } from "@/lib/form";

const createSchema = (t: (key: string, values?: Record<string, number>) => string) =>
  z.object({
    username: z
      .string()
      .trim()
      .min(1, { message: t("validation.required") })
      .max(RULES.ID.MAX, { message: t("validation.maxLength", { max: RULES.ID.MAX }) })
      .regex(REGEX.ID, { message: t("validation.id", { min: RULES.ID.MIN }) }),
    email: z
      .string()
      .trim()
      .min(1, { message: t("validation.required") })
      .email({ message: t("validation.email") }),
    password: z
      .string()
      .trim()
      .min(1, { message: t("validation.required") })
      .max(RULES.PASSWORD.MAX, { message: t("validation.maxLength", { max: RULES.PASSWORD.MAX }) })
      .regex(REGEX.PASSWORD, { message: t("validation.password", { min: RULES.PASSWORD.MIN }) }),
    terms: z.boolean().refine((val) => val === true, {
      message: t("validation.terms"),
    }),
  });

export const useSignUpForm = () => {
  const t = useTranslations();
  const schema = useMemo(() => createSchema(t), [t]);

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      terms: false,
    },
    mode: "onTouched",
  });

  const isSubmitDisabled = formState.isSubmitting || !formState.isValid;

  const buildRegister = createRegisterBuilder(register);
  const registers = {
    username: buildRegister("username"),
    email: buildRegister("email"),
    password: buildRegister("password"),
    terms: buildRegister("terms"),
  };

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return { registers, onSubmit, formState, reset, isSubmitDisabled };
};
