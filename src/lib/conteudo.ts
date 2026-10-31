export interface ItemConteudo {
  icone: string;
  titulo: string;
  descricao: string;
}

/** Fluxo da plataforma, passo a passo (seção 10.2). */
export const FLUXO_PLATAFORMA: ItemConteudo[] = [
  {
    icone: "FileText",
    titulo: "Envie as informações do projeto",
    descricao:
      "Descreva o móvel, anexe arquivos ou medidas e conte o que precisa produzir.",
  },
  {
    icone: "SlidersHorizontal",
    titulo: "Selecione os serviços necessários",
    descricao:
      "Do plano de corte à entrega — escolha serviços avulsos ou o pacote completo.",
  },
  {
    icone: "Handshake",
    titulo: "Receba propostas de parceiros",
    descricao:
      "Empresas compatíveis com o seu projeto apresentam valores, prazos e condições.",
  },
  {
    icone: "LineChart",
    titulo: "Compare em um só lugar",
    descricao:
      "Avalie valor, prazo, localização, capacidade e serviços lado a lado.",
  },
  {
    icone: "BadgeCheck",
    titulo: "Escolha o parceiro",
    descricao:
      "Selecione a proposta que faz mais sentido e alinhe os detalhes da produção.",
  },
  {
    icone: "Workflow",
    titulo: "Acompanhe a produção",
    descricao:
      "Veja as etapas evoluírem, do plano de corte até a separação das peças.",
  },
  {
    icone: "PackageCheck",
    titulo: "Receba as peças prontas para montagem",
    descricao:
      "Peças cortadas, processadas, identificadas e embaladas, prontas para montar.",
  },
];

/** Etapas do processo físico de produção (seção 10.1, item 10). */
export const PROCESSO_PRODUCAO: ItemConteudo[] = [
  {
    icone: "ClipboardList",
    titulo: "Plano de corte",
    descricao: "O projeto vira uma lista técnica de peças e um plano de corte.",
  },
  {
    icone: "LayoutGrid",
    titulo: "Otimização de chapas",
    descricao: "As peças são distribuídas nas chapas para reduzir sobras.",
  },
  {
    icone: "Scissors",
    titulo: "Corte",
    descricao: "Corte preciso em seccionadora, com medidas conferidas.",
  },
  {
    icone: "Frame",
    titulo: "Fita de borda",
    descricao: "Acabamento das bordas aparentes com fita aplicada em coladeira.",
  },
  {
    icone: "Drill",
    titulo: "Furação e usinagem",
    descricao: "Furos, rebaixos e usinagens conforme o sistema de montagem.",
  },
  {
    icone: "Tags",
    titulo: "Identificação",
    descricao: "Cada peça etiquetada e catalogada para facilitar a montagem.",
  },
  {
    icone: "Truck",
    titulo: "Embalagem e entrega",
    descricao: "Peças separadas por ambiente, embaladas e entregues.",
  },
];

export const BENEFICIOS_MARCENEIRO: ItemConteudo[] = [
  {
    icone: "Factory",
    titulo: "Mais produção, sem novas máquinas",
    descricao:
      "Aumente a capacidade produtiva contratando parceiros que já têm a estrutura.",
  },
  {
    icone: "LineChart",
    titulo: "Compare parceiros num só lugar",
    descricao:
      "Valores, prazos, região e serviços lado a lado para decidir com clareza.",
  },
  {
    icone: "ShieldCheck",
    titulo: "Menos retrabalho, mais previsibilidade",
    descricao:
      "Plano de corte e peças conferidas ajudam a reduzir erros e imprevistos.",
  },
  {
    icone: "Tags",
    titulo: "Peças identificadas",
    descricao:
      "Receba as peças catalogadas e prontas para uma montagem organizada.",
  },
  {
    icone: "MapPin",
    titulo: "Parceiros por região",
    descricao: "Encontre empresas próximas do seu projeto ou do cliente final.",
  },
  {
    icone: "ClipboardCheck",
    titulo: "Solicitações centralizadas",
    descricao:
      "Reúna projetos, orçamentos e status de produção em um só painel.",
  },
];

export const BENEFICIOS_PARCEIRO: ItemConteudo[] = [
  {
    icone: "Handshake",
    titulo: "Oportunidades qualificadas",
    descricao:
      "Receba pedidos de marceneiros compatíveis com os serviços que você oferece.",
  },
  {
    icone: "Gauge",
    titulo: "Menos máquina parada",
    descricao: "Ocupe a capacidade ociosa com demandas alinhadas ao seu perfil.",
  },
  {
    icone: "Factory",
    titulo: "Mostre sua capacidade",
    descricao:
      "Apresente serviços, máquinas, materiais e região atendida em um perfil.",
  },
  {
    icone: "FileCheck",
    titulo: "Leads com informação técnica",
    descricao:
      "Oportunidades já trazem serviços, materiais e prazo desejado para orçar.",
  },
  {
    icone: "MapPin",
    titulo: "Alcance novas cidades",
    descricao: "Amplie o atendimento para regiões próximas de forma organizada.",
  },
  {
    icone: "ClipboardCheck",
    titulo: "Orçamentos organizados",
    descricao: "Acompanhe pedidos, respostas e status em um único lugar.",
  },
];

export const DORES_MARCENEIRO: string[] = [
  "Dificuldade de encontrar centros de corte confiáveis",
  "Tempo perdido pedindo orçamentos manualmente",
  "Desperdício de MDF e MDP",
  "Erros de medida ou no plano de corte",
  "Falta de visibilidade da produção",
  "Peças mal identificadas e montagem confusa",
  "Dificuldade de comparar preço, prazo e região",
  "Precisar aceitar mais projetos sem investir em máquinas",
];

export const DORES_PARCEIRO: string[] = [
  "Dificuldade de atrair clientes profissionais qualificados",
  "Máquinas ociosas em parte do mês",
  "Orçamentos desorganizados e dispersos",
  "Leads sem informação técnica suficiente",
  "Dificuldade de mostrar a capacidade produtiva",
  "Baixa presença digital",
  "Comunicação fragmentada com o cliente",
  "Dificuldade de expandir para cidades vizinhas",
];
