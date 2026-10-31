import type {
  StatusOportunidade,
  StatusProjeto,
  Tom,
} from "@/types";

/** Ordem canônica das etapas de um projeto (seção 10.8). */
export const STATUS_PROJETO_ORDEM: StatusProjeto[] = [
  "rascunho",
  "aguardando-propostas",
  "propostas-recebidas",
  "em-analise",
  "aprovado",
  "plano-de-corte",
  "em-producao",
  "acabamento",
  "separacao",
  "em-transporte",
  "entregue",
];

export const STATUS_PROJETO_META: Record<
  StatusProjeto,
  { label: string; tom: Tom }
> = {
  rascunho: { label: "Rascunho", tom: "neutral" },
  "aguardando-propostas": { label: "Aguardando propostas", tom: "info" },
  "propostas-recebidas": { label: "Propostas recebidas", tom: "info" },
  "em-analise": { label: "Em análise", tom: "warning" },
  aprovado: { label: "Aprovado", tom: "success" },
  "plano-de-corte": { label: "Plano de corte", tom: "info" },
  "em-producao": { label: "Em produção", tom: "info" },
  acabamento: { label: "Acabamento", tom: "info" },
  separacao: { label: "Separação", tom: "info" },
  "em-transporte": { label: "Em transporte", tom: "warning" },
  entregue: { label: "Entregue", tom: "success" },
};

export const STATUS_OPORTUNIDADE_META: Record<
  StatusOportunidade,
  { label: string; tom: Tom }
> = {
  nova: { label: "Nova", tom: "accent" },
  "aguardando-resposta": { label: "Aguardando resposta", tom: "warning" },
  "proposta-enviada": { label: "Proposta enviada", tom: "info" },
  aprovada: { label: "Aprovada", tom: "success" },
  recusada: { label: "Recusada", tom: "neutral" },
};

/** Índice da etapa atual na ordem canônica (para barras de progresso). */
export function indiceStatus(status: StatusProjeto): number {
  return STATUS_PROJETO_ORDEM.indexOf(status);
}
