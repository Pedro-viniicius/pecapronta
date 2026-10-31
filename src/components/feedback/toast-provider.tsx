"use client";

import * as React from "react";
import { CheckCircle2, Info, X } from "lucide-react";
import { cn } from "@/lib/utils";

type TomToast = "info" | "success";

interface Toast {
  id: number;
  titulo: string;
  descricao?: string;
  tom: TomToast;
}

interface ToastContexto {
  toast: (dados: { titulo: string; descricao?: string; tom?: TomToast }) => void;
}

const Contexto = React.createContext<ToastContexto | null>(null);

export function useToast(): ToastContexto {
  const ctx = React.useContext(Contexto);
  if (!ctx) {
    throw new Error("useToast precisa estar dentro de <ToastProvider>");
  }
  return ctx;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([]);
  const proximoId = React.useRef(0);

  const remover = React.useCallback((id: number) => {
    setToasts((atual) => atual.filter((t) => t.id !== id));
  }, []);

  const toast = React.useCallback<ToastContexto["toast"]>(
    ({ titulo, descricao, tom = "info" }) => {
      const id = proximoId.current++;
      setToasts((atual) => [...atual, { id, titulo, descricao, tom }]);
      window.setTimeout(() => remover(id), 4500);
    },
    [remover],
  );

  const valor = React.useMemo(() => ({ toast }), [toast]);

  return (
    <Contexto.Provider value={valor}>
      {children}
      {/* Região viva para leitores de tela — feedback não-bloqueante */}
      <div
        aria-live="polite"
        aria-atomic="false"
        className="pointer-events-none fixed inset-x-0 bottom-0 z-[60] flex flex-col items-center gap-2 p-4 sm:items-end"
      >
        {toasts.map((t) => (
          <div
            key={t.id}
            role="status"
            className="toast-item pointer-events-auto flex w-full max-w-sm items-start gap-3 rounded-lg border border-line bg-white p-4 shadow-lg"
          >
            <span
              aria-hidden="true"
              className={cn(
                "mt-0.5 shrink-0",
                t.tom === "success" ? "text-emerald-600" : "text-deep-blue",
              )}
            >
              {t.tom === "success" ? (
                <CheckCircle2 className="size-5" />
              ) : (
                <Info className="size-5" />
              )}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-charcoal">{t.titulo}</p>
              {t.descricao && (
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {t.descricao}
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={() => remover(t.id)}
              className="rounded p-1 text-muted-foreground transition-colors hover:bg-bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Fechar aviso"
            >
              <X className="size-4" />
            </button>
          </div>
        ))}
      </div>
    </Contexto.Provider>
  );
}
