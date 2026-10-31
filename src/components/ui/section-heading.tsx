import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  titulo: React.ReactNode;
  descricao?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  /** Nível do heading para hierarquia semântica correta. */
  as?: "h1" | "h2" | "h3";
  className?: string;
}

/** Bloco de título de seção: eyebrow + heading + descrição. */
export function SectionHeading({
  eyebrow,
  titulo,
  descricao,
  align = "left",
  tone = "light",
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  const escuro = tone === "dark";
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em]",
            escuro ? "text-red" : "text-red-dark",
          )}
        >
          <span aria-hidden className="h-px w-6 bg-current opacity-60" />
          {eyebrow}
        </span>
      )}
      <Tag
        className={cn(
          "text-balance text-2xl font-bold sm:text-3xl md:text-4xl",
          escuro ? "text-white" : "text-charcoal",
        )}
      >
        {titulo}
      </Tag>
      {descricao && (
        <p
          className={cn(
            "max-w-2xl text-pretty text-base leading-relaxed",
            align === "center" && "mx-auto",
            escuro ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {descricao}
        </p>
      )}
    </div>
  );
}
