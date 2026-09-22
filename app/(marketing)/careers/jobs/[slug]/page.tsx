import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Briefcase, Clock3, Share2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { benefits, jobs } from "@/lib/data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = jobs.find((item) => item.slug === slug);
  return { title: job?.title ?? "Role" };
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = jobs.find((item) => item.slug === slug);
  if (!job) notFound();

  const similar = jobs.filter((item) => item.slug !== job.slug).slice(0, 3);

  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-5 py-12 lg:grid-cols-[1.3fr_0.7fr] lg:px-8">
      <article>
        <p className="text-xs text-muted">
          Careers / Open Positions / {job.title}
        </p>
        <h1 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
          {job.title}
        </h1>
        <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted">
          <span className="inline-flex items-center gap-1">
            <Briefcase size={14} /> {job.department}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock3 size={14} /> {job.type}
          </span>
          <span className="inline-flex items-center gap-1">
            <MapPin size={14} /> {job.location}
          </span>
        </div>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="text-lg font-bold text-navy">About the Role</h2>
            <p className="mt-3 leading-7 text-muted">{job.about}</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-navy">Responsibilities</h2>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
              {job.responsibilities.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-bold text-navy">Requirements</h2>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
              {job.requirements.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>

      <aside className="space-y-5">
        <div className="rounded-2xl border border-line bg-white p-6 shadow-sm">
          <Button href={`/careers/apply/${job.slug}`} className="w-full">
            Apply Now
          </Button>
          <p className="mt-4 text-sm text-muted">Compensation {job.salary}</p>
          <p className="mt-1 text-sm text-muted">Experience {job.experience}</p>
          <h3 className="mt-6 font-bold text-navy">Benefits</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {benefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-6 inline-flex items-center gap-2 text-sm text-slate-500">
            <Share2 size={14} /> Share this job
          </p>
        </div>
        <div className="rounded-2xl border border-line bg-white p-6">
          <h3 className="font-bold text-navy">Similar Positions</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {similar.map((item) => (
              <li key={item.slug}>
                <Link href={`/careers/jobs/${item.slug}`} className="font-medium text-brand">
                  {item.title}
                </Link>
                <p className="text-xs text-muted">
                  {item.location} · {item.type}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </section>
  );
}
