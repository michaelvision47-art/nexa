"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { company } from "@/lib/data";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <section className="bg-canvas">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1fr_1.1fr] lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-extrabold text-navy">
            Start a project
          </h1>
          <p className="mt-4 max-w-md text-muted">
            Tell us about the platform, product, or operating problem you need
            to solve. A principal will respond within one business day.
          </p>
          <dl className="mt-10 space-y-4 text-sm">
            <div>
              <dt className="font-semibold text-navy">Email</dt>
              <dd className="text-muted">{company.email}</dd>
            </div>
            <div>
              <dt className="font-semibold text-navy">Phone</dt>
              <dd className="text-muted">{company.phone}</dd>
            </div>
            <div>
              <dt className="font-semibold text-navy">Office</dt>
              <dd className="text-muted">{company.address}</dd>
            </div>
          </dl>
        </div>
        <form
          className="rounded-3xl border border-line bg-white p-8 shadow-sm"
          onSubmit={(event) => {
            event.preventDefault();
            setSent(true);
          }}
        >
          {sent ? (
            <div className="py-10 text-center">
              <p className="text-xl font-bold text-navy">Message received.</p>
              <p className="mt-2 text-muted">
                Thanks — we will be in touch shortly.
              </p>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-medium text-navy">
                First name
                <input required className="mt-1.5 w-full rounded-lg border border-line px-3 py-2.5" />
              </label>
              <label className="text-sm font-medium text-navy">
                Last name
                <input required className="mt-1.5 w-full rounded-lg border border-line px-3 py-2.5" />
              </label>
              <label className="text-sm font-medium text-navy sm:col-span-2">
                Work email
                <input type="email" required className="mt-1.5 w-full rounded-lg border border-line px-3 py-2.5" />
              </label>
              <label className="text-sm font-medium text-navy sm:col-span-2">
                Company
                <input className="mt-1.5 w-full rounded-lg border border-line px-3 py-2.5" />
              </label>
              <label className="text-sm font-medium text-navy sm:col-span-2">
                How can we help?
                <textarea
                  rows={5}
                  required
                  className="mt-1.5 w-full rounded-lg border border-line px-3 py-2.5"
                />
              </label>
              <div className="sm:col-span-2">
                <Button type="submit">Send message</Button>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
