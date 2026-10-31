"use client";

import * as React from "react";
import { z } from "zod";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import type { TipoUsuario } from "@/types";
import { SERVICOS } from "@/data/servicos";
import { usePreparacao } from "@/components/feedback/preparacao-provider";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { FileUploadMock } from "@/components/ui/file-upload-mock";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Select } from "@/components/ui/select";
import { Stepper } from "@/components/ui/stepper";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const etapas = [
  "Perfil",
  "Projeto",
  "Materiais",
  "Serviços",
  "Volume",
  "Localização",
  "Prazo",
  "Contato",
  "Revisão",
];

const schema = z.object({
  tipoUsuario: z.enum(["marceneiro", "parceiro"]),
  nomeProjeto: z.string().min(3, "Informe o nome do projeto."),
  descricao: z.string().min(10, "Descreva o projeto com um pouco mais de detalhe."),
  material: z.string().min(1, "Selecione um material."),
  servicos: z.array(z.string()).min(1, "Selecione pelo menos um serviço."),
  volume: z.string().min(2, "Informe uma estimativa de volume."),
  cidade: z.string().min(2, "Informe a cidade."),
  estado: z.string().min(2, "Informe o estado."),
  prazo: z.string().min(1, "Selecione o prazo desejado."),
  nome: z.string().min(3, "Informe seu nome."),
  telefone: z.string().min(8, "Informe um telefone para contato."),
  email: z.string().email("Informe um e-mail válido."),
});

type QuoteState = z.infer<typeof schema>;

const inicial: QuoteState = {
  tipoUsuario: "marceneiro",
  nomeProjeto: "",
  descricao: "",
  material: "",
  servicos: [],
  volume: "",
  cidade: "",
  estado: "",
  prazo: "",
  nome: "",
  telefone: "",
  email: "",
};

const camposPorEtapa: (keyof QuoteState)[][] = [
  ["tipoUsuario"],
  ["nomeProjeto", "descricao"],
  ["material"],
  ["servicos"],
  ["volume"],
  ["cidade", "estado"],
  ["prazo"],
  ["nome", "telefone", "email"],
  [],
];

