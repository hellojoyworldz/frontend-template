"use client";

import { useTranslations } from "next-intl";
import { signOut } from "next-auth/react";
import { useAuth } from "@/hooks";
import { useSignInForm } from "@/features/auth/hooks/useSignInForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SigninComponent() {
  const t = useTranslations("auth");
  const { isLoggingIn, isLoggedIn, isGuest, user } = useAuth();
  const { registers, onSubmit, isSubmitDisabled, submitError } = useSignInForm();

  if (isLoggingIn) {
    return <p>Loading...</p>;
  }

  if (isLoggedIn) {
    return (
      <>
        <p>{user?.name}</p>
        <p>{user?.email}</p>
        <Button onClick={() => signOut()}>{t("signout")}</Button>
      </>
    );
  }

  if (isGuest) {
    return (
      <div>
        <h1>{t("signin")}</h1>
        <form onSubmit={onSubmit}>
          <label htmlFor={registers.username.id}>
            {t("username")}:
            <Input type="text" {...registers.username} />
          </label>
          <label htmlFor={registers.password.id}>
            {t("password")}:
            <Input type="password" {...registers.password} />
          </label>
          <label htmlFor={registers.rememberMe.id}>
            <input type="checkbox" {...registers.rememberMe} /> {t("rememberMe")}
          </label>
          <Button type="submit" disabled={isSubmitDisabled}>
            {t("signin")}
          </Button>
          {submitError && <p>{submitError}</p>}
        </form>
      </div>
    );
  }
}
