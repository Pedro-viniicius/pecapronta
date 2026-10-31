"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "@/lib/utils";

export const Label = React.forwardRef<
  React.ComponentRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & {
    obrigatorio?: boolean;
    opcional?: boolean;
  }
>(({ className, children, obrigatorio, opcional, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      "flex items-center gap-1.5 text-sm font-medium text-charcoal",
      className,
    )}
    {...props}
  >
    {children}
    {obrigatorio && (
      <span className="text-red" aria-hidden="true">
        *
      </span>
    )}
    {opcional && (
      <span className="text-xs font-normal text-muted-foreground">
        (opcional)
      </span>
    )}
  </LabelPrimitive.Root>
));
Label.displayName = "Label";
