import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient({
    datasource: {
        url: env(process.env.DATABASE_URL)
    }
});

export { Prisma };// or directly up or default
