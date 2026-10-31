import { GitCompareArrows, MapPin, ShieldCheck, Tags } from "lucide-react";
import { Container } from "@/components/ui/container";

const itens = [
  {
    icone: GitCompareArrows,
    titulo: "Compare sem compromisso",
    texto: "O orçamento é uma consulta, não um contrato.",
  },
  {
    icone: MapPin,
    titulo: "Parceiros por região",
    texto: "Encontre empresas próximas ao projeto ou ao cliente.",
  },
  {
    icone: Tags,
    titulo: "Peças identificadas",
    texto: "Receba as peças catalogadas e prontas para montar.",
  },
  {
    icone: ShieldCheck,
    titulo: "Processo transparente",
    texto: "Cada etapa da produção explicada com clareza.",
  },
];

/** Faixa de sinais de confiança logo abaixo do hero. */
export function TrustBar() {
  return (
    <div className="border-b border-line bg-white">
      <Container className="grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {itens.map(({ icone: Icone, titulo, texto }) => (
          <div key={titulo} className="flex items-start gap-3">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-deep-blue/10 text-deep-blue">
              <Icone className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold text-charcoal">{titulo}</p>
              <p className="text-sm text-muted-foreground">{texto}</p>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
}
