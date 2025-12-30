"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSignUpForm } from "@/features/auth/hooks/useSignUpForm";

export default function RegisterPage() {
  const {
    registers,
    onSubmit,
    formState: { errors },
    isSubmitDisabled,
  } = useSignUpForm();

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor={registers.username.id}>Username</label>
        <Input type="text" {...registers.username} placeholder="Username" />
        {errors.username?.message && <p>{errors.username.message}</p>}

        <label htmlFor={registers.email.id}>Email</label>
        <Input type="text" {...registers.email} placeholder="Email" />
        {errors.email?.message && <p>{errors.email.message}</p>}

        <label htmlFor={registers.password.id}>Password</label>
        <Input type="text" {...registers.password} placeholder="Password" />
        {errors.password?.message && <p>{errors.password.message}</p>}

        <label htmlFor={registers.terms.id}>
          <input type="checkbox" {...registers.terms} />I agree to the terms
        </label>
        {errors.terms?.message && <p>{errors.terms.message}</p>}

        <div>
          <Button type="submit" disabled={isSubmitDisabled}>
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
}
