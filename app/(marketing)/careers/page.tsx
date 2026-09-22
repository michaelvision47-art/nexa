import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { IconBadge } from "@/components/ui/IconBadge";
import { culture } from "@/lib/data";

export const metadata: Metadata = { title: "Careers" };

export default function CareersPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="hero-glow absolute inset-0" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
              Build What Comes Next.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-7 text-slate-300">
              Join a team solving challenging problems across software
              engineering, cloud, AI, data, and cybersecurity.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/careers/jobs" size="lg">
                Open Positions
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Meet our team
              </Button>
            </div>
          </div>
          <div className="relative h-[320px] overflow-hidden rounded-3xl lg:h-[380px]">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
              alt="NEXABLOOM team collaborating around a table"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold text-navy">
          Why NEXABLOOM?
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {culture.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-line bg-white p-5 text-center shadow-sm"
            >
              <div className="flex justify-center">
                <IconBadge name={item.icon as "globe"} />
              </div>
              <h3 className="mt-4 font-bold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
