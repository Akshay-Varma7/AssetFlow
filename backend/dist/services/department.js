"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Department = void 0;
const prisma_1 = require("../config/prisma");
exports.Department = {
    getDeptS: async () => {
        const result = await prisma_1.Prisma.Department.findMany({
            include: {
                head: true
            },
        });
        return result;
    },
    createDeptS: async (department_name, head, parent_department) => {
        const result = await prisma_1.Prisma.Department.create({
            data: {
                department_name: department_name,
                head: head,
                parent_department: parent_department
            },
        });
        return result;
    },
    renameDeptS: async (deptId, newDeptName) => {
        const result = await prisma_1.Prisma.Department.update({
            where: {
                id: deptId
            },
            data: {
                department_name: newDeptName
            },
        });
        return result;
    },
    deleteDeptS: async (deptId) => {
        const result = await prisma_1.Prisma.Department.delete({
            where: {
                id: deptId
            },
        });
        return result;
    },
};
//# sourceMappingURL=department.js.map