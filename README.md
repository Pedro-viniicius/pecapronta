# PeçaPronta

Frontend MVP de um marketplace B2B para conectar marceneiros, projetistas e pequenos negócios de móveis planejados a empresas terceirizadas de produção, como centros de corte, fábricas, usinagem CNC, fita de borda, identificação, embalagem e entrega.

Esta versão é uma demonstração 100% frontend. Não há autenticação real, backend, banco de dados, pagamento, envio de arquivos ou solicitação comercial real.

## Stack

- Next.js 16 com App Router
- TypeScript
- Tailwind CSS v4
- Componentes React inspirados em shadcn/ui
- Radix UI para dialog, drawer, accordion, tabs e label
- Lucide React para ícones
- Zod para validação local do fluxo de orçamento
- Dados simulados em arquivos locais

## Rotas implementadas

- `/` — página inicial
- `/como-funciona` — explicação do fluxo
- `/para-marceneiros` — benefícios e dores do público comprador
- `/para-parceiros` — experiência para empresas de produção
- `/solicitar-orcamento` — fluxo multi-etapas demonstrativo
- `/parceiros` — catálogo com filtros locais
- `/parceiros/[slug]` — perfil demonstrativo de parceiro
- `/demonstracao/marceneiro` — painel demonstrativo do marceneiro
- `/demonstracao/parceiro` — painel demonstrativo do parceiro
- `/privacidade` — texto demonstrativo
- `/termos` — texto demonstrativo

## Funcionalidades demonstrativas

- Catálogo de parceiros fictícios com filtros por cidade, estado, serviço, material, entrega e capacidade.
- Perfil de parceiro com serviços, materiais, máquinas, região, prazos e chamada para proposta.
- Formulário de orçamento em 9 etapas com validação local e revisão antes da finalização.
- Upload simulado: nenhum arquivo é enviado.
- Painel do marceneiro com projetos, propostas, status, timeline de produção e mensagens recentes.
- Painel do parceiro com oportunidades, capacidade produtiva, fila e criação simulada de proposta.
- Modal global “Funcionalidade em preparação” para ações que dependem de backend.

## Como executar

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Validação

```bash
npm run typecheck
npm run lint
npm run build
```

O projeto não inclui testes automatizados nesta fase. A validação principal é feita por typecheck, lint, build e navegação manual das rotas demonstrativas.

## Limitações intencionais

- Nenhum dado é enviado para servidor.
- Não há autenticação, cadastro real ou recuperação de senha.
- Não há pagamentos, contratação, proposta comercial real ou rastreio de entrega.
- Parceiros, avaliações, prazos, projetos e mensagens são fictícios.
- Documentos de privacidade e termos são placeholders responsáveis para o MVP.

## Preparado para backend futuro

Os dados simulados ficam separados em `src/data`, os tipos de domínio em `src/types` e as ações dependentes de backend passam por componentes centralizados. Isso facilita substituir mocks por APIs reais sem reescrever a interface inteira.
