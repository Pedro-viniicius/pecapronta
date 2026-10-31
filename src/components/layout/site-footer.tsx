import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { Container } from "@/components/ui/container";
import { NAV_RODAPE } from "@/lib/nav";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-charcoal text-white/80">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="flex flex-col gap-4">
            <Logo tone="dark" />
            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              Marketplace que conecta marceneiros a empresas especializadas em
              cortar, usinar, identificar, embalar e entregar peças prontas para
              montagem.
            </p>
            <p className="text-xs text-white/40">
              Versão demonstrativa (frontend). Dados e empresas exibidos são
              ilustrativos.
            </p>
          </div>

          {NAV_RODAPE.map((grupo) => (
            <nav key={grupo.titulo} aria-label={grupo.titulo}>
              <h2 className="text-sm font-semibold text-white">{grupo.titulo}</h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {grupo.itens.map((item) => (
                  <li key={item.href + item.rotulo}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
                    >
                      {item.rotulo}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} PeçaPronta · Protótipo de demonstração.</p>
          <p>
            Contato:{" "}
            <span className="text-white/70">
              a definir na configuração do projeto
            </span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
