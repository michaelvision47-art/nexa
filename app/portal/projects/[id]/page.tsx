import { notFound } from "next/navigation";
import { ProgressBar } from "@/components/layout/PortalShell";
import { clientProjects } from "@/lib/data";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = clientProjects.find((item) => item.id === id);
  if (!project) notFound();

  const milestones = [
    { name: "Discovery", date: "Jan 2026", done: true },
    { name: "Architecture", date: "Mar 2026", done: true },
    { name: "Wave 1 go-live", date: "Jul 2026", done: true },
    { name: "Wave 2 cutover", date: "Oct 2026", done: false },
    { name: "Hypercare", date: "Nov 2026", done: false },
  ];

  const documents = [
    { name: "Program charter.pdf", size: "1.2 MB" },
    { name: "Architecture decision log.xlsx", size: "840 KB" },
    { name: "Wave 1 runbook.docx", size: "2.1 MB" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs text-muted">Projects</p>
        <h1 className="text-2xl font-extrabold text-navy">{project.name}</h1>
        <p className="mt-1 max-w-2xl text-sm text-muted">{project.description}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-line bg-white p-5">
          <p className="text-xs text-muted">Progress</p>
          <p className="mt-2 text-3xl font-extrabold text-brand">{project.progress}%</p>
          <div className="mt-3">
            <ProgressBar value={project.progress} />
          </div>
        </div>
        <div className="rounded-2xl border border-line bg-white p-5">
          <p className="text-xs text-muted">Budget Utilization</p>
          <p className="mt-2 text-3xl font-extrabold text-navy">{project.budgetUsed}%</p>
          <div className="mt-3">
            <ProgressBar value={project.budgetUsed} />
          </div>
        </div>
        <div className="rounded-2xl border border-line bg-white p-5">
          <p className="text-xs text-muted">Engagement manager</p>
          <p className="mt-2 text-lg font-bold text-navy">{project.manager}</p>
          <p className="text-xs text-muted">
            {project.start} – {project.due}
          </p>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-line bg-white p-6">
          <h2 className="font-bold text-navy">Timeline</h2>
          <ol className="mt-4 space-y-4">
            {milestones.map((item) => (
              <li key={item.name} className="flex items-center justify-between text-sm">
                <span className={item.done ? "text-navy" : "text-muted"}>{item.name}</span>
                <span className="text-xs text-slate-400">{item.date}</span>
              </li>
            ))}
          </ol>
        </section>
        <section className="rounded-2xl border border-line bg-white p-6">
          <h2 className="font-bold text-navy">Documents</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {documents.map((doc) => (
              <li key={doc.name} className="flex items-center justify-between rounded-lg bg-canvas px-3 py-3">
                <span className="font-medium text-navy">{doc.name}</span>
                <span className="text-xs text-muted">{doc.size}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
