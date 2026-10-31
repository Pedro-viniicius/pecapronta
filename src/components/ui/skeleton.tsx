import * as React from "react";
import { cn } from "@/lib/utils";

/** Placeholder de carregamento. */
export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      aria-hidden="true"
      className={cn("animate-pulse rounded-md bg-line/60", className)}
      {...props}
    />
  );
}
