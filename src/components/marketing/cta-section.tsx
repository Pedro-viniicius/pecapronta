import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

interface CtaLink {
  rotulo: string;
  href: string;
}

interface CtaSectionProps {
  titulo: string;
  descricao?: string;
  primario: CtaLink;
  secundario?: CtaLink;
  className?: string;
}

/** Faixa de conversão final (fundo escuro, um CTA dominante). */
export function CtaSection({
  titulo,
  descricao,
  primario,
  secundario,
  className,
}: CtaSectionProps) {
  return (
    <section className={cn("bg-navy py-16 md:py-20", className)}>
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-deep-blue/40 to-navy px-6 py-12 text-center sm:px-12">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-grid-dark opacity-40"
          />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
            <h2 className="text-balance text-2xl font-bold text-white sm:text-3xl">
              {titulo}
            </h2>
            {descricao && (
              <p className="text-pretty text-white/70">{descricao}</p>
            )}
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="accent" size="lg">
                <Link href={primario.href}>
                  {primario.rotulo}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              {secundario && (
                <Button asChild variant="outline-light" size="lg">
                  <Link href={secundario.href}>{secundario.rotulo}</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
