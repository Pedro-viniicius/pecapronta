import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FLUXO_PLATAFORMA, PROCESSO_PRODUCAO } from "@/lib/conteudo";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ProcessFlow } from "@/components/marketing/process-flow";
import { ProductShowcase } from "@/components/marketing/product-showcase";
import { CtaSection } from "@/components/marketing/cta-section";

export const metadata: Metadata = {
  title: "Como funciona",
  description:
    "Entenda como a PeçaPronta conecta projetos de marcenaria a parceiros de corte, usinagem, acabamento e entrega.",
};

export default function ComoFuncionaPage() {
  return (
    <>
      <Section tone="navy" className="bg-grid-dark">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              tone="dark"
              eyebrow="Fluxo profissional"
              titulo="Do arquivo do projeto às peças prontas para montagem."
              descricao="A plataforma organiza a solicitação, a comparação de parceiros e o acompanhamento da produção em uma experiência única."
            />
            <Button asChild variant="accent" size="lg" className="mt-8">
              <Link href="/solicitar-orcamento">
                Começar minha solicitação <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <ProductShowcase />
        </div>
      </Section>
      <Section>
        <SectionHeading
          eyebrow="Passo a passo"
          titulo="Como o marceneiro usa a PeçaPronta"
          descricao="Cada etapa foi desenhada para reduzir trocas manuais e dar clareza antes da contratação."
        />
        <ProcessFlow itens={FLUXO_PLATAFORMA} colunas={4} className="mt-10" />
      </Section>
      <Section tone="soft">
        <SectionHeading
          eyebrow="Produção"
          titulo="O que acontece depois da proposta aprovada"
          descricao="A demonstração mostra como as etapas podem ser acompanhadas até a separação e entrega."
        />
        <ProcessFlow itens={PROCESSO_PRODUCAO} colunas={4} className="mt-10" />
      </Section>
      <CtaSection
        titulo="Compare parceiros com mais contexto técnico."
        descricao="Inicie uma solicitação demonstrativa e revise todas as informações antes de qualquer ação comercial."
        primario={{ href: "/solicitar-orcamento", rotulo: "Solicitar orçamento demonstrativo" }}
        secundario={{ href: "/parceiros", rotulo: "Ver parceiros simulados" }}
      />
    </>
  );
}
