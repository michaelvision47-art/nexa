import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  light = true,
  compact = false,
}: {
  light?: boolean;
  compact?: boolean;
}) {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M16 2.5 28.5 9.4v13.2L16 29.5 3.5 22.6V9.4L16 2.5Z"
          fill="#1d6bff"
        />
        <path
          d="M16 7.2 23.4 11.4v8.2L16 23.8 8.6 19.6v-8.2L16 7.2Z"
          fill="#071526"
          opacity="0.28"
        />
        <path
          d="M16 10.4 20.8 13.1v5.3L16 20.9 11.2 18.4v-5.3L16 10.4Z"
          fill="white"
        />
      </svg>
      {!compact && (
        <span
          className={cn(
            "text-[15px] font-extrabold tracking-[0.14em]",
            light ? "text-white" : "text-navy",
          )}
        >
          NEXABLOOM
        </span>
      )}
    </Link>
  );
}
