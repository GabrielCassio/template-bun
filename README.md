# template-bun

## Frontend

O frontend em [`apps/frontend`](./apps/frontend) usa Next.js, React, Tailwind CSS e componentes
shadcn/ui. O ambiente de testes combina Vitest para testes de unidade e Playwright para testes
end-to-end.

```bash
cd apps/frontend
bun install
bun run dev
```

Comandos úteis: `bun run lint`, `bun run typecheck`, `bun run test`, `bun run test:e2e`,
`bun run format:check` e `bun run build`.

## Example API

O serviço em [`apps/example`](./apps/example) é uma API NestJS com Fastify e Drizzle ORM para
PostgreSQL. Configure `DATABASE_URL` a partir de
[`apps/example/.env.example`](./apps/example/.env.example) e execute:

```bash
cd apps/example
bun install
bun run db:push
bun run dev
```

Os endpoints iniciais são `GET /health`, `GET /users` e `POST /users`. Pelo Nginx, eles ficam
disponíveis com o prefixo `/api` (por exemplo, `GET http://localhost:8080/api/health`).
