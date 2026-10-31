import * as React from "react";
import { cn } from "@/lib/utils";
import { Icone } from "@/components/ui/icone";
import { Label } from "@/components/ui/label";

interface FieldProps {
  label: React.ReactNode;
  htmlFor: string;
  obrigatorio?: boolean;
  opcional?: boolean;
  descricao?: React.ReactNode;
  erro?: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * Envolve um controle de formulário ligando label, descrição e erro por id
 * (aria-describedby / aria-invalid) — acessibilidade correta sem repetição.
 */
export function Field({
  label,
  htmlFor,
  obrigatorio,
  opcional,
  descricao,
  erro,
  className,
  children,
}: FieldProps) {
  const descId = descricao ? `${htmlFor}-desc` : undefined;
  const errId = erro ? `${htmlFor}-err` : undefined;
  const describedBy = [descId, errId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <Label htmlFor={htmlFor} obrigatorio={obrigatorio} opcional={opcional}>
        {label}
      </Label>
      {descricao && (
        <p id={descId} className="text-xs text-muted-foreground">
          {descricao}
        </p>
      )}
      {React.isValidElement(children)
        ? React.cloneElement(
            children as React.ReactElement<Record<string, unknown>>,
            {
              id: htmlFor,
              "aria-describedby": describedBy,
              "aria-invalid": erro ? true : undefined,
            },
          )
        : children}
      {erro && (
        <p
          id={errId}
          role="alert"
          className="flex items-center gap-1 text-xs font-medium text-red-dark"
        >
          <Icone nome="AlertCircle" className="size-3.5 shrink-0" />
          {erro}
        </p>
      )}
    </div>
  );
}
