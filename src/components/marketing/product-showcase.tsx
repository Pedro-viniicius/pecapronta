import { Star, Truck } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatarReal, formatarPrazo } from "@/lib/utils";
import { PROPOSTAS } from "@/data/propostas";
import { Badge } from "@/components/ui/badge";

/**
 * Mockup do produto (não decorativo): simula o painel de um projeto com
 * propostas recebidas e o andamento da produção. Usado no hero.
 */
export function ProductShowcase({ className }: { className?: string }) {
  const etapas = ["Aprovado", "Plano de corte", "Produção", "Entrega"];
  const etapaAtual = 2;

  return (
    <div className={cn("relative", className)}>
      <div
        aria-hidden="true"
        className="absolute -inset-4 -z-10 rounded-3xl bg-grid opacity-60 [mask-image:radial-gradient(closest-side,black,transparent)]"
      />
      <div className="overflow-hidden rounded-xl border border-line bg-white shadow-2xl shadow-navy/10">
        {/* Barra de janela */}
        <div className="flex items-center gap-2 border-b border-line bg-bg-soft px-4 py-2.5">
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
          <span className="ml-2 font-mono text-xs text-muted-foreground">
            pecapronta · painel do projeto
          </span>
        </div>

        <div className="flex flex-col gap-4 p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Projeto PRJ-1041
              </p>
              <h3 className="text-base font-semibold text-charcoal">
                Guarda-roupa de casal — Suíte
              </h3>
              <p className="mt-0.5 text-xs text-muted-foreground">
                MDF · Melamínico · São Paulo, SP
              </p>
            </div>
            <Badge tom="info" ponto>
              Propostas recebidas
            </Badge>
          </div>

          <div className="flex items-center justify-between text-xs">
            <span className="font-medium text-charcoal">
              3 propostas de parceiros
            </span>
            <span className="text-muted-foreground">Compare e escolha</span>
          </div>

          <ul className="flex flex-col gap-2">
            {PROPOSTAS.map((p) => (
              <li
                key={p.id}
                className={cn(
                  "flex items-center justify-between gap-3 rounded-lg border px-3 py-2.5",
                  p.recomendada
                    ? "border-red/30 bg-red/5"
                    : "border-line bg-white",
                )}
              >
                <div className="min-w-0">
                  <p className="flex items-center gap-1.5 truncate text-sm font-medium text-charcoal">
                    {p.parceiro}
                    {p.recomendada && (
                      <span className="inline-flex items-center gap-0.5 rounded-full bg-red/10 px-1.5 py-px text-[10px] font-semibold text-red-dark">
                        <Star className="size-2.5 fill-current" />
                        recomendada
                      </span>
                    )}
                  </p>
                  <p className="truncate text-xs text-muted-foreground">
                    {formatarPrazo(p.prazoDias)} · {p.cidade}
                  </p>
                </div>
                <span className="shrink-0 font-mono text-sm font-semibold text-charcoal">
                  {formatarReal(p.valor)}
                </span>
              </li>
            ))}
          </ul>

          {/* Andamento da produção */}
          <div className="rounded-lg border border-line bg-bg-soft/70 p-3">
            <div className="mb-2 flex items-center gap-1.5 text-xs font-medium text-charcoal">
              <Truck className="size-3.5 text-deep-blue" />
              Andamento da produção
            </div>
            <ol className="flex items-center">
              {etapas.map((etapa, i) => (
                <li key={etapa} className="flex flex-1 items-center last:flex-none">
                  <div className="flex flex-col items-center gap-1">
                    <span
                      className={cn(
                        "size-3 rounded-full",
                        i <= etapaAtual ? "bg-deep-blue" : "bg-line",
                      )}
                    />
                    <span
                      className={cn(
                        "whitespace-nowrap text-[10px]",
                        i <= etapaAtual
                          ? "font-medium text-charcoal"
                          : "text-muted-foreground",
                      )}
                    >
                      {etapa}
                    </span>
                  </div>
                  {i < etapas.length - 1 && (
                    <span
                      className={cn(
                        "mx-1 mb-4 h-px flex-1",
                        i < etapaAtual ? "bg-deep-blue" : "bg-line",
                      )}
                    />
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
