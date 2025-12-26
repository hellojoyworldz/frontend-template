"use client";

import { signIn } from "next-auth/react";
import type { FormEvent } from "react";
import { useState } from "react";

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    const formData = new FormData(event.currentTarget);
    const username = String(formData.get("username") ?? "");
    const password = String(formData.get("password") ?? "");

    const result = await signIn("credentials", {
      username,
      password,
      callbackUrl: "/",
      redirect: false,
    });

    if (result?.error) {
      setError("로그인에 실패했어요. 입력한 정보를 확인해줘.");
      return;
    }

    if (result?.url) {
      window.location.href = result.url;
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {error ? <p>{error}</p> : null}
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="username" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
