import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, CtaBand } from "@/components/ui/PageHero";
import { techLogos, values } from "@/lib/data";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Technology that moves businesses forward."
        subtitle="NEXABLOOM is a software consulting firm. We design, build, and operate the systems companies depend on."
      />
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-extrabold text-navy">Our Mission</h2>
          <p className="mt-4 leading-7 text-muted">
            Help ambitious organizations ship software that is secure, scalable,
            and genuinely useful — without the theater of oversized consulting
            programs. We bring senior engineers, architects, and delivery leads
            who stay close to the work.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-line p-5">
                <h3 className="font-bold text-navy">{value.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-[420px] overflow-hidden rounded-3xl">
          <Image
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80"
            alt="Engineer working on a laptop"
            fill
            className="object-cover"
          />
        </div>
      </section>
      <section className="bg-canvas">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <h2 className="text-2xl font-extrabold text-navy">Our Technology Expertise</h2>
          <p className="mt-2 max-w-2xl text-muted">
            We are fluent in the platforms our clients already run — and opinionated
            about the ones they should.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {techLogos.map((logo) => (
              <div
                key={logo}
                className="flex h-16 items-center justify-center rounded-xl border border-line bg-white text-sm font-semibold text-navy"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
