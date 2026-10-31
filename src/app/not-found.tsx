import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

export default function NotFound() {
  return (
    <Section>
      <div className="mx-auto max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-red">
          Página não encontrada
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-charcoal">
          Este endereço não faz parte da demonstração.
        </h1>
        <p className="mt-4 text-muted-foreground">
          Volte para a página inicial para acessar os fluxos disponíveis.
        </p>
        <Button asChild variant="accent" className="mt-8">
          <Link href="/">Voltar ao início</Link>
        </Button>
      </div>
    </Section>
  );
}
