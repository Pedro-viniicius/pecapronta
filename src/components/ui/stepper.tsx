import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepperProps {
  etapas: string[];
  atual: number; // índice 0-based da etapa atual
  onIrPara?: (indice: number) => void;
  className?: string;
}

/** Indicador de progresso do formulário multi-etapas (responsivo). */
export function Stepper({ etapas, atual, onIrPara, className }: StepperProps) {
  const total = etapas.length;
  const percentual = Math.round(((atual + 1) / total) * 100);

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {/* Resumo textual + barra — sempre visível (ótimo no mobile) */}
      <div className="flex items-center justify-between text-sm">
        <span className="font-semibold text-charcoal">
          Etapa {atual + 1} de {total}
        </span>
        <span className="text-muted-foreground">{etapas[atual]}</span>
      </div>
      <div
        className="h-1.5 w-full overflow-hidden rounded-full bg-line"
        role="progressbar"
        aria-valuenow={atual + 1}
        aria-valuemin={1}
        aria-valuemax={total}
        aria-label={`Progresso: etapa ${atual + 1} de ${total}`}
      >
        <div
          className="h-full rounded-full bg-red transition-[width] duration-300"
          style={{ width: `${percentual}%` }}
        />
      </div>

      {/* Marcadores detalhados — a partir de telas médias */}
      <ol className="hidden items-center gap-1 md:flex">
        {etapas.map((etapa, i) => {
          const concluida = i < atual;
          const ativa = i === atual;
          const navegavel = Boolean(onIrPara) && i <= atual;
          const Marcador = navegavel ? "button" : "div";
          return (
            <li key={etapa} className="flex flex-1 items-center gap-1">
              <Marcador
                {...(navegavel
                  ? { type: "button" as const, onClick: () => onIrPara?.(i) }
                  : {})}
                className={cn(
                  "flex items-center gap-2 rounded-md px-1 py-0.5 text-left",
                  navegavel &&
                    "transition-colors hover:bg-bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                )}
                aria-current={ativa ? "step" : undefined}
              >
                <span
                  className={cn(
                    "flex size-6 shrink-0 items-center justify-center rounded-full border text-xs font-semibold",
                    concluida && "border-primary bg-primary text-white",
                    ativa && "border-red bg-red text-white",
                    !concluida && !ativa && "border-line bg-white text-muted-foreground",
                  )}
                >
                  {concluida ? <Check className="size-3.5" /> : i + 1}
                </span>
                <span
                  className={cn(
                    "truncate text-xs font-medium",
                    ativa ? "text-charcoal" : "text-muted-foreground",
                  )}
                >
                  {etapa}
                </span>
              </Marcador>
              {i < total - 1 && (
                <span
                  aria-hidden="true"
                  className={cn(
                    "h-px flex-1",
                    i < atual ? "bg-primary" : "bg-line",
                  )}
                />
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
