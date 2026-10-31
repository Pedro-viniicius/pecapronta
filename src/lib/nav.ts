export interface ItemNav {
  href: string;
  rotulo: string;
}

/** Navegação principal do cabeçalho (seção 12). */
export const NAV_PRINCIPAL: ItemNav[] = [
  { href: "/", rotulo: "Início" },
  { href: "/como-funciona", rotulo: "Como funciona" },
  { href: "/para-marceneiros", rotulo: "Para marceneiros" },
  { href: "/para-parceiros", rotulo: "Para parceiros" },
  { href: "/parceiros", rotulo: "Encontrar parceiros" },
  { href: "/solicitar-orcamento", rotulo: "Solicitar orçamento" },
];

/** Grupos de links do rodapé. */
export const NAV_RODAPE: { titulo: string; itens: ItemNav[] }[] = [
  {
    titulo: "Plataforma",
    itens: [
      { href: "/como-funciona", rotulo: "Como funciona" },
      { href: "/parceiros", rotulo: "Encontrar parceiros" },
      { href: "/solicitar-orcamento", rotulo: "Solicitar orçamento" },
    ],
  },
  {
    titulo: "Para marceneiros",
    itens: [
      { href: "/para-marceneiros", rotulo: "Benefícios" },
      { href: "/solicitar-orcamento", rotulo: "Solicitar orçamento" },
      { href: "/demonstracao/marceneiro", rotulo: "Painel demonstrativo" },
    ],
  },
  {
    titulo: "Para parceiros",
    itens: [
      { href: "/para-parceiros", rotulo: "Como participar" },
      { href: "/demonstracao/parceiro", rotulo: "Painel demonstrativo" },
    ],
  },
  {
    titulo: "Informações",
    itens: [
      { href: "/privacidade", rotulo: "Privacidade" },
      { href: "/termos", rotulo: "Termos de uso" },
    ],
  },
];
