import type { Servico, ServicoId } from "@/types";

/** Catálogo de serviços oferecidos por parceiros de produção. */
export const SERVICOS: Servico[] = [
  {
    id: "plano-de-corte",
    nome: "Plano de corte",
    descricao:
      "Transformamos o seu projeto em um plano de corte técnico, com a relação completa de peças.",
    icone: "ClipboardList",
  },
  {
    id: "otimizacao",
    nome: "Otimização de chapas",
    descricao:
      "Aproveitamento inteligente das chapas de MDF e MDP para reduzir sobras e custo.",
    icone: "LayoutGrid",
  },
  {
    id: "corte",
    nome: "Corte de MDF e MDP",
    descricao:
      "Corte preciso em seccionadora computadorizada, com esquadro e medidas conferidas.",
    icone: "Scissors",
  },
  {
    id: "fita-de-borda",
    nome: "Fita de borda",
    descricao:
      "Aplicação de fita de borda em coladeira, com acabamento uniforme nas peças.",
    icone: "Frame",
  },
  {
    id: "furacao",
    nome: "Furação",
    descricao:
      "Furação para dobradiças, cavilhas e sistemas de montagem conforme o projeto.",
    icone: "Drill",
  },
  {
    id: "usinagem-cnc",
    nome: "Usinagem CNC",
    descricao:
      "Rebaixos, rasgos, usinagens e detalhes especiais em router CNC de precisão.",
    icone: "Cpu",
  },
  {
    id: "identificacao",
    nome: "Identificação de peças",
    descricao:
      "Cada peça etiquetada e catalogada para uma montagem organizada e sem dúvidas.",
    icone: "Tags",
  },
  {
    id: "embalagem",
    nome: "Separação e embalagem",
    descricao:
      "Peças separadas por ambiente e embaladas para proteção durante o transporte.",
    icone: "Package",
  },
  {
    id: "entrega",
    nome: "Entrega",
    descricao:
      "Logística das peças prontas até o seu endereço ou o do cliente final.",
    icone: "Truck",
  },
  {
    id: "montagem",
    nome: "Montagem terceirizada",
    descricao:
      "Equipes parceiras para montagem no local, quando você precisa de mais capacidade.",
    icone: "Hammer",
  },
  {
    id: "servico-completo",
    nome: "Serviço completo",
    descricao:
      "Do arquivo do projeto às peças cortadas, processadas, identificadas e entregues.",
    icone: "Layers",
  },
];

export const SERVICO_POR_ID = Object.fromEntries(
  SERVICOS.map((s) => [s.id, s]),
) as Record<ServicoId, Servico>;

export function nomeServico(id: ServicoId): string {
  return SERVICO_POR_ID[id]?.nome ?? id;
}
