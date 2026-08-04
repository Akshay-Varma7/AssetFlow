//balance btw writing 40 and new learning 60
// import type Department = require("../generated/prisma/browser");-browser?
// import type browser = require("../generated/prisma/browser");
import { Prisma } from "../config/prisma";
import { Department } from "../generated/prisma/client";

export const Department = {

    //func contract-return and input
    getDeptS : async () : Promise<Department[]> =>{//empty [] acceptable
        const result = await  Prisma.Department.findMany({// or findMany()
            include: {
                head: true
            },
        })
        return result;
    },
    createDeptS : async (department_name,head,parent_department) : Promise<Department | null> =>{
        const result = await  Prisma.Department.create({
            data: {
                department_name: department_name,
                head: head,//not req.user.userId
                parent_department: parent_department
            },
        })
        return result;
    },
    renameDeptS : async (deptId,newDeptName) : Promise<Department | null> =>{
        const result = await  Prisma.Department.update({
            where: {
                id: deptId
            },
            data: {
                department_name: newDeptName
            },
        })
        return result;
    },
    deleteDeptS : async (Id) : Promise<Department | null> =>{
        const result = await Prisma.Department.delete({
            where: {
                id: Id
            },
        })
        return result;
    },
}