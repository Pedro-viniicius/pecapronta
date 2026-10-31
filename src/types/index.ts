// ============================================================
//  Tipos de domínio — PeçaPronta
//  Conceitos centrais do marketplace de produção de móveis.
// ============================================================

export type TipoUsuario = "marceneiro" | "parceiro";

export type Material =
  | "MDF"
  | "MDP"
  | "MDF Ultra"
  | "Compensado"
  | "Melamínico"
  | "Chapa laqueada";

export type ServicoId =
  | "plano-de-corte"
  | "otimizacao"
  | "corte"
  | "fita-de-borda"
  | "furacao"
  | "usinagem-cnc"
  | "identificacao"
  | "embalagem"
  | "entrega"
  | "montagem"
  | "servico-completo";

export interface Servico {
  id: ServicoId;
  nome: string;
  descricao: string;
  /** Nome do ícone no registro `Icone` (lucide-react). */
  icone: string;
}

export type CapacidadeLote = "pequenos" | "medios" | "grandes";

export interface Parceiro {
  slug: string;
  nome: string;
  cidade: string;
  estado: string; // UF
  regiaoAtendimento: string;
  /** Distância demonstrativa a partir de uma origem fictícia (km). */
  distanciaKm: number;
  servicos: ServicoId[];
  materiais: Material[];
  maquinas: string[];
  capacidade: CapacidadeLote[];
  prazoEstimadoDias: number;
  entregaDisponivel: boolean;
  /** Avaliação demonstrativa (0 a 5). */
  avaliacao: number;
  totalAvaliacoes: number;
  tempoRespostaHoras: number;
  sobre: string;
  destaque?: string;
}

export type StatusProjeto =
  | "rascunho"
  | "aguardando-propostas"
  | "propostas-recebidas"
  | "em-analise"
  | "aprovado"
  | "plano-de-corte"
  | "em-producao"
  | "acabamento"
  | "separacao"
  | "em-transporte"
  | "entregue";

export interface Projeto {
  id: string;
  nome: string;
  tipoMovel: string;
  status: StatusProjeto;
  criadoEm: string; // ISO (YYYY-MM-DD)
  cidade: string;
  materiais: Material[];
  parceiro?: string;
  propostas?: number;
  prazoEntrega?: string; // ISO
  valor?: number;
}

export interface Proposta {
  id: string;
  parceiro: string;
  cidade: string;
  valor: number;
  prazoDias: number;
  avaliacao: number;
  servicos: ServicoId[];
  condicoes: string;
  recomendada?: boolean;
}

export interface EtapaProducao {
  nome: string;
  status: "concluida" | "atual" | "pendente";
  data?: string;
}

export type StatusOportunidade =
  | "nova"
  | "aguardando-resposta"
  | "proposta-enviada"
  | "aprovada"
  | "recusada";

export interface Oportunidade {
  id: string;
  projeto: string;
  cliente: string; // nome fictício/demonstrativo
  cidade: string;
  servicos: ServicoId[];
  materiais: Material[];
  volumeEstimado: string;
  prazoDesejado: string;
  recebidaEm: string; // ISO
  status: StatusOportunidade;
  valorSugerido?: number;
}

export interface PerguntaFaq {
  pergunta: string;
  resposta: string;
}

export interface Depoimento {
  autor: string;
  papel: string;
  texto: string;
}

/** Tom visual usado por badges e marcadores de status. */
export type Tom = "neutral" | "info" | "success" | "warning" | "accent";
