import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  tone?: "light" | "dark";
  className?: string;
  /** Renderiza como link para a página inicial (padrão). */
  href?: string;
}

/** Marca PeçaPronta: painel + confirmação (peças prontas) + acento vermelho. */
export function Logo({ tone = "light", className, href = "/" }: LogoProps) {
  const conteudo = (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        aria-hidden="true"
        className={cn(
          "grid size-9 place-items-center rounded-lg bg-navy",
          tone === "dark" && "ring-1 ring-white/15",
        )}
      >
        <svg viewBox="0 0 32 32" className="size-9">
          <path
            d="M9.5 16.5l4 4 9-10"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x="21" y="6.5" width="5" height="5" rx="1.4" fill="#d7282f" />
        </svg>
      </span>
      <span
        className={cn(
          "text-lg font-bold tracking-tight",
          tone === "dark" ? "text-white" : "text-charcoal",
        )}
      >
        Peça
        <span className={tone === "dark" ? "text-red" : "text-deep-blue"}>
          Pronta
        </span>
      </span>
    </span>
  );

  if (!href) return conteudo;

  return (
    <Link
      href={href}
      className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      aria-label="PeçaPronta — página inicial"
    >
      {conteudo}
    </Link>
  );
}
