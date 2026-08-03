import { PrismaClient } from "@prisma/client";

export const Prisma = new PrismaClient({
    datasource: {
        url: env(process.env.DATABASE_URL)
    }
});

// export { Prisma }-err;// or directly up or default
