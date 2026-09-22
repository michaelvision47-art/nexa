"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";

const destinations: Record<string, string> = {
  "client@nexa-blooms.com": "/portal",
  "employee@nexa-blooms.com": "/employee",
  "admin@nexa-blooms.com": "/admin",
  "candidate@nexa-blooms.com": "/candidate",
};

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("client@nexa-blooms.com");
  const [error, setError] = useState("");

  return (
    <div className="flex min-h-screen items-center justify-center bg-canvas px-4">
      <div className="w-full max-w-md rounded-3xl border border-line bg-white p-8 shadow-sm">
        <Logo light={false} />
        <h1 className="mt-6 text-2xl font-extrabold text-navy">Welcome back</h1>
        <p className="mt-1 text-sm text-muted">Sign in to your NEXABLOOM workspace.</p>
        <form
          className="mt-6 space-y-4"
          onSubmit={(event) => {
            event.preventDefault();
            const dest = destinations[email.toLowerCase()];
            if (!dest) {
              setError("Use one of the demo accounts listed below.");
              return;
            }
            router.push(dest);
          }}
        >
          <label className="block text-sm font-medium text-navy">
            Email
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-1.5 w-full rounded-lg border border-line px-3 py-2.5"
            />
          </label>
          <label className="block text-sm font-medium text-navy">
            Password
            <input
              type="password"
              defaultValue="demo"
              className="mt-1.5 w-full rounded-lg border border-line px-3 py-2.5"
            />
          </label>
          {error && <p className="text-sm text-rose-600">{error}</p>}
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
        <p className="mt-4 text-center text-sm">
          <Link href="/forgot-password" className="text-brand">
            Forgot password?
          </Link>
        </p>
        <div className="mt-6 rounded-xl bg-canvas p-4 text-xs text-muted">
          <p className="font-semibold text-navy">Demo accounts</p>
          <ul className="mt-2 space-y-1">
            <li>client@nexa-blooms.com → Client portal</li>
            <li>employee@nexa-blooms.com → Employee portal</li>
            <li>admin@nexa-blooms.com → Admin portal</li>
            <li>candidate@nexa-blooms.com → Candidate portal</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
