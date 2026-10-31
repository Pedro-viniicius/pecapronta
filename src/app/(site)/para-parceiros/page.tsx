import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { BENEFICIOS_PARCEIRO, DORES_PARCEIRO } from "@/lib/conteudo";
import { OPORTUNIDADES } from "@/data/oportunidades";
import { nomeServico } from "@/lib/domain";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { CtaSection } from "@/components/marketing/cta-section";

export const metadata: Metadata = {
  title: "Para parceiros de produção",
  description:
    "Mostre sua capacidade produtiva, receba oportunidades qualificadas e organize propostas para marceneiros.",
};

export default function ParaParceirosPage() {
  return (
    <>
      <Section tone="navy" className="bg-grid-dark">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeading
              tone="dark"
              eyebrow="Para centros de corte e fábricas"
              titulo="Receba oportunidades compatíveis com sua capacidade produtiva."
              descricao="A PeçaPronta ajuda empresas parceiras a apresentar serviços, região atendida, prazos e capacidade de produção para clientes profissionais."
            />
            <Button asChild variant="accent" size="lg" className="mt-8">
              <Link href="/demonstracao/parceiro">
                Ver painel demonstrativo <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <Card className="bg-white/95">
            <CardHeader>
              <CardTitle>Fila de oportunidades</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {OPORTUNIDADES.slice(0, 3).map((item) => (
                <div key={item.id} className="rounded-lg border border-line p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-charcoal">{item.projeto}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.cidade} · {item.volumeEstimado}
                      </p>
                    </div>
                    <Badge tom="accent">{item.status === "nova" ? "Nova" : "Em análise"}</Badge>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.servicos.slice(0, 3).map((servico) => (
                      <Badge key={servico} tom="info">
                        {nomeServico(servico)}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </Section>
      <Section>
        <SectionHeading
          eyebrow="Problemas comuns"
          titulo="Oportunidades mais organizadas para quem produz"
        />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {DORES_PARCEIRO.map((dor) => (
            <div key={dor} className="flex gap-3 rounded-lg border border-line bg-white p-4">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-red" aria-hidden="true" />
              <p className="text-sm text-charcoal">{dor}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section tone="soft">
        <SectionHeading
          eyebrow="Benefícios"
          titulo="Mostre capacidade, serviços e região atendida com clareza"
        />
        <FeatureGrid itens={BENEFICIOS_PARCEIRO} className="mt-10" />
      </Section>
      <CtaSection
        titulo="Cadastre sua empresa parceira na próxima etapa."
        descricao="Nesta versão, o painel demonstra como oportunidades, propostas e fila de produção serão organizadas."
        primario={{ href: "/demonstracao/parceiro", rotulo: "Ver painel do parceiro" }}
        secundario={{ href: "/parceiros", rotulo: "Ver catálogo demonstrativo" }}
      />
    </>
  );
}
