const invoices = [
  { id: "INV-1842", period: "August 2026", amount: "$186,400", status: "Paid" },
  { id: "INV-1851", period: "September 2026", amount: "$192,150", status: "Due" },
  { id: "INV-1810", period: "July 2026", amount: "$174,900", status: "Paid" },
];

export default function InvoicesPage() {
  return (
    <div>
      <h1 className="text-2xl font-extrabold text-navy">Invoices</h1>
      <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-canvas text-xs uppercase text-slate-500">
            <tr>
              <th className="px-5 py-3">Invoice</th>
              <th className="px-5 py-3">Period</th>
              <th className="px-5 py-3">Amount</th>
              <th className="px-5 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id} className="border-t border-line">
                <td className="px-5 py-4 font-semibold text-navy">{invoice.id}</td>
                <td className="px-5 py-4 text-muted">{invoice.period}</td>
                <td className="px-5 py-4">{invoice.amount}</td>
                <td className="px-5 py-4">{invoice.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
