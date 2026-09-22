import {
  LayoutDashboard,
  Users,
  FolderKanban,
  Briefcase,
  LineChart,
  Settings,
} from "lucide-react";
import { PortalShell } from "@/components/layout/PortalShell";

const items = [
  { href: "/admin", label: "Overview", icon: <LayoutDashboard size={16} /> },
  { href: "/admin/users", label: "Users", icon: <Users size={16} /> },
  { href: "/admin/projects", label: "Projects", icon: <FolderKanban size={16} /> },
  { href: "/admin/recruiting", label: "Recruiting", icon: <Briefcase size={16} /> },
  { href: "/admin/finance", label: "Finance", icon: <LineChart size={16} /> },
  { href: "/admin/settings", label: "Settings", icon: <Settings size={16} /> },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PortalShell
      items={items}
      title="Admin Portal"
      user={{ name: "Alex Rivera", role: "Operations Admin" }}
    >
      {children}
    </PortalShell>
  );
}
