import Image from "next/image";
import Link from "next/link";
import { CloudScene } from "@/components/home/CloudScene";
import { Button } from "@/components/ui/Button";
import { IconBadge } from "@/components/ui/IconBadge";
import { CtaBand } from "@/components/ui/PageHero";
import { company, services } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="hero-grid hero-glow absolute inset-0" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
          <div>
            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              Build Better.
              <br />
              Scale Faster.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-slate-300 sm:text-lg">
              {company.description} From cloud platforms to AI, data, and
              cybersecurity, we help you ship software that lasts.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" size="lg">
                Start a Project
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Explore Our Services
              </Button>
            </div>
          </div>
          <CloudScene />
        </div>
      </section>

      <section className="relative z-10 -mt-8 px-5 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {services.map((service) => (
            <Link
              key={service.slug}
              href="/services"
              className="card-shadow rounded-2xl bg-white p-5 transition hover:-translate-y-0.5"
            >
              <IconBadge name={service.icon} tint={service.tint} />
              <h3 className="mt-4 text-sm font-bold text-navy">{service.title}</h3>
              <p className="mt-2 text-xs leading-5 text-muted">{service.short}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Why teams choose us
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Trusted technology expertise
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-7 text-muted">
            We help businesses build resilient software with modern architecture,
            disciplined engineering, and a bias for production outcomes. Senior
            practitioners stay on the work from discovery through run.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6">
            {[
              ["12+", "years delivering"],
              ["140+", "programs shipped"],
              ["98%", "client retention"],
            ].map(([stat, label]) => (
              <div key={label}>
                <p className="text-2xl font-extrabold text-navy">{stat}</p>
                <p className="mt-1 text-xs text-muted">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80"
            alt="NEXABLOOM consultants collaborating with a client team"
            width={900}
            height={640}
            className="h-[360px] w-full object-cover lg:h-[420px]"
          />
          <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-navy/90 p-5 text-white backdrop-blur">
            <p className="text-sm font-semibold">Your Success Is Our Mission</p>
            <p className="mt-1 text-xs text-slate-300">
              Product, platform, and transformation programs delivered as one
              team with yours.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
