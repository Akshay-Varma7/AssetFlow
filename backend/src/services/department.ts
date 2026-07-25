//balance btw writing 40 and new learning 60
import { Prisma } from "../config/prisma";

export const getDeptS = async ()=>{
    const result = await  Prisma.Department.findMany({// or findMany()
        include: {
            head: true
        },
    })
    return result;
}
export const createDeptS = async (department_name,head,parent_department)=>{
    const result = await  Prisma.Department.create({
        data: {
            department_name: department_name,
            head: head,//not req.user.userId
            parent_department: parent_department
        },
    })
    return result;
}
export const renameDeptS = async (deptId,newDeptName)=>{
    const result = await  Prisma.Department.update({
        where: {
            id: deptId
        },
        data: {
            department_name: newDeptName
        },
    })
    return result;
}
export const deleteDeptS = async (deptId)=>{
    const result = await Prisma.Department.delete({
        where: {
            id: deptId
        },
    })
    return result;
}