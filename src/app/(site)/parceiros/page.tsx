import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { PartnerCatalog } from "@/components/partners/partner-catalog";

export const metadata: Metadata = {
  title: "Encontrar parceiros",
  description:
    "Catálogo demonstrativo de parceiros de produção para corte de MDF, MDP, fita de borda, furação, CNC, embalagem e entrega.",
};

export default function ParceirosPage() {
  return (
    <>
      <Section tone="soft">
        <SectionHeading
          eyebrow="Catálogo demonstrativo"
          titulo="Encontre parceiros por serviço, material, região e capacidade."
          descricao="Os nomes e dados abaixo são fictícios e servem para demonstrar como a busca e comparação funcionarão."
        />
      </Section>
      <Section>
        <PartnerCatalog />
      </Section>
    </>
  );
}
