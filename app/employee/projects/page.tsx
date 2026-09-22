export default function EmployeeProjectsPage() {
  return (
    <div>
      <h1 className="text-2xl font-extrabold text-navy">Projects</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {[
          ["Platform Modernization", "Northshore Capital", "Lead"],
          ["Internal delivery kit", "NEXABLOOM", "Contributor"],
        ].map(([name, client, role]) => (
          <article key={name} className="rounded-2xl border border-line bg-white p-5">
            <p className="font-bold text-navy">{name}</p>
            <p className="mt-1 text-sm text-muted">
              {client} · {role}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
