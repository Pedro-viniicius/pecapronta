import Link from "next/link";
import { ArrowLeft, Factory, LayoutDashboard, UserRound } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-bg-soft">
      <aside className="fixed inset-y-0 left-0 hidden w-72 border-r border-line bg-charcoal p-6 text-white lg:block">
        <Logo tone="light" />
        <nav className="mt-10 space-y-2" aria-label="Navegação demonstrativa">
          {[
            ["Visão geral", LayoutDashboard],
            ["Projetos", UserRound],
            ["Produção", Factory],
          ].map(([rotulo, Icon]) => (
            <span
              key={String(rotulo)}
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-white/78"
            >
              <Icon className="size-4" aria-hidden="true" />
              {String(rotulo)}
            </span>
          ))}
        </nav>
        <Button asChild variant="outline-light" className="mt-10 w-full">
          <Link href="/">
            <ArrowLeft aria-hidden="true" />
            Voltar ao site
          </Link>
        </Button>
      </aside>
      <div className="lg:pl-72">
        <header className="sticky top-0 z-30 border-b border-line bg-white/90 px-4 py-3 backdrop-blur lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <div className="lg:hidden">
              <Logo />
            </div>
            <p className="hidden text-sm text-muted-foreground lg:block">
              Ambiente demonstrativo com dados simulados.
            </p>
            <Button asChild variant="outline" size="sm">
              <Link href="/">Voltar ao site</Link>
            </Button>
          </div>
        </header>
        <main className="px-4 py-8 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
