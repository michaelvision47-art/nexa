export default function AdminSettingsPage() {
  return (
    <div className="max-w-xl rounded-2xl border border-line bg-white p-6">
      <h1 className="text-2xl font-extrabold text-navy">Settings</h1>
      <p className="mt-2 text-sm text-muted">
        SSO, audit log retention, and environment flags.
      </p>
    </div>
  );
}
