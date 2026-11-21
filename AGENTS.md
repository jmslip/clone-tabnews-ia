# AGENTS.md

## Contexto do projeto

Clone do [TabNews](https://www.tabnews.com.br/) construído do zero ao longo do [curso.dev/ia](https://curso.dev/ia) (Filipe Deschamps).

O projeto evolui de forma incremental acompanhando as aulas. Não adicione dependências, ferramentas ou migrações estruturais (como TypeScript, Tailwind, linters ou bibliotecas extras) sem solicitação explícita.

## Stack e convenções

- **Framework:** Next.js com App Router (`app/`) e React.
- **Linguagem:** JavaScript puro (`.js`, sem TypeScript).
- **Estilização:** CSS puro (`app/globals.css`).
- **Gerenciador de pacotes:** `npm` (`package-lock.json`).
- **Idioma:** conteúdo de interface em português do Brasil (`<html lang="pt-BR">`), assim como mensagens de commit e nomes de branches.

## Comandos

```bash
npm run dev    # servidor de desenvolvimento (next dev)
npm run build  # build de produção (next build)
npm run start  # servidor de produção (next start)
```

Use `npm run build` para validar alterações antes de concluir tarefas.

## Estrutura principal

- `app/layout.js` — layout raiz (`pt-BR`), metadata da aplicação e importação de `globals.css`.
- `app/page.js` — página inicial.
- `app/globals.css` — estilos globais.

## Git e deploy

- Branch principal: `main`.
- Este repositório possui **dois remotes**:
  - `origin` (`jmslip/clone-tabnews-ia`) — repositório principal no GitHub.
  - `vercel` (`jmslip/clone-tabnews-ia-jorge`) — repositório conectado à Vercel para deploy e previews.
- Ao executar `git push`, verifique qual remote deve ser atualizado (`origin`, `vercel` ou ambos) quando não estiver explícito.
