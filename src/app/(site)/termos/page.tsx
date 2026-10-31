import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Termos",
  description: "Termos de uso demonstrativos da PeçaPronta.",
};

export default function TermosPage() {
  return (
    <Section>
      <article className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Documento demonstrativo"
          titulo="Termos de uso"
          descricao="Este conteúdo é um placeholder responsável para o MVP frontend e não substitui termos jurídicos finais."
        />
        <div className="mt-8 space-y-5 text-sm leading-7 text-muted-foreground">
          <p>
            A PeçaPronta exibida neste projeto é uma demonstração de interface.
            Nenhum orçamento real, contratação, pagamento, entrega ou cadastro
            comercial é executado nesta versão.
          </p>
          <p>
            Os parceiros, avaliações, prazos e projetos apresentados são fictícios
            e servem apenas para demonstrar a experiência do marketplace.
          </p>
          <p>
            A confirmação comercial, condições de produção, responsabilidades,
            prazos e valores deverão ser definidos em uma futura versão com backend
            e documentos contratuais adequados.
          </p>
        </div>
      </article>
    </Section>
  );
}
