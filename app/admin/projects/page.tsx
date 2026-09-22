import { clientProjects } from "@/lib/data";
import { ProgressBar } from "@/components/layout/PortalShell";

export default function AdminProjectsPage() {
  return (
    <div>
      <h1 className="text-2xl font-extrabold text-navy">Projects</h1>
      <div className="mt-6 space-y-4">
        {clientProjects.map((project) => (
          <article key={project.id} className="rounded-2xl border border-line bg-white p-5">
            <div className="flex items-center justify-between">
              <p className="font-bold text-navy">{project.name}</p>
              <span className="text-sm text-muted">{project.status}</span>
            </div>
            <div className="mt-3">
              <ProgressBar value={project.progress} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
