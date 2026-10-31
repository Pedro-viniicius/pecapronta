import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

const servicosSelecionados = [
  "Plano de corte",
  "Corte de MDF",
  "Fita de borda",
  "Furação",
  "Identificação",
];

/** Simulação visual da solicitação de orçamento (mock + CTA). */
export function QuoteSimulation() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2">
      <div className="flex flex-col gap-6">
        <SectionHeading
          eyebrow="Solicitação de orçamento"
          titulo="Monte a solicitação e receba propostas"
          descricao="Descreva o projeto, escolha os serviços e informe material, medidas e prazo. A partir disso, os parceiros compatíveis podem apresentar propostas para você comparar."
        />
        <ul className="flex flex-col gap-2.5">
          {[
            "Serviços avulsos ou pacote completo",
            "Revisão de tudo antes de enviar",
            "Sem pagamento nesta versão demonstrativa",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-charcoal">
              <CheckCircle2 className="size-4 shrink-0 text-emerald-600" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
        <div>
          <Button asChild variant="accent" size="lg">
            <Link href="/solicitar-orcamento">
              Começar minha solicitação
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Mock do resumo da solicitação */}
      <div className="rounded-xl border border-line bg-white p-6 shadow-lg shadow-navy/5">
        <div className="flex items-center justify-between border-b border-line pb-4">
          <h3 className="font-semibold text-charcoal">Resumo da solicitação</h3>
          <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
            Pronta para propostas
          </span>
        </div>
        <dl className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <dt className="text-xs uppercase tracking-wide text-muted-foreground">
              Projeto
            </dt>
            <dd className="mt-0.5 text-sm font-medium text-charcoal">
              Cozinha planejada
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-muted-foreground">
              Material
            </dt>
            <dd className="mt-0.5 text-sm font-medium text-charcoal">
              MDF 18 mm · MDF Ultra
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-muted-foreground">
              Prazo desejado
            </dt>
            <dd className="mt-0.5 text-sm font-medium text-charcoal">Até 10 dias</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-muted-foreground">
              Localização
            </dt>
            <dd className="mt-0.5 text-sm font-medium text-charcoal">
              São Paulo, SP
            </dd>
          </div>
        </dl>
        <div className="mt-4">
          <dt className="text-xs uppercase tracking-wide text-muted-foreground">
            Serviços
          </dt>
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {servicosSelecionados.map((s) => (
              <li
                key={s}
                className="rounded-full border border-line bg-bg-soft px-2.5 py-1 text-xs font-medium text-charcoal"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-5 rounded-md bg-bg-soft px-3 py-2 text-xs text-muted-foreground">
          Exemplo ilustrativo. Você preenche esses dados no fluxo de solicitação.
        </p>
      </div>
    </div>
  );
}
