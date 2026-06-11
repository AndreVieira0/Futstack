# Futstack

E-commerce de artigos esportivos com frontend em React/Vite e API em NestJS.

## Estrutura

```text
Futstack/
  api-futstack/        # API NestJS
    src/
    test/
    package.json
  front-end/           # Aplicacao React + Vite
    public/
    src/
      assets/
      components/
      data/
      pages/
    package.json
  package.json         # Scripts de atalho para desenvolvimento
  README.md
```

## Stack

- Frontend: React, Vite e Tailwind CSS
- Backend: NestJS
- Gerenciador de pacotes: npm

## Como Rodar

Instale as dependencias de cada projeto:

```bash
npm install --prefix front-end
npm install --prefix api-futstack
```

Rode o frontend:

```bash
npm run dev:front
```

Rode a API:

```bash
npm run dev:api
```

Comandos uteis:

```bash
npm run build:front
npm run build:api
npm run lint:front
npm run lint:api
npm run test:api
```

## Organizacao Recomendada

- `front-end/src/components`: componentes reutilizaveis da interface.
- `front-end/src/pages`: telas principais da aplicacao.
- `front-end/src/data`: dados mockados ou estaticos temporarios.
- `front-end/public`: imagens e assets servidos diretamente pelo Vite.
- `api-futstack/src`: modulos, controllers e services da API.
- `api-futstack/test`: testes e2e do backend.

Para novas funcionalidades, prefira manter frontend e backend separados e conectar os dois por chamadas HTTP quando a API estiver pronta.
