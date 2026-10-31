import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Clock, MapPin, Star, Truck } from "lucide-react";
import { PARCEIROS, parceiroPorSlug } from "@/data/parceiros";
import { PROCESSO_PRODUCAO } from "@/lib/conteudo";
import { nomeServico } from "@/lib/domain";
import { formatarPrazo } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { BotaoPreparacao } from "@/components/feedback/botao-preparacao";
import { ProcessFlow } from "@/components/marketing/process-flow";

export function generateStaticParams() {
  return PARCEIROS.map((parceiro) => ({ slug: parceiro.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const parceiro = parceiroPorSlug(slug);
  return {
    title: parceiro ? `${parceiro.nome}` : "Parceiro não encontrado",
    description: parceiro?.sobre,
  };
}

export default async function PerfilParceiroPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const parceiro = parceiroPorSlug(slug);
  if (!parceiro) notFound();

  return (
    <>
      <Section tone="navy" className="bg-grid-dark">
        <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
              Perfil demonstrativo de parceiro
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {parceiro.nome}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
              {parceiro.sobre}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {parceiro.destaque && <Badge tom="accent">{parceiro.destaque}</Badge>}
              <Badge tom="info">{parceiro.regiaoAtendimento}</Badge>
              <Badge tom="success">{formatarPrazo(parceiro.prazoEstimadoDias)}</Badge>
            </div>
          </div>
          <Card className="bg-white">
            <CardContent className="space-y-4 p-6 text-sm">
              <p className="flex items-center gap-2">
                <MapPin className="size-4 text-red" aria-hidden="true" />
                {parceiro.cidade}/{parceiro.estado}
              </p>
              <p className="flex items-center gap-2">
                <Star className="size-4 fill-red text-red" aria-hidden="true" />
                {parceiro.avaliacao.toFixed(1)} de avaliação demonstrativa
              </p>
              <p className="flex items-center gap-2">
                <Clock className="size-4 text-red" aria-hidden="true" />
                Resposta média em {parceiro.tempoRespostaHoras}h
              </p>
              <p className="flex items-center gap-2">
                <Truck className="size-4 text-red" aria-hidden="true" />
                {parceiro.entregaDisponivel ? "Entrega disponível" : "Retirada agendada"}
              </p>
              <BotaoPreparacao variant="accent" className="w-full">
                Solicitar proposta
              </BotaoPreparacao>
            </CardContent>
          </Card>
        </div>
      </Section>
      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Serviços oferecidos</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {parceiro.servicos.map((servico) => (
                <Badge key={servico} tom="info">
                  {nomeServico(servico)}
                </Badge>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Materiais suportados</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {parceiro.materiais.map((material) => (
                <Badge key={material}>{material}</Badge>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Máquinas e capacidade</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              {parceiro.maquinas.map((maquina) => (
                <p key={maquina}>{maquina}</p>
              ))}
            </CardContent>
          </Card>
        </div>
      </Section>
      <Section tone="soft">
        <SectionHeading
          eyebrow="Processo"
          titulo="Fluxo demonstrativo de produção"
          descricao="A ordem real depende do serviço contratado, mas este é o padrão visual preparado para o MVP."
        />
        <ProcessFlow itens={PROCESSO_PRODUCAO.slice(0, 6)} colunas={3} className="mt-10" />
      </Section>
    </>
  );
}
