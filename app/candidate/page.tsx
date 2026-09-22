import Link from "next/link";
import { applications } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function CandidateHomePage() {
  return (
    <div className="rounded-2xl border border-line bg-white p-6">
      <h1 className="text-xl font-extrabold text-navy">My Applications</h1>
      <p className="mt-1 text-sm text-muted">
        Track open roles and interview status.
      </p>
      <ul className="mt-6 space-y-3">
        {applications.map((app) => (
          <li
            key={app.slug}
            className="flex flex-col gap-3 rounded-xl border border-line px-4 py-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <Link
                href={`/careers/jobs/${app.slug}`}
                className="font-semibold text-navy hover:text-brand"
              >
                {app.role}
              </Link>
              <p className="text-xs text-muted">Applied {app.applied}</p>
            </div>
            <span
              className={cn(
                "w-fit rounded-full px-3 py-1 text-xs font-semibold",
                app.tone === "green" && "bg-emerald-50 text-emerald-700",
                app.tone === "blue" && "bg-blue-50 text-blue-700",
                app.tone === "amber" && "bg-amber-50 text-amber-700",
                app.tone === "red" && "bg-rose-50 text-rose-700",
              )}
            >
              {app.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
