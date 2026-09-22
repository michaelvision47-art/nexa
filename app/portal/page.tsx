import Link from "next/link";
import { ProgressBar, StatCard } from "@/components/layout/PortalShell";
import { clientProjects } from "@/lib/data";

const activity = [
  { title: "Sprint 24 demo scheduled", time: "2 hours ago", meta: "Platform Modernization" },
  { title: "Architecture review completed", time: "Yesterday", meta: "Data Foundation" },
  { title: "Invoice #1842 approved", time: "2 days ago", meta: "Finance" },
  { title: "UAT environment refreshed", time: "3 days ago", meta: "Customer Portal" },
];

export default function ClientDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-navy">Good morning, John</h1>
        <p className="text-sm text-muted">Here is the latest across your NEXABLOOM programs.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Active Projects" value="8" />
        <StatCard label="In Progress" value="3" tone="green" />
        <StatCard label="At Risk" value="2" tone="amber" />
        <StatCard label="Completed" value="24" tone="slate" />
      </div>
      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <section className="rounded-2xl border border-line bg-white p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-bold text-navy">Project Overview</h2>
            <Link href="/portal/projects" className="text-sm font-semibold text-brand">
              View all
            </Link>
          </div>
          <div className="space-y-5">
            {clientProjects.map((project) => (
              <Link
                key={project.id}
                href={`/portal/projects/${project.id}`}
                className="block rounded-xl border border-line p-4 hover:border-brand/40"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-navy">{project.name}</p>
                    <p className="text-xs text-muted">{project.status}</p>
                  </div>
                  <span className="text-sm font-bold text-brand">{project.progress}%</span>
                </div>
                <div className="mt-3">
                  <ProgressBar value={project.progress} />
                </div>
              </Link>
            ))}
          </div>
        </section>
        <section className="rounded-2xl border border-line bg-white p-6">
          <h2 className="font-bold text-navy">Recent Activity</h2>
          <ul className="mt-4 space-y-4">
            {activity.map((item) => (
              <li key={item.title} className="border-b border-line pb-4 last:border-0">
                <p className="text-sm font-medium text-navy">{item.title}</p>
                <p className="text-xs text-muted">
                  {item.meta} · {item.time}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
