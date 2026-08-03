//screen 3
import { asyncHandler } from "../helper/asyncHandler";
import { Department } from "../services";

export const getDeptC = asyncHandler(async (req,res)=>{
    const departments: = await Department.getDeptS();//future: related to one org

    res.status(200).json(departments);

});

export const createDeptC = asyncHandler(async (req,res)=>{
    const details = req.body;//3-{ department_name ,head ,parent_department }

    const department = await Department.createDeptS(details);

    res.status(200).json({message: "successfully added department",department});

});

export const renameDeptC = asyncHandler(async (req,res)=>{
    const deptId = req.params.id;//from query 
    const { newDeptName } = req.body;

    const result = await Department.renameDeptS(deptId,newDeptName);

    res.status(200).json({message: "successfully renamed department",result});

}) 

export const deleteDeptC = asyncHandler(async (req,res)=>{//
    const deptId = req.params.id;//from query 

    const result = await Department.deleteDeptS(deptId);

    res.status(200).json({message: "successfully deleted department",result});

}) 
