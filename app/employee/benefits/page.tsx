export default function BenefitsPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-extrabold text-navy">Benefits</h1>
      <ul className="mt-6 space-y-3">
        {[
          "Medical, dental, and vision — open enrollment each November",
          "401(k) with 4% match",
          "$2,500 annual learning stipend",
          "Flexible time off, observed US holidays",
          "Home office stipend for remote employees",
        ].map((item) => (
          <li key={item} className="rounded-2xl border border-line bg-white p-4 text-sm">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
