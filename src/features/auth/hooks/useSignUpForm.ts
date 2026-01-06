"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RULES, REGEX } from "@/constants";
import { buildRegister, requiredString } from "@/lib/form";

const createSchema = (t: (key: string, values?: Record<string, number>) => string) =>
  z.object({
    username: requiredString(t)
      .max(RULES.ID.MAX, { message: t("validation.maxLength", { max: RULES.ID.MAX }) })
      .regex(REGEX.ID, { message: t("validation.id", { min: RULES.ID.MIN }) }),
    email: requiredString(t).email({ message: t("validation.email") }),
    password: requiredString(t)
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

  const buildedRegister = buildRegister(register);
  const registers = {
    username: buildedRegister("username"),
    email: buildedRegister("email"),
    password: buildedRegister("password"),
    terms: buildedRegister("terms"),
  };

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return { registers, onSubmit, formState, reset, isSubmitDisabled };
};
