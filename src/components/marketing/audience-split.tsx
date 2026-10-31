import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Icone } from "@/components/ui/icone";
import { Button } from "@/components/ui/button";
import {
  BENEFICIOS_MARCENEIRO,
  BENEFICIOS_PARCEIRO,
  type ItemConteudo,
} from "@/lib/conteudo";

interface Publico {
  eyebrow: string;
  icone: string;
  titulo: string;
  descricao: string;
  itens: ItemConteudo[];
  cta: { rotulo: string; href: string };
  destaque?: boolean;
}

const publicos: Publico[] = [
  {
    eyebrow: "Para marceneiros",
    icone: "Hammer",
    titulo: "Produza mais, sem investir em máquinas",
    descricao:
      "Envie o projeto e contrate parceiros para cortar, processar e entregar as peças.",
    itens: BENEFICIOS_MARCENEIRO.slice(0, 4),
    cta: { rotulo: "Solicitar orçamento", href: "/solicitar-orcamento" },
    destaque: true,
  },
  {
    eyebrow: "Para parceiros de produção",
    icone: "Factory",
    titulo: "Receba oportunidades qualificadas",
    descricao:
      "Apresente serviços e capacidade e ocupe suas máquinas com demandas alinhadas.",
    itens: BENEFICIOS_PARCEIRO.slice(0, 4),
    cta: { rotulo: "Quero receber oportunidades", href: "/para-parceiros" },
  },
];

/** Dois públicos lado a lado — distinção clara entre marceneiro e parceiro. */
export function AudienceSplit() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {publicos.map((p) => (
        <div
          key={p.eyebrow}
          className={cn(
            "flex flex-col gap-5 rounded-2xl border p-7",
            p.destaque
              ? "border-navy/15 bg-navy text-white"
              : "border-line bg-white",
          )}
        >
          <div className="flex items-center gap-3">
            <span
              className={cn(
                "flex size-11 items-center justify-center rounded-lg",
                p.destaque ? "bg-white/10 text-white" : "bg-deep-blue/10 text-deep-blue",
              )}
            >
              <Icone nome={p.icone} className="size-5" aria-hidden="true" />
            </span>
            <span
              className={cn(
                "text-xs font-semibold uppercase tracking-[0.14em]",
                p.destaque ? "text-red" : "text-red-dark",
              )}
            >
              {p.eyebrow}
            </span>
          </div>

          <div>
            <h3
              className={cn(
                "text-xl font-bold",
                p.destaque ? "text-white" : "text-charcoal",
              )}
            >
              {p.titulo}
            </h3>
            <p
              className={cn(
                "mt-2 text-sm leading-relaxed",
                p.destaque ? "text-white/70" : "text-muted-foreground",
              )}
            >
              {p.descricao}
            </p>
          </div>

          <ul className="flex flex-col gap-2.5">
            {p.itens.map((item) => (
              <li key={item.titulo} className="flex items-start gap-2.5">
                <Check
                  className={cn(
                    "mt-0.5 size-4 shrink-0",
                    p.destaque ? "text-red" : "text-emerald-600",
                  )}
                  aria-hidden="true"
                />
                <span
                  className={cn(
                    "text-sm",
                    p.destaque ? "text-white/85" : "text-charcoal",
                  )}
                >
                  <span className="font-medium">{item.titulo}.</span>{" "}
                  <span
                    className={p.destaque ? "text-white/60" : "text-muted-foreground"}
                  >
                    {item.descricao}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-2">
            <Button
              asChild
              variant={p.destaque ? "accent" : "primary"}
              className="w-full sm:w-auto"
            >
              <Link href={p.cta.href}>
                {p.cta.rotulo}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
