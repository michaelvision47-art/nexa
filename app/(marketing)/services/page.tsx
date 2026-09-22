import type { Metadata } from "next";
import { IconBadge } from "@/components/ui/IconBadge";
import { CtaBand } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/data";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <section className="bg-canvas">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            What we do
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            World-class technology services to help you build, scale, and
            transform — with senior engineers in the work, not on the sidelines.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.slug}
              className="card-shadow rounded-2xl border border-line bg-white p-7"
            >
              <IconBadge name={service.icon} tint={service.tint} size="lg" />
              <h2 className="mt-5 text-xl font-bold text-navy">{service.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">
                {service.description}
              </p>
              <ul className="mt-5 space-y-2 text-sm text-slate-600">
                {service.bullets.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button href="/contact" variant="ghost" size="sm" className="px-0 text-brand">
                  Learn More →
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
