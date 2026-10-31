import { cn } from "@/lib/utils";
import { Icone } from "@/components/ui/icone";
import type { ItemConteudo } from "@/lib/conteudo";

interface ProcessFlowProps {
  itens: ItemConteudo[];
  colunas?: 3 | 4;
  className?: string;
}

/** Passos numerados de um processo (fluxo da plataforma / produção). */
export function ProcessFlow({ itens, colunas = 4, className }: ProcessFlowProps) {
  return (
    <ol
      className={cn(
        "grid gap-4 sm:grid-cols-2",
        colunas === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3",
        className,
      )}
    >
      {itens.map((it, i) => (
        <li
          key={it.titulo}
          className="flex flex-col gap-3 rounded-lg border border-line bg-white p-5"
        >
          <div className="flex items-center justify-between">
            <span className="flex size-9 items-center justify-center rounded-md bg-navy text-sm font-bold text-white">
              {String(i + 1).padStart(2, "0")}
            </span>
            <Icone
              nome={it.icone}
              className="size-5 text-deep-blue"
              aria-hidden="true"
            />
          </div>
          <h3 className="font-semibold text-charcoal">{it.titulo}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {it.descricao}
          </p>
        </li>
      ))}
    </ol>
  );
}
