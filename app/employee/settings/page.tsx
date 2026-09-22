export default function EmployeeSettingsPage() {
  return (
    <div className="max-w-xl rounded-2xl border border-line bg-white p-6">
      <h1 className="text-2xl font-extrabold text-navy">Settings</h1>
      <p className="mt-2 text-sm text-muted">Calendar sync and notification preferences.</p>
      <label className="mt-6 flex items-center justify-between text-sm">
        Slack digest
        <input type="checkbox" defaultChecked className="accent-brand" />
      </label>
    </div>
  );
}
