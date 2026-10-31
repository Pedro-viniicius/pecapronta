import { cn } from "@/lib/utils";
import { Icone } from "@/components/ui/icone";
import type { ItemConteudo } from "@/lib/conteudo";

interface FeatureGridProps {
  itens: ItemConteudo[];
  colunas?: 2 | 3;
  className?: string;
}

/** Grade de benefícios/atributos: ícone + título + descrição. */
export function FeatureGrid({ itens, colunas = 3, className }: FeatureGridProps) {
  return (
    <div
      className={cn(
        "grid gap-4 sm:grid-cols-2",
        colunas === 3 && "lg:grid-cols-3",
        className,
      )}
    >
      {itens.map((it) => (
        <div
          key={it.titulo}
          className="flex gap-4 rounded-lg border border-line bg-white p-5 transition-shadow hover:shadow-sm"
        >
          <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-deep-blue/10 text-deep-blue">
            <Icone nome={it.icone} className="size-5" aria-hidden="true" />
          </span>
          <div>
            <h3 className="font-semibold text-charcoal">{it.titulo}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {it.descricao}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
