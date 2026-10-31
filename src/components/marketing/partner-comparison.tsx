import Link from "next/link";
import { ArrowRight, Check, Minus, Star } from "lucide-react";
import { PARCEIROS } from "@/data/parceiros";
import { formatarPrazo } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const amostra = PARCEIROS.slice(0, 4);

function Entrega({ disponivel }: { disponivel: boolean }) {
  return disponivel ? (
    <span className="inline-flex items-center gap-1 text-sm text-emerald-700">
      <Check className="size-4" aria-hidden="true" /> Sim
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
      <Minus className="size-4" aria-hidden="true" /> Retirada
    </span>
  );
}

function Avaliacao({ nota }: { nota: number }) {
  return (
    <span className="inline-flex items-center gap-1 text-sm font-medium text-charcoal">
      <Star className="size-4 fill-amber-400 text-amber-400" aria-hidden="true" />
      {nota.toFixed(1)}
    </span>
  );
}

/** Comparação de parceiros: tabela no desktop, cards no mobile. */
export function PartnerComparison() {
  return (
    <div className="flex flex-col gap-8">
      {/* Tabela — telas médias para cima */}
      <div className="hidden overflow-hidden rounded-xl border border-line bg-white md:block">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            Comparação demonstrativa de parceiros de produção
          </caption>
          <thead>
            <tr className="border-b border-line bg-bg-soft text-xs uppercase tracking-wide text-muted-foreground">
              <th scope="col" className="px-5 py-3 font-semibold">
                Parceiro
              </th>
              <th scope="col" className="px-5 py-3 font-semibold">
                Região
              </th>
              <th scope="col" className="px-5 py-3 font-semibold">
                Prazo estimado
              </th>
              <th scope="col" className="px-5 py-3 font-semibold">
                Entrega
              </th>
              <th scope="col" className="px-5 py-3 font-semibold">
                Avaliação
              </th>
              <th scope="col" className="px-5 py-3">
                <span className="sr-only">Ações</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {amostra.map((p) => (
              <tr key={p.slug} className="hover:bg-bg-soft/50">
                <th scope="row" className="px-5 py-4 font-medium text-charcoal">
                  {p.nome}
                </th>
                <td className="px-5 py-4 text-muted-foreground">
                  {p.cidade}, {p.estado}
                </td>
                <td className="px-5 py-4 text-charcoal">
                  {formatarPrazo(p.prazoEstimadoDias)}
                </td>
                <td className="px-5 py-4">
                  <Entrega disponivel={p.entregaDisponivel} />
                </td>
                <td className="px-5 py-4">
                  <Avaliacao nota={p.avaliacao} />
                </td>
                <td className="px-5 py-4 text-right">
                  <Link
                    href={`/parceiros/${p.slug}`}
                    className="text-sm font-medium text-deep-blue hover:underline"
                  >
                    Ver perfil
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cards — mobile */}
      <div className="grid gap-3 md:hidden">
        {amostra.map((p) => (
          <div key={p.slug} className="rounded-lg border border-line bg-white p-4">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="font-semibold text-charcoal">{p.nome}</p>
                <p className="text-sm text-muted-foreground">
                  {p.cidade}, {p.estado}
                </p>
              </div>
              <Avaliacao nota={p.avaliacao} />
            </div>
            <dl className="mt-3 grid grid-cols-2 gap-2 text-sm">
              <div>
                <dt className="text-xs text-muted-foreground">Prazo</dt>
                <dd className="text-charcoal">
                  {formatarPrazo(p.prazoEstimadoDias)}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">Entrega</dt>
                <dd>
                  <Entrega disponivel={p.entregaDisponivel} />
                </dd>
              </div>
            </dl>
            <Link
              href={`/parceiros/${p.slug}`}
              className="mt-3 inline-block text-sm font-medium text-deep-blue hover:underline"
            >
              Ver perfil
            </Link>
          </div>
        ))}
      </div>

      <p className="text-xs text-muted-foreground">
        Dados de parceiros exibidos são ilustrativos e servem para demonstrar a
        comparação.
      </p>

      <div>
        <Button asChild variant="primary" size="lg">
          <Link href="/parceiros">
            Encontrar parceiros para meu projeto
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
