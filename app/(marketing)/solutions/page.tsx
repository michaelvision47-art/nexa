import type { Metadata } from "next";
import { IconBadge } from "@/components/ui/IconBadge";
import { PageHero, CtaBand } from "@/components/ui/PageHero";
import { solutions } from "@/lib/data";

export const metadata: Metadata = { title: "Solutions" };

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        title="Technology Solutions for Real Business Challenges"
        subtitle="Industry-focused software programs that help you modernize platforms, adopt AI, and operate with confidence."
      />
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((item) => (
            <article
              key={item.slug}
              className="rounded-2xl border border-line bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <IconBadge name={item.icon} />
              <h2 className="mt-4 text-base font-bold text-navy">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
