"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { signIn } from "next-auth/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CODES } from "@/constants";
import { buildRegister, requiredString } from "@/lib/form";

const createSchema = (t: (key: string, values?: Record<string, number>) => string) =>
  z.object({
    username: requiredString(t),
    password: requiredString(t),
    rememberMe: z.boolean().optional(),
  });

export const useSignInForm = () => {
  const t = useTranslations();
  const schema = useMemo(() => createSchema(t), [t]);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      username: "",
      password: "",
      rememberMe: true,
    },
    mode: "onTouched",
  });

  const isSubmitDisabled = formState.isSubmitting || !formState.isValid;

  const buildedRegister = buildRegister(register);
  const registers = {
    username: buildedRegister("username"),
    password: buildedRegister("password"),
    rememberMe: buildedRegister("rememberMe"),
  };

  const onSubmit = handleSubmit(async (data) => {
    setSubmitError(null);

    const result = await signIn("credentials", {
      username: data.username,
      password: data.password,
      rememberMe: data.rememberMe,
      callbackUrl: "/",
      redirect: false,
    });

    const fallbackMessage = t("errors.loginFailed");
    const serverErrorMessage = t("errors.server");

    if (result?.error) {
      setSubmitError(result.error === CODES.ERROR.SIGNIN.CREDENTIALS ? fallbackMessage : result.error);
      return;
    }

    if (result?.status && result.status >= 500) {
      setSubmitError(serverErrorMessage);
      return;
    }

    if (!result?.ok) {
      setSubmitError(fallbackMessage);
      return;
    }

    // if (result?.url) {
    //   window.location.href = result.url;
    // }
  });

  return { registers, onSubmit, formState, reset, isSubmitDisabled, submitError };
};
