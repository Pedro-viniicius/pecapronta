import type { Metadata } from "next";
import { CalendarClock, MessageSquare } from "lucide-react";
import { ETAPAS_PRODUCAO_EXEMPLO, PROJETOS } from "@/data/projetos";
import { PROPOSTAS } from "@/data/propostas";
import { formatarData, formatarReal, formatarPrazo } from "@/lib/utils";
import { nomeServico } from "@/lib/domain";
import { StatCard } from "@/components/dashboard/stat-card";
import { ProductionTimeline } from "@/components/dashboard/production-timeline";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusProjetoBadge } from "@/components/ui/status-badge";
import { BotaoPreparacao } from "@/components/feedback/botao-preparacao";

export const metadata: Metadata = {
  title: "Painel demonstrativo do marceneiro",
  description:
    "Dashboard demonstrativo com projetos, propostas, produção, entregas e mensagens.",
};

export default function DashboardMarceneiroPage() {
  const emProducao = PROJETOS.filter((p) => p.status === "em-producao").length;
  const propostasRecebidas = PROPOSTAS.length;

  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          Painel demonstrativo do marceneiro
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-charcoal">
          Projetos, propostas e produção em uma visão única.
        </h1>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard titulo="Projetos ativos" valor={String(PROJETOS.length)} descricao="Inclui rascunhos e pedidos em produção" icone="FolderKanban" />
        <StatCard titulo="Propostas recebidas" valor={String(propostasRecebidas)} descricao="Para comparação demonstrativa" icone="GitCompareArrows" />
        <StatCard titulo="Em produção" valor={String(emProducao)} descricao="Etapas acompanhadas no painel" icone="Factory" />
        <StatCard titulo="Próxima entrega" valor="18/07" descricao="Data ilustrativa do projeto em destaque" icone="Truck" />
      </div>
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <CardHeader>
            <CardTitle>Projetos ativos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {PROJETOS.map((projeto) => (
              <div key={projeto.id} className="rounded-lg border border-line p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-semibold text-charcoal">{projeto.nome}</p>
                    <p className="text-sm text-muted-foreground">
                      {projeto.cidade} · Criado em {formatarData(projeto.criadoEm)}
                    </p>
                  </div>
                  <StatusProjetoBadge status={projeto.status} />
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {projeto.materiais.map((material) => (
                    <Badge key={material}>{material}</Badge>
                  ))}
                  {projeto.valor && <Badge tom="success">{formatarReal(projeto.valor)}</Badge>}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Linha do tempo de produção</CardTitle>
            </CardHeader>
            <CardContent>
              <ProductionTimeline etapas={ETAPAS_PRODUCAO_EXEMPLO} />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Propostas recebidas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {PROPOSTAS.map((proposta) => (
                <div key={proposta.id} className="rounded-lg border border-line p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-charcoal">{proposta.parceiro}</p>
                      <p className="text-sm text-muted-foreground">
                        {formatarPrazo(proposta.prazoDias)} · {formatarReal(proposta.valor)}
                      </p>
                    </div>
                    {proposta.recomendada && <Badge tom="accent">Boa aderência</Badge>}
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {proposta.servicos.slice(0, 3).map(nomeServico).join(", ")}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Mensagens recentes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p className="flex gap-2"><MessageSquare className="size-4 text-deep-blue" aria-hidden="true" /> Corte Norte solicitou confirmação das fitas de borda.</p>
            <p className="flex gap-2"><CalendarClock className="size-4 text-deep-blue" aria-hidden="true" /> Entrega demonstrativa prevista para 18/07/2026.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Ações rápidas</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-2">
            <BotaoPreparacao variant="accent">Salvar projeto</BotaoPreparacao>
            <BotaoPreparacao variant="outline">Enviar mensagem</BotaoPreparacao>
            <BotaoPreparacao variant="outline">Aceitar proposta</BotaoPreparacao>
            <BotaoPreparacao variant="outline">Acompanhar entrega</BotaoPreparacao>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
