import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Combina classes Tailwind resolvendo conflitos (padrão shadcn). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Formata um valor em reais (R$). */
export function formatarReal(valor: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(valor);
}

/** Formata uma data ISO (YYYY-MM-DD) no padrão brasileiro. */
export function formatarData(iso: string): string {
  const data = new Date(`${iso}T00:00:00`);
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(data);
}

/** Formata um prazo em dias de forma legível. */
export function formatarPrazo(dias: number): string {
  if (dias <= 0) return "Imediato";
  if (dias === 1) return "1 dia útil";
  if (dias < 7) return `${dias} dias úteis`;
  const semanas = Math.round(dias / 7);
  return semanas === 1 ? "cerca de 1 semana" : `cerca de ${semanas} semanas`;
}

/** Gera as iniciais de um nome para avatares/marcadores. */
export function iniciais(nome: string): string {
  return nome
    .split(" ")
    .filter((p) => p.length > 2)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");
}
