import { Icone } from "@/components/ui/icone";
import { Card, CardContent } from "@/components/ui/card";

export function StatCard({
  titulo,
  valor,
  descricao,
  icone,
}: {
  titulo: string;
  valor: string;
  descricao: string;
  icone: string;
}) {
  return (
    <Card>
      <CardContent className="flex items-start justify-between gap-4 p-5">
        <div>
          <p className="text-sm text-muted-foreground">{titulo}</p>
          <p className="mt-2 text-2xl font-semibold text-charcoal">{valor}</p>
          <p className="mt-1 text-xs text-muted-foreground">{descricao}</p>
        </div>
        <span className="rounded-md bg-navy p-2 text-white">
          <Icone nome={icone} className="size-5" aria-hidden="true" />
        </span>
      </CardContent>
    </Card>
  );
}
