import * as React from "react";
import { cn } from "@/lib/utils";

interface ProgressProps {
  valor: number; // 0..100
  rotulo?: string;
  className?: string;
  tom?: "primary" | "accent" | "success";
}

/** Barra de progresso simples (ex.: capacidade produtiva). */
export function Progress({ valor, rotulo, className, tom = "primary" }: ProgressProps) {
  const pct = Math.max(0, Math.min(100, valor));
  const cor =
    tom === "accent"
      ? "bg-red"
      : tom === "success"
        ? "bg-emerald-500"
        : "bg-deep-blue";
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      {rotulo && (
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{rotulo}</span>
          <span className="font-medium text-charcoal">{pct}%</span>
        </div>
      )}
      <div
        className="h-2 w-full overflow-hidden rounded-full bg-line"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={rotulo}
      >
        <div
          className={cn("h-full rounded-full transition-[width] duration-500", cor)}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
