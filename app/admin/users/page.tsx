const users = [
  ["John Hale", "Client", "Northshore Capital"],
  ["Sarah Chen", "Employee", "Engineering"],
  ["Alex Rivera", "Admin", "Operations"],
  ["Maya Patel", "Candidate", "Recruiting"],
];

export default function AdminUsersPage() {
  return (
    <div>
      <h1 className="text-2xl font-extrabold text-navy">Users</h1>
      <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-canvas text-xs uppercase text-slate-500">
            <tr>
              <th className="px-5 py-3">Name</th>
              <th className="px-5 py-3">Role</th>
              <th className="px-5 py-3">Org</th>
            </tr>
          </thead>
          <tbody>
            {users.map(([name, role, org]) => (
              <tr key={name} className="border-t border-line">
                <td className="px-5 py-4 font-medium text-navy">{name}</td>
                <td className="px-5 py-4">{role}</td>
                <td className="px-5 py-4 text-muted">{org}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
