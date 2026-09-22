"use client";

import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-canvas px-4 text-center">
      <Logo light={false} />
      <h1 className="mt-10 text-2xl font-bold text-navy">Something went wrong</h1>
      <p className="mt-2 max-w-md text-muted">
        An unexpected error occurred. Try again, or return to the homepage.
      </p>
      <div className="mt-6 flex gap-3">
        <Button onClick={reset}>Try again</Button>
        <Button href="/" variant="navy">
          Go home
        </Button>
      </div>
    </div>
  );
}
