"use client";

import * as React from "react";
import { FileText, Lock, Trash2, UploadCloud } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Área de upload SIMULADA. Os arquivos ficam apenas no navegador para
 * demonstrar a interface — nada é enviado a nenhum servidor.
 */
export function FileUploadMock({ id = "arquivos-projeto" }: { id?: string }) {
  const [arquivos, setArquivos] = React.useState<string[]>([]);
  const [arrastando, setArrastando] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  function adicionar(lista: FileList | null) {
    if (!lista) return;
    const nomes = Array.from(lista).map((f) => f.name);
    setArquivos((atual) => [...atual, ...nomes].slice(0, 8));
  }

  return (
    <div className="flex flex-col gap-3">
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setArrastando(true);
        }}
        onDragLeave={() => setArrastando(false)}
        onDrop={(e) => {
          e.preventDefault();
          setArrastando(false);
          adicionar(e.dataTransfer.files);
        }}
        className={cn(
          "flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed px-6 py-8 text-center transition-colors",
          arrastando ? "border-red bg-red/5" : "border-line bg-bg-soft/60",
        )}
      >
        <span className="flex size-11 items-center justify-center rounded-full border border-line bg-white text-deep-blue">
          <UploadCloud className="size-5" aria-hidden="true" />
        </span>
        <p className="text-sm font-medium text-charcoal">
          Arraste os arquivos do projeto aqui
        </p>
        <p className="text-xs text-muted-foreground">
          PDF, DXF, imagens ou planilha de peças — até 8 arquivos
        </p>
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="mt-1 rounded-md border border-line bg-white px-3 py-1.5 text-sm font-medium text-charcoal shadow-sm transition-colors hover:bg-bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Selecionar arquivos
        </button>
        <input
          ref={inputRef}
          id={id}
          type="file"
          multiple
          className="sr-only"
          aria-label="Selecionar arquivos do projeto"
          onChange={(e) => adicionar(e.target.files)}
        />
      </div>

      {arquivos.length > 0 && (
        <ul className="flex flex-col gap-2">
          {arquivos.map((nome, i) => (
            <li
              key={`${nome}-${i}`}
              className="flex items-center justify-between gap-3 rounded-md border border-line bg-white px-3 py-2 text-sm"
            >
              <span className="flex min-w-0 items-center gap-2">
                <FileText className="size-4 shrink-0 text-deep-blue" aria-hidden="true" />
                <span className="truncate text-charcoal">{nome}</span>
              </span>
              <button
                type="button"
                onClick={() => setArquivos((a) => a.filter((_, j) => j !== i))}
                className="rounded p-1 text-muted-foreground transition-colors hover:bg-bg-soft hover:text-red-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label={`Remover ${nome}`}
              >
                <Trash2 className="size-4" />
              </button>
            </li>
          ))}
        </ul>
      )}

      <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <Lock className="size-3.5 shrink-0" aria-hidden="true" />
        Nesta versão demonstrativa, nenhum arquivo é enviado — tudo permanece no seu navegador.
      </p>
    </div>
  );
}
