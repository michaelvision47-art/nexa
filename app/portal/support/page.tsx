"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export default function SupportPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-extrabold text-navy">Support</h1>
      <p className="mt-2 text-sm text-muted">
        Open a ticket with your engagement team.
      </p>
      {sent ? (
        <p className="mt-8 rounded-2xl border border-line bg-white p-6">
          Ticket submitted. We will respond during business hours.
        </p>
      ) : (
        <form
          className="mt-6 space-y-4 rounded-2xl border border-line bg-white p-6"
          onSubmit={(event) => {
            event.preventDefault();
            setSent(true);
          }}
        >
          <label className="block text-sm font-medium">
            Subject
            <input required className="mt-1.5 w-full rounded-lg border border-line px-3 py-2.5" />
          </label>
          <label className="block text-sm font-medium">
            Details
            <textarea required rows={5} className="mt-1.5 w-full rounded-lg border border-line px-3 py-2.5" />
          </label>
          <Button type="submit">Submit ticket</Button>
        </form>
      )}
    </div>
  );
}
