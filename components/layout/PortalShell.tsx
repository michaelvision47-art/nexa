"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Search } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { cn } from "@/lib/utils";

export type NavItem = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

export function PortalShell({
  items,
  title,
  user,
  children,
}: {
  items: NavItem[];
  title: string;
  user: { name: string; role: string };
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-canvas">
      <aside className="hidden w-[240px] shrink-0 flex-col bg-navy text-slate-300 lg:flex">
        <div className="flex h-[72px] items-center px-5">
          <Logo />
        </div>
        <nav className="flex-1 space-y-1 px-3 py-4">
          {items.map((item) => {
            const active =
              item.href === items[0].href
                ? pathname === item.href
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium",
                  active ? "bg-white/10 text-white" : "hover:bg-white/5 hover:text-white",
                )}
              >
                {item.icon}
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-white/10 p-4 text-xs text-slate-400">
          Signed in as {user.name}
        </div>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-[72px] items-center justify-between border-b border-line bg-white px-5 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              {title}
            </p>
            <div className="relative mt-1 hidden sm:block">
              <Search
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                placeholder="Search"
                className="h-9 w-72 rounded-lg border border-line bg-canvas pl-9 text-sm"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-full p-2 text-slate-500 hover:bg-slate-100">
              <Bell size={18} />
            </button>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                {user.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-navy">{user.name}</p>
                <p className="text-xs text-muted">{user.role}</p>
              </div>
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-auto p-5 lg:p-8">{children}</div>
      </div>
    </div>
  );
}

export function StatCard({
  label,
  value,
  hint,
  tone = "blue",
}: {
  label: string;
  value: string;
  hint?: string;
  tone?: "blue" | "green" | "amber" | "slate";
}) {
  const tones = {
    blue: "text-brand",
    green: "text-emerald-600",
    amber: "text-amber-600",
    slate: "text-slate-700",
  };
  return (
    <div className="rounded-2xl border border-line bg-white p-5">
      <p className="text-xs font-medium text-muted">{label}</p>
      <p className={cn("mt-2 text-3xl font-extrabold", tones[tone])}>{value}</p>
      {hint && <p className="mt-1 text-xs text-slate-400">{hint}</p>}
    </div>
  );
}

export function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-2 overflow-hidden rounded-full bg-slate-100">
      <div className="h-full rounded-full bg-brand" style={{ width: `${value}%` }} />
    </div>
  );
}
