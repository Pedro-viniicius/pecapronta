import type { StatusOportunidade, StatusProjeto } from "@/types";
import { Badge } from "@/components/ui/badge";
import {
  STATUS_OPORTUNIDADE_META,
  STATUS_PROJETO_META,
} from "@/lib/status";

export function StatusProjetoBadge({ status }: { status: StatusProjeto }) {
  const meta = STATUS_PROJETO_META[status];
  return <Badge tom={meta.tom}>{meta.label}</Badge>;
}

export function StatusOportunidadeBadge({
  status,
}: {
  status: StatusOportunidade;
}) {
  const meta = STATUS_OPORTUNIDADE_META[status];
  return <Badge tom={meta.tom}>{meta.label}</Badge>;
}
