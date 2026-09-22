import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { caseStudies } from "@/lib/data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  return { title: study?.title ?? "Case Study" };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) notFound();

  return (
    <article>
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="hero-glow absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
            {study.industry} · {study.client}
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            {study.title}
          </h1>
          <p className="mt-4 max-w-2xl text-slate-300">{study.summary}</p>
        </div>
      </section>
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1.4fr_0.8fr] lg:px-8">
        <div>
          <div className="relative mb-8 h-72 overflow-hidden rounded-3xl">
            <Image src={study.image} alt="" fill className="object-cover" />
          </div>
          <section className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-navy">The challenge</h2>
              <p className="mt-3 leading-7 text-muted">{study.challenge}</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-navy">Our approach</h2>
              <p className="mt-3 leading-7 text-muted">{study.approach}</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-navy">The outcome</h2>
              <p className="mt-3 leading-7 text-muted">{study.outcome}</p>
            </div>
          </section>
        </div>
        <aside className="h-fit rounded-2xl border border-line bg-canvas p-6">
          <div className="grid grid-cols-1 gap-4">
            {study.stats.map((stat) => (
              <div key={stat.label} className="rounded-xl bg-white p-4">
                <p className="text-3xl font-extrabold text-brand">{stat.value}</p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Button href="/contact" className="w-full">
              Start a similar program
            </Button>
          </div>
        </aside>
      </div>
    </article>
  );
}
