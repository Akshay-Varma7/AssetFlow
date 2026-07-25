//screen 3
import { asyncHandler } from "../helper/asyncHandler";
import { getDeptS , createDeptS , renameDeptS , deleteDeptS } from "../services";

export const createDept = asyncHandler(async (req,res)={
    const departments = await getDeptS();//future: related to one org

    res.status(200).json(departments);

}) 

export const createDept = asyncHandler(async (req,res)={
    const details = req.body;//3-{ department_name ,head ,parent_department }

    const department = await createDeptS(details);

    res.status(200).json({message: "successfully added department",department});

}) 

export const renameDept = asyncHandler(async (req,res)={
    const deptId = req.params.id;//from query 
    const { newDeptName } = req.body;

    const result = await renameDeptS(deptId,newDeptName);

    res.status(200).json({message: "successfully renamed department",result});

}) 

export const deleteDept = asyncHandler(async (req,res)={//
    const deptId = req.params.id;//from query 

    const result = await deleteDeptS(deptId);

    res.status(200).json({message: "successfully deleted department",result});

}) 
