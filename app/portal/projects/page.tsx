import Link from "next/link";
import { ProgressBar } from "@/components/layout/PortalShell";
import { clientProjects } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-2xl font-extrabold text-navy">Projects</h1>
      <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-canvas text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-5 py-3 font-medium">Project</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Progress</th>
              <th className="px-5 py-3 font-medium">Due</th>
            </tr>
          </thead>
          <tbody>
            {clientProjects.map((project) => (
              <tr key={project.id} className="border-t border-line">
                <td className="px-5 py-4">
                  <Link href={`/portal/projects/${project.id}`} className="font-semibold text-navy hover:text-brand">
                    {project.name}
                  </Link>
                  <p className="text-xs text-muted">{project.manager}</p>
                </td>
                <td className="px-5 py-4">
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-1 text-xs font-semibold",
                      project.health === "risk"
                        ? "bg-amber-50 text-amber-700"
                        : "bg-emerald-50 text-emerald-700",
                    )}
                  >
                    {project.status}
                  </span>
                </td>
                <td className="px-5 py-4 w-56">
                  <ProgressBar value={project.progress} />
                </td>
                <td className="px-5 py-4 text-muted">{project.due}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
