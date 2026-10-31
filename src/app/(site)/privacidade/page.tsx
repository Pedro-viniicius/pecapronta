import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Privacidade",
  description: "Política de privacidade demonstrativa da PeçaPronta.",
};

export default function PrivacidadePage() {
  return (
    <Section>
      <article className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Documento demonstrativo"
          titulo="Privacidade"
          descricao="Esta página é um texto-base para o protótipo frontend. A versão final deve ser revisada juridicamente antes da publicação."
        />
        <div className="mt-8 space-y-5 text-sm leading-7 text-muted-foreground">
          <p>
            Na versão demonstrativa da PeçaPronta, os formulários não enviam dados
            para servidor, não criam contas reais e não realizam ações comerciais.
          </p>
          <p>
            As informações inseridas no fluxo de orçamento servem apenas para
            validar a experiência visual e permanecem no navegador durante a navegação.
          </p>
          <p>
            Em uma futura integração, a coleta, o armazenamento e o compartilhamento
            de dados deverão ser descritos com clareza, incluindo finalidade,
            retenção, bases legais e canais de atendimento.
          </p>
        </div>
      </article>
    </Section>
  );
}
