import { DashboardShell } from "@/components/layout/dashboard-shell";

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return <DashboardShell>{children}</DashboardShell>;
}
