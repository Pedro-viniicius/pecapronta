import type { Metadata } from "next";
import { OPORTUNIDADES } from "@/data/oportunidades";
import { formatarData, formatarReal } from "@/lib/utils";
import { nomeServico } from "@/lib/domain";
import { StatCard } from "@/components/dashboard/stat-card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { StatusOportunidadeBadge } from "@/components/ui/status-badge";
import { BotaoPreparacao } from "@/components/feedback/botao-preparacao";

export const metadata: Metadata = {
  title: "Painel demonstrativo do parceiro",
  description:
    "Dashboard demonstrativo para parceiros de produção com oportunidades, propostas e fila produtiva.",
};

export default function DashboardParceiroPage() {
  const novas = OPORTUNIDADES.filter((item) => item.status === "nova").length;
  const aprovadas = OPORTUNIDADES.filter((item) => item.status === "aprovada").length;

  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          Painel demonstrativo do parceiro
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-charcoal">
          Oportunidades, propostas e capacidade produtiva.
        </h1>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard titulo="Novas oportunidades" valor={String(novas)} descricao="Leads aguardando análise" icone="Bell" />
        <StatCard titulo="Propostas em aberto" valor="2" descricao="Resposta comercial pendente" icone="FileCheck" />
        <StatCard titulo="Serviços aprovados" valor={String(aprovadas)} descricao="Entraram na fila de produção" icone="BadgeCheck" />
        <StatCard titulo="Capacidade semanal" valor="72%" descricao="Indicador demonstrativo" icone="Gauge" />
      </div>
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <CardHeader>
            <CardTitle>Oportunidades qualificadas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {OPORTUNIDADES.map((item) => (
              <div key={item.id} className="rounded-lg border border-line p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-semibold text-charcoal">{item.projeto}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.cliente} · {item.cidade} · {formatarData(item.recebidaEm)}
                    </p>
                  </div>
                  <StatusOportunidadeBadge status={item.status} />
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.servicos.slice(0, 4).map((servico) => (
                    <Badge key={servico} tom="info">
                      {nomeServico(servico)}
                    </Badge>
                  ))}
                  <Badge>{item.volumeEstimado}</Badge>
                  {item.valorSugerido && <Badge tom="success">{formatarReal(item.valorSugerido)}</Badge>}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Visão de capacidade</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <Progress valor={72} rotulo="Seccionadora" />
              <Progress valor={58} rotulo="Coladeira de borda" tom="success" />
              <Progress valor={44} rotulo="Furação e identificação" />
              <p className="text-sm text-muted-foreground">
                Valores ilustrativos para demonstrar como a capacidade poderá apoiar a decisão comercial.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Criar proposta</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="rounded-lg border border-line p-4">
                <p className="font-semibold text-charcoal">Cozinha planejada — apartamento</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Corte, fita de borda, furação e identificação. Prazo desejado: até 8 dias.
                </p>
              </div>
              <BotaoPreparacao variant="accent" className="w-full">
                Enviar proposta
              </BotaoPreparacao>
              <BotaoPreparacao variant="outline" className="w-full">
                Enviar mensagem
              </BotaoPreparacao>
            </CardContent>
          </Card>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Agenda de entrega e fila de produção</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          {["Plano de corte", "Corte e fita de borda", "Separação e entrega"].map((etapa, index) => (
            <div key={etapa} className="rounded-lg border border-line p-4">
              <p className="text-sm font-semibold text-charcoal">{etapa}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {index + 2} pedido(s) demonstrativo(s) na fila.
              </p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
