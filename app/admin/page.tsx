import { StatCard } from "@/components/layout/PortalShell";

export default function AdminOverviewPage() {
  const bars = [42, 58, 51, 67, 72, 64, 80, 76, 90, 84, 70, 88];
  const donut = 72;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-navy">Welcome, Admin</h1>
        <p className="text-sm text-muted">Firm-wide snapshot for September 2026.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Active clients" value="42" />
        <StatCard label="Delivery staff" value="67" tone="green" />
        <StatCard label="Open roles" value="14" tone="amber" />
        <StatCard label="Billable hours" value="128k" tone="slate" />
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <section className="rounded-2xl border border-line bg-white p-6 lg:col-span-2">
          <h2 className="font-bold text-navy">Utilization by month</h2>
          <div className="mt-6 flex h-44 items-end gap-1.5">
            {bars.map((value, index) => (
              <div
                key={index}
                className="flex-1 rounded-t-md bg-brand"
                style={{ height: `${value}%` }}
              />
            ))}
          </div>
        </section>
        <section className="rounded-2xl border border-line bg-white p-6">
          <h2 className="font-bold text-navy">Bench mix</h2>
          <div className="mt-6 flex items-center justify-center">
            <div
              className="flex h-36 w-36 items-center justify-center rounded-full"
              style={{
                background: `conic-gradient(#1d6bff 0 ${donut}%, #e2e8f0 ${donut}% 100%)`,
              }}
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-lg font-bold text-navy">
                {donut}%
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-muted">Assigned to client work</p>
        </section>
      </div>
      <section className="rounded-2xl border border-line bg-white p-6">
        <h2 className="font-bold text-navy">Revenue trend</h2>
        <svg viewBox="0 0 400 120" preserveAspectRatio="none" className="mt-4 h-28 w-full text-brand">
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            points="0,90 40,80 80,84 120,60 160,55 200,48 240,52 280,30 320,28 360,22 400,18"
          />
        </svg>
      </section>
    </div>
  );
}
