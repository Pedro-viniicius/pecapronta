"use client";

import * as React from "react";
import { ToastProvider } from "@/components/feedback/toast-provider";
import { PreparacaoProvider } from "@/components/feedback/preparacao-provider";

/** Agrupa os providers globais do app (feedback ao usuário). */
export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider>
      <PreparacaoProvider>{children}</PreparacaoProvider>
    </ToastProvider>
  );
}
