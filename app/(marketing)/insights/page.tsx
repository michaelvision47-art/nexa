import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { insights } from "@/lib/data";

export const metadata: Metadata = { title: "Insights" };

export default function InsightsPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <h1 className="text-4xl font-extrabold text-navy">Insights</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Practical notes from the field on software delivery, cloud, data, and AI.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {insights.map((post) => (
          <article
            key={post.slug}
            className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm"
          >
            <div className="relative h-44">
              <Image src={post.image} alt="" fill className="object-cover" />
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                {post.category} · {post.date}
              </p>
              <h2 className="mt-2 text-lg font-bold text-navy">{post.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{post.excerpt}</p>
              <Link href="/contact" className="mt-4 inline-block text-sm font-semibold text-brand">
                Talk with us about this →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
