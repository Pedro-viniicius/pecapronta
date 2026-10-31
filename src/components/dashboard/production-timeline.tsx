import type { EtapaProducao } from "@/types";
import { cn } from "@/lib/utils";

export function ProductionTimeline({ etapas }: { etapas: EtapaProducao[] }) {
  return (
    <ol className="space-y-4">
      {etapas.map((etapa) => (
        <li key={etapa.nome} className="flex gap-3">
          <span
            className={cn(
              "mt-1 size-3 rounded-full border",
              etapa.status === "concluida" && "border-emerald-600 bg-emerald-600",
              etapa.status === "atual" && "border-red bg-red",
              etapa.status === "pendente" && "border-line bg-white",
            )}
            aria-hidden="true"
          />
          <div>
            <p className="font-medium text-charcoal">{etapa.nome}</p>
            <p className="text-sm text-muted-foreground">
              {etapa.status === "concluida" && "Concluída"}
              {etapa.status === "atual" && "Etapa atual"}
              {etapa.status === "pendente" && "Pendente"}
              {etapa.data ? ` · ${etapa.data}` : ""}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
