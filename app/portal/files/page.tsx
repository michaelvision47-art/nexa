const files = [
  { name: "Q3 steering pack.pptx", project: "Platform Modernization", date: "Sep 18, 2026" },
  { name: "Security questionnaire.xlsx", project: "Data Foundation", date: "Sep 12, 2026" },
  { name: "UAT scripts.pdf", project: "Customer Portal", date: "Sep 4, 2026" },
  { name: "SOW amendment.pdf", project: "Platform Modernization", date: "Aug 29, 2026" },
];

export default function FilesPage() {
  return (
    <div>
      <h1 className="text-2xl font-extrabold text-navy">Files</h1>
      <div className="mt-6 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
        {files.map((file) => (
          <div key={file.name} className="flex items-center justify-between px-5 py-4">
            <div>
              <p className="font-medium text-navy">{file.name}</p>
              <p className="text-xs text-muted">{file.project}</p>
            </div>
            <p className="text-xs text-muted">{file.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
