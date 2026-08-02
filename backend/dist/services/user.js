"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const prisma_1 = require("../config/prisma");
exports.User = {
    signupS: async (username, hashPswd) => {
        await result;
        await prisma_1.Prisma.User.create({
            data: {
                username: username,
                password: hashPswd
            }
        });
        return result;
    },
    existS: async (username) => {
        await result;
        prisma_1.Prisma.User.findUnique({
            where: {
                username
            }
        });
        return result;
    }
};
//# sourceMappingURL=user.js.map