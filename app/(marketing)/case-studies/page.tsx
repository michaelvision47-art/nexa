import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = { title: "Case Studies" };

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        title="Case Studies"
        subtitle="Real outcomes for teams modernizing platforms, data, and digital products."
      />
      <section className="mx-auto max-w-7xl space-y-10 px-5 py-16 lg:px-8">
        {caseStudies.map((study, index) => (
          <article
            key={study.slug}
            className="overflow-hidden rounded-3xl border border-line bg-white shadow-sm"
          >
            <div
              className={`grid lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="relative min-h-[280px] bg-slate-200">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div className="p-8 lg:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                  {study.industry}
                </p>
                <h2 className="mt-2 text-2xl font-extrabold text-navy">
                  {study.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted">{study.summary}</p>
                <div className="mt-6 grid grid-cols-3 gap-4">
                  {study.stats.map((stat) => (
                    <div key={stat.label} className="rounded-xl bg-canvas px-3 py-4">
                      <p className="text-2xl font-extrabold text-brand">{stat.value}</p>
                      <p className="mt-1 text-[11px] text-muted">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Button href={`/case-studies/${study.slug}`} size="sm">
                    Read Case Study
                  </Button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
