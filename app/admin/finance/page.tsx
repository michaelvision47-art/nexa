export default function FinancePage() {
  return (
    <div>
      <h1 className="text-2xl font-extrabold text-navy">Finance</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {[
          ["Revenue YTD", "$18.4M"],
          ["AR outstanding", "$1.2M"],
          ["Gross margin", "41%"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-line bg-white p-5">
            <p className="text-xs text-muted">{label}</p>
            <p className="mt-2 text-2xl font-extrabold text-navy">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
