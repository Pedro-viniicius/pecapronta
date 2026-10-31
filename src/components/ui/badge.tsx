import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { Tom } from "@/types";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium",
  {
    variants: {
      tom: {
        neutral: "border-line bg-secondary text-muted-foreground",
        info: "border-blue-200 bg-blue-50 text-deep-blue",
        success: "border-emerald-200 bg-emerald-50 text-emerald-700",
        warning: "border-amber-200 bg-amber-50 text-amber-700",
        accent: "border-red/25 bg-red/10 text-red-dark",
      } satisfies Record<Tom, string>,
    },
    defaultVariants: { tom: "neutral" },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  /** Exibe um pontinho colorido antes do texto. */
  ponto?: boolean;
}

export function Badge({ className, tom, ponto, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ tom }), className)} {...props}>
      {ponto && (
        <span
          aria-hidden="true"
          className="size-1.5 rounded-full bg-current opacity-70"
        />
      )}
      {children}
    </span>
  );
}
