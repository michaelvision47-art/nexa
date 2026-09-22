import { Button } from "@/components/ui/Button";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  actions,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="hero-grid hero-glow absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            {subtitle}
          </p>
        )}
        {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="bg-navy">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-14 sm:flex-row sm:items-center lg:px-8">
        <div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to build what comes next?
          </h2>
          <p className="mt-2 text-slate-300">
            Tell us about your platform, product, or transformation agenda.
          </p>
        </div>
        <div className="flex gap-3">
          <Button href="/contact">Start a Project</Button>
          <Button href="/case-studies" variant="outline">
            See case studies
          </Button>
        </div>
      </div>
    </section>
  );
}
