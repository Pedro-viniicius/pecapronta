import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import {
  BENEFICIOS_MARCENEIRO,
  DORES_MARCENEIRO,
  FLUXO_PLATAFORMA,
} from "@/lib/conteudo";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { ProcessFlow } from "@/components/marketing/process-flow";
import { PartnerComparison } from "@/components/marketing/partner-comparison";
import { CtaSection } from "@/components/marketing/cta-section";

export const metadata: Metadata = {
  title: "Para marceneiros",
  description:
    "Veja como marceneiros podem solicitar orçamento, comparar parceiros e acompanhar a produção terceirizada de peças para montagem.",
};

export default function ParaMarceneirosPage() {
  return (
    <>
      <Section tone="navy" className="bg-grid-dark">
        <div className="max-w-3xl">
          <SectionHeading
            tone="dark"
            eyebrow="Para quem projeta e monta"
            titulo="Aumente sua capacidade produtiva sem investir em novas máquinas."
            descricao="Envie projetos, compare parceiros especializados e acompanhe a produção das peças cortadas, processadas e identificadas."
          />
          <Button asChild variant="accent" size="lg" className="mt-8">
            <Link href="/solicitar-orcamento">
              Solicitar orçamento <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </Section>
      <Section>
        <SectionHeading
          eyebrow="Dores resolvidas"
          titulo="Menos etapas manuais na busca por produção terceirizada"
        />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {DORES_MARCENEIRO.map((dor) => (
            <div key={dor} className="flex gap-3 rounded-lg border border-line bg-white p-4">
              <Check className="mt-0.5 size-4 shrink-0 text-red" aria-hidden="true" />
              <p className="text-sm text-charcoal">{dor}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section tone="soft">
        <SectionHeading
          eyebrow="Benefícios"
          titulo="Uma rotina mais previsível entre projeto, corte e montagem"
        />
        <FeatureGrid itens={BENEFICIOS_MARCENEIRO} className="mt-10" />
      </Section>
      <Section>
        <SectionHeading
          eyebrow="Fluxo demonstrativo"
          titulo="Da solicitação ao acompanhamento"
        />
        <ProcessFlow itens={FLUXO_PLATAFORMA.slice(0, 6)} colunas={3} className="mt-10" />
      </Section>
      <Section tone="soft">
        <PartnerComparison />
      </Section>
      <CtaSection
        titulo="Comece por um orçamento demonstrativo."
        descricao="Você pode preencher o fluxo, revisar as informações e entender como a comparação funcionará."
        primario={{ href: "/solicitar-orcamento", rotulo: "Solicitar orçamento" }}
        secundario={{ href: "/demonstracao/marceneiro", rotulo: "Ver painel do marceneiro" }}
      />
    </>
  );
}
