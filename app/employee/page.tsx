import { StatCard } from "@/components/layout/PortalShell";

const schedule = [
  { time: "9:00 AM", title: "Standup · Platform Modernization" },
  { time: "10:30 AM", title: "Client architecture workshop" },
  { time: "1:00 PM", title: "Pairing · payments API" },
  { time: "3:30 PM", title: "Internal tech huddle" },
];

export default function EmployeeDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-navy">Good morning, Sarah</h1>
        <p className="text-sm text-muted">Tuesday, September 22</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Hours this week" value="28.5" />
        <StatCard label="Utilization" value="92%" tone="green" />
        <StatCard label="Open PRs" value="4" tone="amber" />
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-line bg-white p-6">
          <h2 className="font-bold text-navy">Today&apos;s Schedule</h2>
          <ul className="mt-4 space-y-3">
            {schedule.map((item) => (
              <li key={item.title} className="flex gap-4 rounded-xl bg-canvas px-4 py-3">
                <span className="w-20 text-xs font-semibold text-brand">{item.time}</span>
                <span className="text-sm text-navy">{item.title}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-2xl border border-line bg-white p-6">
          <h2 className="font-bold text-navy">My Projects</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="rounded-xl border border-line p-4">
              <p className="font-semibold text-navy">Platform Modernization</p>
              <p className="text-xs text-muted">Lead engineer · 24 hrs this week</p>
            </li>
            <li className="rounded-xl border border-line p-4">
              <p className="font-semibold text-navy">Internal delivery kit</p>
              <p className="text-xs text-muted">Contributor · 4.5 hrs this week</p>
            </li>
          </ul>
          <h3 className="mt-6 font-bold text-navy">Quick Links</h3>
          <div className="mt-3 flex flex-wrap gap-2 text-sm">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-brand">Confluence</span>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-brand">GitHub</span>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-brand">Jira</span>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-brand">Okta</span>
          </div>
        </section>
      </div>
    </div>
  );
}
