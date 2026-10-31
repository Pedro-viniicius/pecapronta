import Link from "next/link";
import { ArrowRight, ShieldCheck, MapPin, PackageCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ProductShowcase } from "@/components/marketing/product-showcase";

const destaques = [
  { icone: ShieldCheck, texto: "Compare antes de contratar" },
  { icone: MapPin, texto: "Parceiros por região" },
  { icone: PackageCheck, texto: "Peças prontas para montagem" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div aria-hidden="true" className="absolute inset-0 bg-grid-dark opacity-70" />
      <div
        aria-hidden="true"
        className="absolute -right-32 -top-32 -z-0 size-96 rounded-full bg-deep-blue/30 blur-3xl"
      />
      <Container className="relative grid items-center gap-12 py-16 md:py-20 lg:grid-cols-2 lg:gap-10 lg:py-24">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
            <span className="size-1.5 rounded-full bg-red" />
            Do projeto às peças prontas para montagem
          </span>

          <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            Transforme projetos de móveis em{" "}
            <span className="text-red">peças prontas</span> para montagem.
          </h1>

          <p className="max-w-xl text-pretty text-lg leading-relaxed text-white/75">
            Conectamos marceneiros a empresas especializadas em plano de corte,
            corte de painéis, usinagem, acabamento, identificação e entrega. Envie
            o projeto, receba propostas e contrate o parceiro certo.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild variant="accent" size="lg">
              <Link href="/solicitar-orcamento">
                Solicitar orçamento
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline-light" size="lg">
              <Link href="/parceiros">Encontrar parceiros</Link>
            </Button>
            <Button
              asChild
              variant="link"
              size="lg"
              className="text-white hover:text-white"
            >
              <Link href="/para-parceiros">Quero oferecer meus serviços</Link>
            </Button>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
            {destaques.map(({ icone: Icone, texto }) => (
              <li
                key={texto}
                className="flex items-center gap-2 text-sm text-white/70"
              >
                <Icone className="size-4 text-red" aria-hidden="true" />
                {texto}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:pl-6">
          <ProductShowcase />
        </div>
      </Container>
    </section>
  );
}
