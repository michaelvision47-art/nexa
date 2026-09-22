import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/ui/PageHero";
import { industries } from "@/lib/data";

export const metadata: Metadata = { title: "Industries" };

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-canvas">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            Industries We Serve
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            We partner with organizations who need software that can stand up to
            regulation, scale, and real-world operations.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((item) => (
            <article
              key={item.slug}
              className="group relative h-64 overflow-hidden rounded-2xl"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(min-width: 1024px) 25vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <h2 className="text-lg font-bold">{item.title}</h2>
                <p className="mt-1 text-xs leading-5 text-slate-200">
                  {item.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
