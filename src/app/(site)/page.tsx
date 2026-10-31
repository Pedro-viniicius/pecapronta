import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/marketing/hero";
import { TrustBar } from "@/components/marketing/trust-bar";
import { ProcessFlow } from "@/components/marketing/process-flow";
import { ServicesGrid } from "@/components/marketing/services-grid";
import { AudienceSplit } from "@/components/marketing/audience-split";
import { QuoteSimulation } from "@/components/marketing/quote-simulation";
import { PartnerComparison } from "@/components/marketing/partner-comparison";
import { FaqAccordion } from "@/components/marketing/faq-accordion";
import { CtaSection } from "@/components/marketing/cta-section";
import { FLUXO_PLATAFORMA, PROCESSO_PRODUCAO } from "@/lib/conteudo";
import { FAQ } from "@/data/faq";

export const metadata: Metadata = {
  description:
    "Conectamos marceneiros a empresas especializadas em plano de corte, corte de MDF e MDP, usinagem, acabamento, identificação e entrega das peças prontas para montagem.",
  alternates: { canonical: "/" },
};

export default function PaginaInicial() {
  return (
    <>
      <Hero />
      <TrustBar />

      {/* Como funciona */}
      <Section tone="soft">
        <SectionHeading
          align="center"
          eyebrow="Como funciona"
          titulo="Do arquivo do projeto às peças prontas para montagem"
          descricao="Um fluxo simples e transparente, do envio do projeto até o recebimento das peças cortadas, processadas e identificadas."
          className="mb-12"
        />
        <ProcessFlow itens={FLUXO_PLATAFORMA} />
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild variant="accent" size="lg">
            <Link href="/solicitar-orcamento">
              Começar minha solicitação
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/como-funciona">Ver o passo a passo completo</Link>
          </Button>
        </div>
      </Section>

      {/* Serviços */}
      <Section>
        <SectionHeading
          eyebrow="Serviços"
          titulo="Contrate os serviços que o seu projeto precisa"
          descricao="Serviços avulsos ou o pacote completo — você escolhe o que faz sentido para cada projeto."
          className="mb-12"
        />
        <ServicesGrid />
      </Section>

      {/* Públicos */}
      <Section tone="soft">
        <SectionHeading
          align="center"
          eyebrow="Para quem é"
          titulo="Uma conexão profissional entre projeto e produção"
          descricao="De um lado, quem projeta e monta móveis planejados. Do outro, quem tem estrutura para cortar, usinar, identificar, embalar e entregar."
          className="mb-12"
        />
        <AudienceSplit />
      </Section>

      {/* Simulação de orçamento */}
      <Section>
        <QuoteSimulation />
      </Section>

      {/* Comparação de parceiros */}
      <Section tone="soft">
        <SectionHeading
          eyebrow="Compare parceiros"
          titulo="Escolha com clareza: valor, prazo, região e serviços"
          descricao="Veja parceiros lado a lado e selecione o que melhor atende ao seu projeto."
          className="mb-12"
        />
        <PartnerComparison />
      </Section>

      {/* Processo de produção */}
      <Section>
        <SectionHeading
          align="center"
          eyebrow="Processo de produção"
          titulo="O que acontece com o seu projeto na produção"
          descricao="Cada etapa é pensada para reduzir retrabalho e entregar peças prontas para montar."
          className="mb-12"
        />
        <ProcessFlow itens={PROCESSO_PRODUCAO} />
      </Section>

      {/* FAQ */}
      <Section tone="soft">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="center"
            eyebrow="Perguntas frequentes"
            titulo="Ainda com dúvidas?"
            descricao="Reunimos as perguntas mais comuns sobre a plataforma."
            className="mb-10"
          />
          <FaqAccordion itens={FAQ} />
          <div className="mt-10 flex justify-center">
            <Button asChild variant="accent" size="lg">
              <Link href="/solicitar-orcamento">
                Solicitar orçamento demonstrativo
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      <CtaSection
        titulo="Pronto para transformar projetos em peças prontas para montagem?"
        descricao="Comece uma solicitação demonstrativa ou encontre parceiros de produção na sua região."
        primario={{ rotulo: "Solicitar orçamento", href: "/solicitar-orcamento" }}
        secundario={{ rotulo: "Encontrar parceiros", href: "/parceiros" }}
      />
    </>
  );
}
