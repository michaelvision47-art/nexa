"use client";

import { use, useState } from "react";
import { useRouter } from "next/navigation";
import { jobs } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const steps = ["Personal", "Experience", "Documents", "Review"];

export default function ApplyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const job = jobs.find((item) => item.slug === slug);
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    summary: "",
    years: "",
  });

  if (!job) {
    return <p className="p-10">Role not found.</p>;
  }

  const next = () => setStep((value) => Math.min(value + 1, steps.length - 1));
  const back = () => setStep((value) => Math.max(value - 1, 0));

  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <p className="text-xs text-muted">Careers / {job.title} / Application</p>
        <h1 className="mt-2 text-2xl font-extrabold text-navy">{job.title}</h1>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_280px]">
          <form
            className="rounded-2xl border border-line bg-white p-6 sm:p-8"
            onSubmit={(event) => {
              event.preventDefault();
              if (step < steps.length - 1) next();
              else router.push("/candidate");
            }}
          >
            <div className="mb-8 flex gap-2">
              {steps.map((label, index) => (
                <div key={label} className="flex-1">
                  <div
                    className={cn(
                      "h-1.5 rounded-full",
                      index <= step ? "bg-brand" : "bg-slate-200",
                    )}
                  />
                  <p className="mt-2 text-[11px] font-medium text-muted">{label}</p>
                </div>
              ))}
            </div>

            {step === 0 && (
              <fieldset>
                <h2 className="text-lg font-bold text-navy">Personal Information</h2>
                <p className="mt-1 text-sm text-muted">
                  Please provide your basic information.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <Field label="First name" value={form.first} onChange={(first) => setForm({ ...form, first })} />
                  <Field label="Last name" value={form.last} onChange={(last) => setForm({ ...form, last })} />
                  <Field label="Email" type="email" value={form.email} onChange={(email) => setForm({ ...form, email })} />
                  <Field label="Phone" value={form.phone} onChange={(phone) => setForm({ ...form, phone })} />
                  <Field label="Location" value={form.location} onChange={(location) => setForm({ ...form, location })} />
                  <Field label="LinkedIn" value={form.linkedin} onChange={(linkedin) => setForm({ ...form, linkedin })} />
                </div>
              </fieldset>
            )}

            {step === 1 && (
              <fieldset>
                <h2 className="text-lg font-bold text-navy">Experience</h2>
                <div className="mt-6 grid gap-4">
                  <Field
                    label="Years of experience"
                    value={form.years}
                    onChange={(years) => setForm({ ...form, years })}
                  />
                  <label className="text-sm font-medium text-navy">
                    Summary
                    <textarea
                      rows={6}
                      className="mt-1.5 w-full rounded-lg border border-line px-3 py-2.5"
                      value={form.summary}
                      onChange={(event) =>
                        setForm({ ...form, summary: event.target.value })
                      }
                    />
                  </label>
                </div>
              </fieldset>
            )}

            {step === 2 && (
              <fieldset>
                <h2 className="text-lg font-bold text-navy">Documents</h2>
                <p className="mt-1 text-sm text-muted">
                  Upload a resume. A cover letter is optional.
                </p>
                <div className="mt-6 grid gap-4">
                  <div className="rounded-xl border border-dashed border-line p-8 text-center text-sm text-muted">
                    Resume (PDF) — demo upload, no file is stored
                  </div>
                  <div className="rounded-xl border border-dashed border-line p-8 text-center text-sm text-muted">
                    Cover letter (optional)
                  </div>
                </div>
              </fieldset>
            )}

            {step === 3 && (
              <fieldset>
                <h2 className="text-lg font-bold text-navy">Review</h2>
                <p className="mt-3 text-sm leading-6 text-muted">
                  You are applying for <strong>{job.title}</strong>. Submit to
                  send this application to recruiting.
                </p>
                <dl className="mt-6 grid gap-3 text-sm">
                  <div>
                    <dt className="text-slate-500">Name</dt>
                    <dd className="font-medium text-navy">
                      {form.first} {form.last}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-slate-500">Email</dt>
                    <dd className="font-medium text-navy">{form.email}</dd>
                  </div>
                </dl>
              </fieldset>
            )}

            <div className="mt-8 flex justify-between">
              <Button variant="ghost" onClick={back} className={step === 0 ? "invisible" : ""}>
                Back
              </Button>
              <Button type="submit">
                {step === steps.length - 1 ? "Submit application" : "Continue"}
              </Button>
            </div>
          </form>

          <aside className="h-fit rounded-2xl border border-line bg-white p-6">
            <h3 className="font-bold text-navy">Application Progress</h3>
            <ol className="mt-5 space-y-4">
              {steps.map((label, index) => (
                <li key={label} className="flex items-center gap-3 text-sm">
                  <span
                    className={cn(
                      "flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold",
                      index <= step
                        ? "bg-brand text-white"
                        : "bg-slate-100 text-slate-400",
                    )}
                  >
                    {index + 1}
                  </span>
                  {label}
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <label className="text-sm font-medium text-navy">
      {label}
      <input
        type={type}
        required
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-1.5 w-full rounded-lg border border-line px-3 py-2.5"
      />
    </label>
  );
}
