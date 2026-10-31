"use client";

import * as React from "react";
import { Filter, Search } from "lucide-react";
import type { Material, ServicoId } from "@/types";
import { PARCEIROS } from "@/data/parceiros";
import { SERVICOS } from "@/data/servicos";
import { cidadesAtendidas, estadosAtendidos } from "@/lib/domain";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { EmptyState } from "@/components/ui/empty-state";
import { PartnerCard } from "@/components/partners/partner-card";

const materiais: Material[] = [
  "MDF",
  "MDP",
  "MDF Ultra",
  "Compensado",
  "Melamínico",
  "Chapa laqueada",
];

export function PartnerCatalog() {
  const [busca, setBusca] = React.useState("");
  const [cidade, setCidade] = React.useState("");
  const [estado, setEstado] = React.useState("");
  const [servico, setServico] = React.useState("");
  const [material, setMaterial] = React.useState("");
  const [entrega, setEntrega] = React.useState("");
  const [lote, setLote] = React.useState("");

  const filtrados = PARCEIROS.filter((parceiro) => {
    const texto = `${parceiro.nome} ${parceiro.cidade} ${parceiro.sobre}`.toLowerCase();
    return (
      texto.includes(busca.toLowerCase()) &&
      (!cidade || parceiro.cidade === cidade) &&
      (!estado || parceiro.estado === estado) &&
      (!servico || parceiro.servicos.includes(servico as ServicoId)) &&
      (!material || parceiro.materiais.includes(material as Material)) &&
      (!entrega || String(parceiro.entregaDisponivel) === entrega) &&
      (!lote || parceiro.capacidade.includes(lote as never))
    );
  });

  return (
    <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
      <aside className="h-fit rounded-lg border border-line bg-white p-5 shadow-sm">
        <div className="mb-5 flex items-center gap-2">
          <Filter className="size-4 text-deep-blue" aria-hidden="true" />
          <h2 className="text-base font-semibold text-charcoal">Filtros</h2>
        </div>
        <div className="space-y-4">
          <label className="block text-sm font-medium">
            Buscar
            <span className="mt-1 flex items-center rounded-md border border-line bg-white px-3">
              <Search className="size-4 text-muted-foreground" aria-hidden="true" />
              <Input
                className="border-0 px-2 shadow-none focus-visible:ring-0"
                value={busca}
                onChange={(event) => setBusca(event.target.value)}
                placeholder="Nome, cidade ou serviço"
              />
            </span>
          </label>
          <label className="block text-sm font-medium">
            Cidade
            <Select value={cidade} onChange={(event) => setCidade(event.target.value)}>
              <option value="">Todas as cidades</option>
              {cidadesAtendidas.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </Select>
          </label>
          <label className="block text-sm font-medium">
            Estado
            <Select value={estado} onChange={(event) => setEstado(event.target.value)}>
              <option value="">Todos os estados</option>
              {estadosAtendidos.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </Select>
          </label>
          <label className="block text-sm font-medium">
            Serviço
            <Select value={servico} onChange={(event) => setServico(event.target.value)}>
              <option value="">Todos os serviços</option>
              {SERVICOS.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.nome}
                </option>
              ))}
            </Select>
          </label>
          <label className="block text-sm font-medium">
            Material
            <Select value={material} onChange={(event) => setMaterial(event.target.value)}>
              <option value="">Todos os materiais</option>
              {materiais.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </Select>
          </label>
          <label className="block text-sm font-medium">
            Entrega
            <Select value={entrega} onChange={(event) => setEntrega(event.target.value)}>
              <option value="">Qualquer opção</option>
              <option value="true">Entrega disponível</option>
              <option value="false">Retirada agendada</option>
            </Select>
          </label>
          <label className="block text-sm font-medium">
            Capacidade
            <Select value={lote} onChange={(event) => setLote(event.target.value)}>
              <option value="">Todos os volumes</option>
              <option value="pequenos">Pequenos lotes</option>
              <option value="medios">Lotes médios</option>
              <option value="grandes">Grandes volumes</option>
            </Select>
          </label>
        </div>
      </aside>
      <div>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              {filtrados.length} parceiro(s) demonstrativo(s) encontrados
            </p>
            <p className="text-sm text-muted-foreground">
              Dados fictícios para validar a experiência de comparação.
            </p>
          </div>
        </div>
        {filtrados.length > 0 ? (
          <div className="grid gap-5 xl:grid-cols-2">
            {filtrados.map((parceiro) => (
              <PartnerCard key={parceiro.slug} parceiro={parceiro} />
            ))}
          </div>
        ) : (
          <EmptyState
            icone="Search"
            titulo="Nenhum parceiro encontrado"
            descricao="Ajuste os filtros para ampliar a busca demonstrativa."
          />
        )}
      </div>
    </div>
  );
}
