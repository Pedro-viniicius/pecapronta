import type { ServicoId } from "@/types";
import { SERVICOS } from "@/data/servicos";

export function nomeServico(id: ServicoId): string {
  return SERVICOS.find((servico) => servico.id === id)?.nome ?? id;
}

export function nomesServicos(ids: ServicoId[]): string[] {
  return ids.map(nomeServico);
}

export const estadosAtendidos = ["SP", "MG", "PR", "SC", "RS", "RJ", "GO", "PE"];

export const cidadesAtendidas = [
  "São Paulo",
  "Campinas",
  "Belo Horizonte",
  "Curitiba",
  "Joinville",
  "Porto Alegre",
  "Ribeirão Preto",
  "Goiânia",
  "Rio de Janeiro",
  "Recife",
];
