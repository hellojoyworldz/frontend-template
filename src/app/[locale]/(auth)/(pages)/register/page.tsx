"use client";

import { REGISTER } from "@/graphql/auth";
import { signIn } from "next-auth/react";
import type { FormEvent } from "react";
import { useState } from "react";

export default function RegisterPage() {
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      const formData = new FormData(event.currentTarget);
      const email = String(formData.get("email") ?? "");
      const password = String(formData.get("password") ?? "");

      const response = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_URL ?? process.env.GRAPHQL_URL ?? "", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: REGISTER,
          variables: { email, password },
        }),
      });

      const json = await response.json();
      const graphQLError = json?.errors?.[0]?.message as string | undefined;
      const registerResult = json?.data?.register ?? json?.data?.signup;

      if (!response.ok || graphQLError) {
        setError(graphQLError ?? "회원가입에 실패했어요. 잠시 후 다시 시도해줘.");
        return;
      }

      if (!registerResult) {
        setError("회원가입에 실패했어요. 입력한 정보를 확인해줘.");
        return;
      }

      const status = registerResult?.status;
      const statusValue = typeof status === "string" ? status.toLowerCase() : status;

      if (statusValue === false || statusValue === "error" || statusValue === "fail" || statusValue === "failed") {
        setError(registerResult?.message ?? "회원가입에 실패했어요. 입력한 정보를 확인해줘.");
        return;
      }

      const result = await signIn("credentials", {
        username: email,
        password,
        callbackUrl: "/",
        redirect: false,
      });

      if (result?.error) {
        setError("회원가입은 완료됐지만 자동 로그인이 실패했어요. 로그인해줘.");
        return;
      }

      if (result?.url) {
        window.location.href = result.url;
      }
    } catch (err) {
      setError("회원가입에 실패했어요. 잠시 후 다시 시도해줘.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      {error ? <p>{error}</p> : null}
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <button type="submit" disabled={submitting}>
          {submitting ? "Submitting..." : "Register"}
        </button>
      </form>
    </div>
  );
}
