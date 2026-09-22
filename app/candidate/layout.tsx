"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Briefcase,
  MessageSquare,
  CalendarDays,
  User,
  Settings,
} from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { cn } from "@/lib/utils";

const items = [
  { href: "/candidate", label: "My Applications", icon: Briefcase },
  { href: "/candidate/messages", label: "Messages", icon: MessageSquare },
  { href: "/candidate/interviews", label: "Interviews", icon: CalendarDays },
  { href: "/candidate/profile", label: "Profile", icon: User },
  { href: "/candidate/settings", label: "Settings", icon: Settings },
];

export default function CandidateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-canvas">
      <header className="border-b border-line bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Logo light={false} />
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
            MP
          </div>
        </div>
      </header>
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 lg:grid-cols-[220px_1fr]">
        <aside className="h-fit rounded-2xl border border-line bg-white p-3">
          {items.map((item) => {
            const Icon = item.icon;
            const active =
              item.href === "/candidate"
                ? pathname === "/candidate"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium",
                  active ? "bg-blue-50 text-brand" : "text-slate-600 hover:bg-slate-50",
                )}
              >
                <Icon size={16} />
                {item.label}
              </Link>
            );
          })}
        </aside>
        <div>{children}</div>
      </div>
    </div>
  );
}
