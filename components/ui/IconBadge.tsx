import {
  BookOpen,
  Cloud,
  Code2,
  Database,
  Globe2,
  Layers,
  LayoutGrid,
  RefreshCw,
  Shield,
  Sparkles,
  Workflow,
  Clock3,
} from "lucide-react";
import { cn } from "@/lib/utils";

const map = {
  cloud: Cloud,
  code: Code2,
  spark: Sparkles,
  data: Database,
  shield: Shield,
  cycle: RefreshCw,
  layers: Layers,
  globe: Globe2,
  grid: LayoutGrid,
  workflow: Workflow,
  book: BookOpen,
  clock: Clock3,
};

const tints: Record<string, string> = {
  blue: "bg-blue-50 text-brand",
  indigo: "bg-indigo-50 text-indigo-600",
  violet: "bg-violet-50 text-violet-600",
  teal: "bg-teal-50 text-teal-600",
  sky: "bg-sky-50 text-sky-600",
  cyan: "bg-cyan-50 text-cyan-600",
  navy: "bg-white/10 text-white",
};

export function IconBadge({
  name,
  tint = "blue",
  size = "md",
}: {
  name: keyof typeof map;
  tint?: keyof typeof tints | string;
  size?: "sm" | "md" | "lg";
}) {
  const Icon = map[name] ?? Sparkles;
  const box =
    size === "lg" ? "h-14 w-14" : size === "sm" ? "h-9 w-9" : "h-11 w-11";
  const icon = size === "lg" ? 24 : size === "sm" ? 16 : 20;

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-xl",
        box,
        tints[tint] ?? tints.blue,
      )}
    >
      <Icon size={icon} strokeWidth={1.8} />
    </span>
  );
}