export function QuoteForm() {
  const [etapa, setEtapa] = React.useState(0);
  const [dados, setDados] = React.useState<QuoteState>(inicial);
  const [erros, setErros] = React.useState<Record<string, string>>({});
  const { abrir } = usePreparacao();

  const progresso = Math.round(((etapa + 1) / etapas.length) * 100);

  function atualizar<K extends keyof QuoteState>(campo: K, valor: QuoteState[K]) {
    setDados((atual) => ({ ...atual, [campo]: valor }));
    setErros((atual) => ({ ...atual, [campo]: "" }));
  }

  function validarEtapa(indice = etapa) {
    const resultado = schema.safeParse(dados);
    if (resultado.success) {
      setErros({});
      return true;
    }
    const campos = camposPorEtapa[indice];
    const proximos: Record<string, string> = {};
    for (const issue of resultado.error.issues) {
      const campo = String(issue.path[0]);
      if (campos.includes(campo as keyof QuoteState)) proximos[campo] = issue.message;
    }
    setErros(proximos);
    return Object.keys(proximos).length === 0;
  }

  function avancar() {
    if (!validarEtapa()) return;
    setEtapa((atual) => Math.min(atual + 1, etapas.length - 1));
  }

  function finalizar() {
    if (!schema.safeParse(dados).success) {
      validarEtapa(7);
      setEtapa(7);
      return;
    }
    abrir();
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
      <aside className="h-fit rounded-lg border border-line bg-white p-5 shadow-sm">
        <Stepper etapas={etapas} atual={etapa} onIrPara={(i) => i < etapa && setEtapa(i)} />
        <Progress valor={progresso} rotulo={`${progresso}% concluído`} className="mt-6" />
        <p className="mt-4 text-sm text-muted-foreground">
          Seus dados serão usados apenas para simular a solicitação neste protótipo.
        </p>
      </aside>
      <section className="rounded-lg border border-line bg-white p-5 shadow-sm sm:p-7">
        {etapa === 0 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-charcoal">Qual é o seu perfil?</h2>
            {(["marceneiro", "parceiro"] as TipoUsuario[]).map((tipo) => (
              <button
                key={tipo}
                type="button"
                onClick={() => atualizar("tipoUsuario", tipo)}
                className={`w-full rounded-lg border p-4 text-left transition ${
                  dados.tipoUsuario === tipo ? "border-red bg-red/5" : "border-line"
                }`}
              >
                <span className="font-semibold">
                  {tipo === "marceneiro" ? "Sou marceneiro ou projeto móveis" : "Sou parceiro de produção"}
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">
                  {tipo === "marceneiro"
                    ? "Quero receber propostas para produzir peças."
                    : "Quero entender como receber oportunidades qualificadas."}
                </span>
              </button>
            ))}
          </div>
        )}
        {etapa === 1 && (
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold text-charcoal">Informações do projeto</h2>
            <Field label="Nome do projeto" htmlFor="nomeProjeto" erro={erros.nomeProjeto} obrigatorio>
              <Input id="nomeProjeto" value={dados.nomeProjeto} onChange={(e) => atualizar("nomeProjeto", e.target.value)} placeholder="Ex.: Cozinha planejada - apartamento" />
            </Field>
            <Field label="Descrição técnica" htmlFor="descricao" erro={erros.descricao} obrigatorio>
              <Textarea id="descricao" value={dados.descricao} onChange={(e) => atualizar("descricao", e.target.value)} placeholder="Informe ambiente, sistema de montagem, observações e arquivos disponíveis." />
            </Field>
            <FileUploadMock />
          </div>
        )}
        {etapa === 2 && (
          <Field label="Material principal" htmlFor="material" erro={erros.material} obrigatorio>
            <Select id="material" value={dados.material} onChange={(e) => atualizar("material", e.target.value)}>
              <option value="">Selecione</option>
              {["MDF", "MDP", "MDF Ultra", "Compensado", "Melamínico", "Chapa laqueada"].map((m) => (
                <option key={m}>{m}</option>
              ))}
            </Select>
          </Field>
        )}
        {etapa === 3 && (
          <div>
            <h2 className="text-2xl font-semibold text-charcoal">Serviços desejados</h2>
            {erros.servicos && <p className="mt-2 text-sm text-red-dark">{erros.servicos}</p>}
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {SERVICOS.map((servico) => {
                const ativo = dados.servicos.includes(servico.id);
                return (
                  <button
                    key={servico.id}
                    type="button"
                    onClick={() =>
                      atualizar(
                        "servicos",
                        ativo
                          ? dados.servicos.filter((id) => id !== servico.id)
                          : [...dados.servicos, servico.id],
                      )
                    }
                    className={`rounded-lg border p-4 text-left transition ${
                      ativo ? "border-red bg-red/5" : "border-line"
                    }`}
                  >
                    <span className="font-semibold">{servico.nome}</span>
                    <span className="mt-1 block text-sm text-muted-foreground">{servico.descricao}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
        {etapa === 4 && (
          <Field label="Medidas ou estimativa de volume" htmlFor="volume" erro={erros.volume} obrigatorio>
            <Textarea id="volume" value={dados.volume} onChange={(e) => atualizar("volume", e.target.value)} placeholder="Ex.: 6 chapas MDF 18mm, 2 ambientes, cerca de 80 peças." />
          </Field>
        )}
        {etapa === 5 && (
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Cidade" htmlFor="cidade" erro={erros.cidade} obrigatorio>
              <Input id="cidade" value={dados.cidade} onChange={(e) => atualizar("cidade", e.target.value)} placeholder="Sua cidade" />
            </Field>
            <Field label="Estado" htmlFor="estado" erro={erros.estado} obrigatorio>
              <Input id="estado" value={dados.estado} onChange={(e) => atualizar("estado", e.target.value.toUpperCase())} placeholder="UF" maxLength={2} />
            </Field>
          </div>
        )}
        {etapa === 6 && (
          <Field label="Prazo desejado" htmlFor="prazo" erro={erros.prazo} obrigatorio>
            <Select id="prazo" value={dados.prazo} onChange={(e) => atualizar("prazo", e.target.value)}>
              <option value="">Selecione</option>
              <option>Até 5 dias úteis</option>
              <option>Até 10 dias úteis</option>
              <option>Até 20 dias úteis</option>
              <option>Sem urgência</option>
            </Select>
          </Field>
        )}
        {etapa === 7 && (
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Nome" htmlFor="nome" erro={erros.nome} obrigatorio>
              <Input id="nome" value={dados.nome} onChange={(e) => atualizar("nome", e.target.value)} />
            </Field>
            <Field label="Telefone" htmlFor="telefone" erro={erros.telefone} obrigatorio>
              <Input id="telefone" value={dados.telefone} onChange={(e) => atualizar("telefone", e.target.value)} />
            </Field>
            <Field label="E-mail" htmlFor="email" erro={erros.email} obrigatorio>
              <Input id="email" type="email" value={dados.email} onChange={(e) => atualizar("email", e.target.value)} />
            </Field>
          </div>
        )}
        {etapa === 8 && (
          <div>
            <div className="flex items-center gap-2 text-emerald-700">
              <CheckCircle2 aria-hidden="true" />
              <h2 className="text-2xl font-semibold text-charcoal">Revise sua solicitação</h2>
            </div>
            <dl className="mt-6 grid gap-4 sm:grid-cols-2">
              {Object.entries({
                "Projeto": dados.nomeProjeto,
                "Material": dados.material,
                "Volume": dados.volume,
                "Localização": `${dados.cidade}/${dados.estado}`,
                "Prazo": dados.prazo,
                "Contato": `${dados.nome} · ${dados.email}`,
              }).map(([termo, valor]) => (
                <div key={termo} className="rounded-lg border border-line p-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{termo}</dt>
                  <dd className="mt-1 text-sm text-charcoal">{valor || "Não informado"}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-5 flex flex-wrap gap-2">
              {dados.servicos.map((id) => (
                <Badge key={id} tom="info">
                  {SERVICOS.find((s) => s.id === id)?.nome ?? id}
                </Badge>
              ))}
            </div>
            <p className="mt-6 rounded-lg bg-bg-soft p-4 text-sm text-muted-foreground">
              Nenhum pagamento será realizado nesta versão demonstrativa. Você poderá revisar todas as informações antes de enviar em uma versão integrada.
            </p>
          </div>
        )}
        <div className="mt-8 flex flex-col-reverse gap-3 border-t border-line pt-5 sm:flex-row sm:justify-between">
          <Button variant="outline" disabled={etapa === 0} onClick={() => setEtapa((atual) => Math.max(0, atual - 1))}>
            <ArrowLeft aria-hidden="true" />
            Voltar
          </Button>
          {etapa < etapas.length - 1 ? (
            <Button variant="accent" onClick={avancar}>
              Avançar para {etapas[etapa + 1]} <ArrowRight aria-hidden="true" />
            </Button>
          ) : (
            <Button variant="accent" onClick={finalizar}>
              Enviar orçamento demonstrativo
            </Button>
          )}
        </div>
      </section>
    </div>
  );
}
