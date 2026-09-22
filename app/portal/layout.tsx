import {
  LayoutDashboard,
  FolderKanban,
  Files,
  Receipt,
  LifeBuoy,
  Settings,
} from "lucide-react";
import { PortalShell } from "@/components/layout/PortalShell";

const items = [
  { href: "/portal", label: "Dashboard", icon: <LayoutDashboard size={16} /> },
  { href: "/portal/projects", label: "Projects", icon: <FolderKanban size={16} /> },
  { href: "/portal/files", label: "Files", icon: <Files size={16} /> },
  { href: "/portal/invoices", label: "Invoices", icon: <Receipt size={16} /> },
  { href: "/portal/support", label: "Support", icon: <LifeBuoy size={16} /> },
  { href: "/portal/settings", label: "Settings", icon: <Settings size={16} /> },
];

export default function ClientPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PortalShell
      items={items}
      title="Client Portal"
      user={{ name: "John Hale", role: "Client Admin" }}
    >
      {children}
    </PortalShell>
  );
}
