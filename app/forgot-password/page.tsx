"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-canvas px-4">
      <div className="w-full max-w-md rounded-3xl border border-line bg-white p-8">
        <Logo light={false} />
        <h1 className="mt-6 text-2xl font-extrabold text-navy">Reset your password</h1>
        {sent ? (
          <p className="mt-4 text-sm text-muted">
            If that email exists, we sent a reset link.
          </p>
        ) : (
          <form
            className="mt-6 space-y-4"
            onSubmit={(event) => {
              event.preventDefault();
              setSent(true);
            }}
          >
            <label className="block text-sm font-medium">
              Email
              <input
                type="email"
                required
                className="mt-1.5 w-full rounded-lg border border-line px-3 py-2.5"
              />
            </label>
            <Button type="submit" className="w-full">
              Send reset link
            </Button>
          </form>
        )}
        <p className="mt-6 text-center text-sm">
          <Link href="/login" className="text-brand">
            Back to sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
