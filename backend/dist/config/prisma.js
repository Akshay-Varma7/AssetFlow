"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prisma = void 0;
const client_1 = require("@prisma/client");
exports.Prisma = new client_1.PrismaClient({
    datasource: {
        url: env(process.env.DATABASE_URL)
    }
});
//# sourceMappingURL=prisma.js.map