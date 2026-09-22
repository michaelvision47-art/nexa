export function CloudScene() {
  return (
    <div className="relative mx-auto h-[420px] w-full max-w-[520px]">
      <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl" />
      <svg
        viewBox="0 0 520 420"
        className="relative z-10 h-full w-full drop-shadow-2xl"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="cloud" x1="60" y1="80" x2="460" y2="340">
            <stop stopColor="#7ec8ff" />
            <stop offset="0.45" stopColor="#3b82f6" />
            <stop offset="1" stopColor="#1e3a8a" />
          </linearGradient>
          <linearGradient id="panel" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#1d4ed8" />
            <stop offset="1" stopColor="#0ea5e9" />
          </linearGradient>
        </defs>
        <ellipse cx="270" cy="250" rx="170" ry="78" fill="url(#cloud)" opacity="0.95" />
        <ellipse cx="190" cy="210" rx="92" ry="70" fill="#60a5fa" />
        <ellipse cx="330" cy="198" rx="108" ry="82" fill="#93c5fd" />
        <ellipse cx="260" cy="170" rx="74" ry="58" fill="#dbeafe" />
        <path
          d="M120 248c0-40 38-64 86-58 12-38 52-62 96-52 48-40 126-18 138 48 42 8 70 42 62 78-8 40-52 58-128 58H168c-40 0-48-36-48-74Z"
          fill="url(#cloud)"
          opacity="0.55"
        />
        <g transform="translate(70 70)">
          <rect width="86" height="64" rx="14" fill="#0b1f3a" stroke="#60a5fa" />
          <circle cx="24" cy="28" r="10" fill="#38bdf8" />
          <rect x="40" y="20" width="32" height="6" rx="3" fill="#93c5fd" />
          <rect x="40" y="32" width="22" height="6" rx="3" fill="#64748b" />
        </g>
        <g transform="translate(360 54)">
          <rect width="92" height="70" rx="14" fill="#102a4a" stroke="#38bdf8" />
          <path d="M24 42 36 22l12 16 8-8 14 20H20l4-8Z" fill="#38bdf8" />
        </g>
        <g transform="translate(388 210)">
          <rect width="80" height="80" rx="16" fill="#0b1f3a" stroke="#93c5fd" />
          <rect x="18" y="44" width="10" height="18" rx="2" fill="#60a5fa" />
          <rect x="34" y="32" width="10" height="30" rx="2" fill="#3b82f6" />
          <rect x="50" y="20" width="10" height="42" rx="2" fill="#22d3ee" />
        </g>
        <g transform="translate(48 210)">
          <rect width="78" height="78" rx="16" fill="#0b1f3a" stroke="#7dd3fc" />
          <path
            d="M39 18 56 28v20L39 58 22 48V28L39 18Z"
            stroke="#7dd3fc"
            strokeWidth="2.5"
            fill="none"
          />
          <path d="M32 40l5 5 10-12" stroke="#38bdf8" strokeWidth="2.5" />
        </g>
        <g transform="translate(210 300)">
          <rect width="120" height="56" rx="14" fill="#102a4a" stroke="#60a5fa" />
          <circle cx="28" cy="28" r="12" fill="#1d6bff" />
          <rect x="48" y="18" width="52" height="7" rx="3" fill="#cbd5e1" />
          <rect x="48" y="32" width="36" height="7" rx="3" fill="#64748b" />
        </g>
      </svg>
    </div>
  );
}
