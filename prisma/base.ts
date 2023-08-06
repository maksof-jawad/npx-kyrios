import { createSchema } from 'schemix';

createSchema({
  datasource: {
    provider: "postgresql",
    url: { env: "DATABASE_URL" },
  },
  generator: [
    {
      name: "client",
      provider: "prisma-client-js",
    }
  ],
  basePath: __dirname,
}).export(__dirname, "schema");