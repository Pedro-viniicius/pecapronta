"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { PerguntaFaq } from "@/types";

/** Lista de perguntas frequentes em acordeão acessível. */
export function FaqAccordion({ itens }: { itens: PerguntaFaq[] }) {
  return (
    <Accordion type="single" collapsible className="flex flex-col gap-3">
      {itens.map((item, i) => (
        <AccordionItem key={item.pergunta} value={`item-${i}`}>
          <AccordionTrigger>{item.pergunta}</AccordionTrigger>
          <AccordionContent>{item.resposta}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
