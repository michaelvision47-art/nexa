import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-canvas px-4 text-center">
      <Logo light={false} />
      <p className="mt-10 text-6xl font-extrabold text-brand">404</p>
      <h1 className="mt-3 text-2xl font-bold text-navy">Page not found</h1>
      <p className="mt-2 max-w-md text-muted">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="mt-6">
        <Button href="/">Go home</Button>
      </div>
    </div>
  );
}
