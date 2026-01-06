"use client";

import { useTranslations } from "next-intl";
import { useSignUpForm } from "@/features/auth/hooks/useSignUpForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignupComponent() {
  const t = useTranslations();
  const {
    registers,
    onSubmit,
    formState: { errors },
    isSubmitDisabled,
  } = useSignUpForm();

  return (
    <div>
      <h1>{t("auth.signup")}</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor={registers.username.id}>{t("auth.username")}</label>
        <Input type="text" {...registers.username} placeholder={t("auth.username")} />
        {errors.username?.message && <p>{errors.username.message}</p>}

        <label htmlFor={registers.email.id}>{t("auth.email")}</label>
        <Input type="text" {...registers.email} placeholder={t("auth.email")} />
        {errors.email?.message && <p>{errors.email.message}</p>}

        <label htmlFor={registers.password.id}>{t("auth.password")}</label>
        <Input type="text" {...registers.password} placeholder={t("auth.password")} />
        {errors.password?.message && <p>{errors.password.message}</p>}

        <label htmlFor={registers.terms.id}>
          <input type="checkbox" {...registers.terms} />I agree to the terms
        </label>
        {errors.terms?.message && <p>{errors.terms.message}</p>}

        <div>
          <Button type="submit" disabled={isSubmitDisabled}>
            {t("auth.signup")}
          </Button>
        </div>
      </form>
    </div>
  );
}
