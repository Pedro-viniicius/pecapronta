import * as React from "react";
import { cn } from "@/lib/utils";
import { Icone } from "@/components/ui/icone";

interface EmptyStateProps {
  icone?: string;
  titulo: string;
  descricao?: React.ReactNode;
  acao?: React.ReactNode;
  className?: string;
}

/** Estado vazio útil — orienta o próximo passo. */
export function EmptyState({
  icone = "Boxes",
  titulo,
  descricao,
  acao,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-line bg-bg-soft/60 px-6 py-12 text-center",
        className,
      )}
    >
      <span className="flex size-12 items-center justify-center rounded-full border border-line bg-white text-deep-blue">
        <Icone nome={icone} className="size-6" aria-hidden="true" />
      </span>
      <h3 className="text-base font-semibold text-charcoal">{titulo}</h3>
      {descricao && (
        <p className="max-w-sm text-sm text-muted-foreground">{descricao}</p>
      )}
      {acao && <div className="mt-2">{acao}</div>}
    </div>
  );
}
