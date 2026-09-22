import {
  LayoutDashboard,
  FolderKanban,
  Timer,
  Users,
  HeartPulse,
  Settings,
} from "lucide-react";
import { PortalShell } from "@/components/layout/PortalShell";

const items = [
  { href: "/employee", label: "My Work", icon: <LayoutDashboard size={16} /> },
  { href: "/employee/projects", label: "Projects", icon: <FolderKanban size={16} /> },
  { href: "/employee/timesheet", label: "Timesheet", icon: <Timer size={16} /> },
  { href: "/employee/directory", label: "Directory", icon: <Users size={16} /> },
  { href: "/employee/benefits", label: "Benefits", icon: <HeartPulse size={16} /> },
  { href: "/employee/settings", label: "Settings", icon: <Settings size={16} /> },
];

export default function EmployeeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PortalShell
      items={items}
      title="Employee Portal"
      user={{ name: "Sarah Chen", role: "Senior Engineer" }}
    >
      {children}
    </PortalShell>
  );
}
