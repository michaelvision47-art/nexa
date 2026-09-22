const people = [
  ["Priya Shah", "Engagement Manager"],
  ["Marcus Hale", "Principal Architect"],
  ["Elena Voss", "Product Lead"],
  ["Daniel Cho", "Data Engineer"],
];

export default function DirectoryPage() {
  return (
    <div>
      <h1 className="text-2xl font-extrabold text-navy">Directory</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {people.map(([name, role]) => (
          <article key={name} className="flex items-center gap-3 rounded-2xl border border-line bg-white p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
              {name.split(" ").map((part) => part[0]).join("")}
            </div>
            <div>
              <p className="font-semibold text-navy">{name}</p>
              <p className="text-xs text-muted">{role}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
