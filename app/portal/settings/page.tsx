export default function PortalSettingsPage() {
  return (
    <div className="max-w-xl rounded-2xl border border-line bg-white p-6">
      <h1 className="text-2xl font-extrabold text-navy">Settings</h1>
      <p className="mt-2 text-sm text-muted">
        Notification and user preferences for the client portal.
      </p>
      <div className="mt-6 space-y-4 text-sm">
        <label className="flex items-center justify-between">
          Email weekly status
          <input type="checkbox" defaultChecked className="accent-brand" />
        </label>
        <label className="flex items-center justify-between">
          Invoice alerts
          <input type="checkbox" defaultChecked className="accent-brand" />
        </label>
        <label className="flex items-center justify-between">
          Risk notifications
          <input type="checkbox" defaultChecked className="accent-brand" />
        </label>
      </div>
    </div>
  );
}
