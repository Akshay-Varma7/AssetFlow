//change to es module as in package.json-entire appn

import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: { path: "prisma/migrations" },
  datasource: { url: process.env.DATABASE_URL },
});   

// "use strict";-1
// Object.defineProperty(exports, "__esModule", { value: true });-2

// require("dotenv/config");
// const config_1 = require("prisma/config");
// exports.default = (0, config_1.defineConfig)({
//     schema: "prisma/schema.prisma",
//     migrations: {
//         path: "prisma/migrations",
//     },
//     datasource: {
//         url: process.env["DATABASE_URL"],
//     },
// });
// //# sourceMappingURL=prisma.config.js.map