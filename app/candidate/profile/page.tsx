export default function CandidateProfilePage() {
  return (
    <div className="rounded-2xl border border-line bg-white p-6">
      <h1 className="text-xl font-extrabold text-navy">Profile</h1>
      <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
        <div>
          <dt className="text-muted">Name</dt>
          <dd className="font-medium">Maya Patel</dd>
        </div>
        <div>
          <dt className="text-muted">Email</dt>
          <dd className="font-medium">maya.patel@email.com</dd>
        </div>
        <div>
          <dt className="text-muted">Location</dt>
          <dd className="font-medium">Brooklyn, NY</dd>
        </div>
        <div>
          <dt className="text-muted">Target roles</dt>
          <dd className="font-medium">.NET, Data Engineering</dd>
        </div>
      </dl>
    </div>
  );
}
