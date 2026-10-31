"use client";

import * as React from "react";
import { Sparkles } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface PreparacaoContexto {
  /** Abre o card "Funcionalidade em preparação". */
  abrir: () => void;
}

const Contexto = React.createContext<PreparacaoContexto | null>(null);

export function usePreparacao(): PreparacaoContexto {
  const ctx = React.useContext(Contexto);
  if (!ctx) {
    throw new Error("usePreparacao precisa estar dentro de <PreparacaoProvider>");
  }
  return ctx;
}

/**
 * Provider do aviso padrão de funcionalidade ainda não implementada (seção 16).
 * Usado por toda ação que dependeria de backend — nunca `alert()` nativo.
 */
export function PreparacaoProvider({ children }: { children: React.ReactNode }) {
  const [aberto, setAberto] = React.useState(false);
  const abrir = React.useCallback(() => setAberto(true), []);
  const valor = React.useMemo(() => ({ abrir }), [abrir]);

  return (
    <Contexto.Provider value={valor}>
      {children}
      <Dialog open={aberto} onOpenChange={setAberto}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <span
              aria-hidden="true"
              className="mb-1 flex size-12 items-center justify-center rounded-full bg-deep-blue/10 text-deep-blue"
            >
              <Sparkles className="size-6" />
            </span>
            <DialogTitle>Funcionalidade em preparação</DialogTitle>
            <DialogDescription>
              Esta etapa será implementada após a aprovação do site. Nesta versão,
              estamos validando a experiência, o visual e o fluxo de navegação.
            </DialogDescription>
          </DialogHeader>
          <p className="rounded-md border border-line bg-bg-soft px-3.5 py-2.5 text-sm text-muted-foreground">
            Nenhum dado foi enviado e nenhuma ação comercial foi realizada.
          </p>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="primary">Entendi</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Contexto.Provider>
  );
}
