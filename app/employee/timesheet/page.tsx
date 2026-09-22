const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

export default function TimesheetPage() {
  return (
    <div>
      <h1 className="text-2xl font-extrabold text-navy">Timesheet</h1>
      <p className="text-sm text-muted">Week of Sep 21, 2026</p>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-line bg-white">
        <table className="w-full min-w-[640px] text-sm">
          <thead className="bg-canvas text-xs uppercase text-slate-500">
            <tr>
              <th className="px-4 py-3 text-left">Code</th>
              {days.map((day) => (
                <th key={day} className="px-4 py-3">
                  {day}
                </th>
              ))}
              <th className="px-4 py-3">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-line">
              <td className="px-4 py-3 font-medium">Platform Modernization</td>
              {[8, 8, 6, 8, 4].map((hours, index) => (
                <td key={index} className="px-4 py-3 text-center">
                  {hours}
                </td>
              ))}
              <td className="px-4 py-3 text-center font-bold">34</td>
            </tr>
            <tr className="border-t border-line">
              <td className="px-4 py-3 font-medium">Internal</td>
              {[0, 0, 2, 0, 2].map((hours, index) => (
                <td key={index} className="px-4 py-3 text-center">
                  {hours}
                </td>
              ))}
              <td className="px-4 py-3 text-center font-bold">4</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
