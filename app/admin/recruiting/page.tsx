import { applications } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function RecruitingPage() {
  return (
    <div>
      <h1 className="text-2xl font-extrabold text-navy">Recruiting</h1>
      <div className="mt-6 space-y-3">
        {applications.map((app) => (
          <article key={app.role} className="flex items-center justify-between rounded-2xl border border-line bg-white p-4">
            <div>
              <p className="font-semibold text-navy">{app.role}</p>
              <p className="text-xs text-muted">Applied {app.applied}</p>
            </div>
            <span
              className={cn(
                "rounded-full px-3 py-1 text-xs font-semibold",
                app.tone === "green" && "bg-emerald-50 text-emerald-700",
                app.tone === "blue" && "bg-blue-50 text-blue-700",
                app.tone === "amber" && "bg-amber-50 text-amber-700",
                app.tone === "red" && "bg-rose-50 text-rose-700",
              )}
            >
              {app.status}
            </span>
          </article>
        ))}
      </div>
    </div>
  );
}
