"use client";

import * as React from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { usePreparacao } from "@/components/feedback/preparacao-provider";

/**
 * Botão para ações que dependeriam de backend (Entrar, Criar conta, Enviar
 * orçamento, Contratar, etc.). Abre o card "Funcionalidade em preparação".
 */
export const BotaoPreparacao = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ onClick, ...props }, ref) => {
    const { abrir } = usePreparacao();
    return (
      <Button
        ref={ref}
        onClick={(e) => {
          onClick?.(e);
          abrir();
        }}
        {...props}
      />
    );
  },
);
BotaoPreparacao.displayName = "BotaoPreparacao";
