import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  tone?: "default" | "soft" | "navy" | "charcoal";
  /** Desativa o Container interno para conteúdo full-bleed. */
  semContainer?: boolean;
  containerClassName?: string;
}

/** Faixa de seção com espaçamento vertical e fundo consistentes. */
export function Section({
  tone = "default",
  semContainer,
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  const bg =
    tone === "soft"
      ? "bg-bg-soft"
      : tone === "navy"
        ? "bg-navy text-white"
        : tone === "charcoal"
          ? "bg-charcoal text-white"
          : "bg-white";

  return (
    <section className={cn("py-16 md:py-24", bg, className)} {...props}>
      {semContainer ? (
        children
      ) : (
        <Container className={containerClassName}>{children}</Container>
      )}
    </section>
  );
}
