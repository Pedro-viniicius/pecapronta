import { cn } from "@/lib/utils";
import { Icone } from "@/components/ui/icone";
import { SERVICOS } from "@/data/servicos";

/** Grade dos serviços disponíveis na plataforma. */
export function ServicesGrid({ className }: { className?: string }) {
  return (
    <div className={cn("grid gap-3 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {SERVICOS.map((servico) => (
        <div
          key={servico.id}
          className="group flex flex-col gap-2 rounded-lg border border-line bg-white p-5 transition-colors hover:border-deep-blue/40"
        >
          <span className="flex size-10 items-center justify-center rounded-md bg-navy/5 text-navy transition-colors group-hover:bg-red/10 group-hover:text-red-dark">
            <Icone nome={servico.icone} className="size-5" aria-hidden="true" />
          </span>
          <h3 className="mt-1 font-semibold text-charcoal">{servico.nome}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {servico.descricao}
          </p>
        </div>
      ))}
    </div>
  );
}
