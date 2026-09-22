"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { MapPin, Briefcase, Clock3 } from "lucide-react";
import { jobs } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const departments = ["All", ...Array.from(new Set(jobs.map((job) => job.department)))];
const types = ["All", ...Array.from(new Set(jobs.map((job) => job.type)))];
const locations = ["All", ...Array.from(new Set(jobs.map((job) => job.location)))];

export default function JobsPage() {
  const [department, setDepartment] = useState("All");
  const [type, setType] = useState("All");
  const [location, setLocation] = useState("All");

  const filtered = useMemo(
    () =>
      jobs.filter(
        (job) =>
          (department === "All" || job.department === department) &&
          (type === "All" || job.type === type) &&
          (location === "All" || job.location === location),
      ),
    [department, type, location],
  );

  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <h1 className="text-3xl font-extrabold text-navy">Open Positions</h1>
        <p className="mt-2 text-muted">
          Filter by department, employment type, and location.
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-[240px_1fr]">
          <aside className="h-fit rounded-2xl border border-line bg-white p-5">
            <FilterGroup label="Department" value={department} options={departments} onChange={setDepartment} />
            <FilterGroup label="Employment" value={type} options={types} onChange={setType} />
            <FilterGroup label="Location" value={location} options={locations} onChange={setLocation} />
          </aside>
          <div className="space-y-4">
            {filtered.map((job) => (
              <article
                key={job.slug}
                className="flex flex-col gap-4 rounded-2xl border border-line bg-white p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <Link
                    href={`/careers/jobs/${job.slug}`}
                    className="text-lg font-bold text-navy hover:text-brand"
                  >
                    {job.title}
                  </Link>
                  <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted">
                    <span className="inline-flex items-center gap-1">
                      <Briefcase size={13} /> {job.department}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock3 size={13} /> {job.type}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={13} /> {job.location}
                    </span>
                    <span>Posted {job.posted}</span>
                  </div>
                </div>
                <Button href={`/careers/jobs/${job.slug}`} size="sm">
                  View Position
                </Button>
              </article>
            ))}
            {filtered.length === 0 && (
              <p className="rounded-2xl border border-dashed border-line bg-white p-10 text-center text-muted">
                No roles match those filters.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function FilterGroup({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <div className="mb-5 last:mb-0">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </p>
      <div className="space-y-1.5">
        {options.map((option) => (
          <label key={option} className="flex cursor-pointer items-center gap-2 text-sm">
            <input
              type="radio"
              className="accent-brand"
              checked={value === option}
              onChange={() => onChange(option)}
            />
            <span className={cn(value === option ? "font-medium text-navy" : "text-muted")}>
              {option}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
