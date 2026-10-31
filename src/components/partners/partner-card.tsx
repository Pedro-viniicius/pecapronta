import Link from "next/link";
import { ArrowRight, Clock, MapPin, Star, Truck } from "lucide-react";
import type { Parceiro } from "@/types";
import { SERVICOS } from "@/data/servicos";
import { formatarPrazo } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BotaoPreparacao } from "@/components/feedback/botao-preparacao";

function nomesServicos(ids: Parceiro["servicos"]) {
  return ids
    .slice(0, 4)
    .map((id) => SERVICOS.find((servico) => servico.id === id)?.nome)
    .filter(Boolean);
}

export function PartnerCard({ parceiro }: { parceiro: Parceiro }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Dados demonstrativos
            </p>
            <CardTitle className="text-xl">{parceiro.nome}</CardTitle>
          </div>
          <div className="flex items-center gap-1 rounded-md border border-line px-2 py-1 text-sm font-semibold text-charcoal">
            <Star className="size-4 fill-red text-red" aria-hidden="true" />
            {parceiro.avaliacao.toFixed(1)}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-5">
        <p className="text-sm leading-6 text-muted-foreground">{parceiro.sobre}</p>
        <div className="grid gap-2 text-sm text-charcoal sm:grid-cols-2">
          <span className="flex items-center gap-2">
            <MapPin className="size-4 text-deep-blue" aria-hidden="true" />
            {parceiro.cidade}/{parceiro.estado}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="size-4 text-deep-blue" aria-hidden="true" />
            {formatarPrazo(parceiro.prazoEstimadoDias)}
          </span>
          <span className="flex items-center gap-2">
            <Truck className="size-4 text-deep-blue" aria-hidden="true" />
            {parceiro.entregaDisponivel ? "Entrega disponível" : "Retirada agendada"}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {nomesServicos(parceiro.servicos).map((nome) => (
            <Badge key={nome} tom="info">
              {nome}
            </Badge>
          ))}
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Button asChild variant="primary" className="flex-1">
            <Link href={`/parceiros/${parceiro.slug}`}>
              Ver perfil <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
          <BotaoPreparacao variant="outline" className="flex-1">
            Solicitar proposta
          </BotaoPreparacao>
        </div>
      </CardContent>
    </Card>
  );
}
