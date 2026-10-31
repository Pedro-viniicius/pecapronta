import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { QuoteForm } from "@/components/forms/quote-form";

export const metadata: Metadata = {
  title: "Solicitar orçamento",
  description:
    "Fluxo demonstrativo para solicitar orçamento de plano de corte, corte de MDF, fita de borda, furação, usinagem CNC e entrega.",
};

export default function SolicitarOrcamentoPage() {
  return (
    <>
      <Section tone="soft">
        <SectionHeading
          eyebrow="Orçamento demonstrativo"
          titulo="Preencha as informações essenciais do projeto."
          descricao="O fluxo simula uma solicitação real, mas nenhum dado é enviado e nenhuma ação comercial é realizada."
        />
      </Section>
      <Section>
        <QuoteForm />
      </Section>
    </>
  );
}
