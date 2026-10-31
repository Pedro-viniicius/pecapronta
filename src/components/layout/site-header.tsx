"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_PRINCIPAL } from "@/lib/nav";
import { Logo } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import { BotaoPreparacao } from "@/components/feedback/botao-preparacao";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

// Links informativos no cabeçalho (o CTA "Solicitar orçamento" vira botão).
const LINKS_CABECALHO = NAV_PRINCIPAL.filter(
  (i) => i.href !== "/" && i.href !== "/solicitar-orcamento",
);

function ativo(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [aberto, setAberto] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {LINKS_CABECALHO.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={ativo(pathname, item.href) ? "page" : undefined}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    ativo(pathname, item.href)
                      ? "text-deep-blue"
                      : "text-muted-foreground hover:text-charcoal",
                  )}
                >
                  {item.rotulo}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <BotaoPreparacao variant="ghost" size="sm">
            Entrar
          </BotaoPreparacao>
          <Button asChild variant="accent" size="sm">
            <Link href="/solicitar-orcamento">Solicitar orçamento</Link>
          </Button>
        </div>

        {/* Menu mobile */}
        <div className="lg:hidden">
          <Drawer open={aberto} onOpenChange={setAberto}>
            <DrawerTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Abrir menu">
                <Menu className="size-5" />
              </Button>
            </DrawerTrigger>
            <DrawerContent tituloAcessivel="Menu de navegação">
              <div className="flex h-16 items-center border-b border-line px-5">
                <Logo />
              </div>
              <nav
                aria-label="Navegação principal (mobile)"
                className="flex-1 overflow-y-auto p-4"
              >
                <ul className="flex flex-col gap-1">
                  {NAV_PRINCIPAL.map((item) => (
                    <li key={item.href}>
                      <DrawerClose asChild>
                        <Link
                          href={item.href}
                          aria-current={
                            ativo(pathname, item.href) ? "page" : undefined
                          }
                          className={cn(
                            "block rounded-md px-3 py-2.5 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                            ativo(pathname, item.href)
                              ? "bg-bg-soft text-deep-blue"
                              : "text-charcoal hover:bg-bg-soft",
                          )}
                        >
                          {item.rotulo}
                        </Link>
                      </DrawerClose>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="flex flex-col gap-2 border-t border-line p-4">
                <Button asChild variant="accent" size="lg">
                  <Link href="/solicitar-orcamento" onClick={() => setAberto(false)}>
                    Solicitar orçamento
                  </Link>
                </Button>
                <div className="flex gap-2">
                  <BotaoPreparacao variant="outline" className="flex-1">
                    Entrar
                  </BotaoPreparacao>
                  <BotaoPreparacao variant="secondary" className="flex-1">
                    Criar conta
                  </BotaoPreparacao>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
}
