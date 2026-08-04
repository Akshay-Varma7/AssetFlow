import { asyncHandler } from "../helper/asyncHandler";
import { Category } from "../services";

export const getCategoryC = asyncHandler(async (req,res)=>{
    const categories = await Category.getCategoryS();

    res.status(200).json(categories);

});

export const createCategoryC = asyncHandler(async (req,res)=>{
    const details = req.body;//1-{ category_name }

    const category = await Category.createCategoryS(details.name);

    res.status(200).json({message: "successfully added category",department});

});

export const deleteCategoryC = asyncHandler(async (req,res)=>{//
    const deptId = req.params.id;//from query 

    const result = await Category.deleteCategoryS(deptId);

    res.status(200).json({message: "successfully deleted category",result});

}) 