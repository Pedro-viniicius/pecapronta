import type { Proposta } from "@/types";

/**
 * Propostas recebidas para um projeto (painel do marceneiro) — simuladas.
 * Servem à seção de comparação de parceiros.
 */
export const PROPOSTAS: Proposta[] = [
  {
    id: "PROP-01",
    parceiro: "Corte Norte Demonstração",
    cidade: "São Paulo, SP",
    valor: 2480,
    prazoDias: 6,
    avaliacao: 4.8,
    servicos: ["corte", "fita-de-borda", "furacao", "identificacao", "entrega"],
    condicoes: "Inclui entrega e identificação peça a peça.",
    recomendada: true,
  },
  {
    id: "PROP-02",
    parceiro: "PainelPro Exemplo",
    cidade: "Campinas, SP",
    valor: 2190,
    prazoDias: 9,
    avaliacao: 4.6,
    servicos: ["corte", "fita-de-borda", "furacao"],
    condicoes: "Retirada no local. Fita de borda em todas as peças aparentes.",
  },
  {
    id: "PROP-03",
    parceiro: "Linha Certa Demonstração",
    cidade: "Curitiba, PR",
    valor: 2650,
    prazoDias: 4,
    avaliacao: 4.7,
    servicos: ["corte", "fita-de-borda", "identificacao", "embalagem", "entrega"],
    condicoes: "Menor prazo. Embalagem separada por ambiente.",
  },
];
