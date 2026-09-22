export default function CandidateSettingsPage() {
  return (
    <div className="rounded-2xl border border-line bg-white p-6">
      <h1 className="text-xl font-extrabold text-navy">Settings</h1>
      <label className="mt-6 flex items-center justify-between text-sm">
        Email application updates
        <input type="checkbox" defaultChecked className="accent-brand" />
      </label>
    </div>
  );
}
