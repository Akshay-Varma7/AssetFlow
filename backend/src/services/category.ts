import { Prisma } from "../config/prisma";
import {  Category as CategoryT  } from "../generated/prisma/client";

export const Category = {

    //func contract-return and input
    getCategoryS : async () : Promise<CategoryT[]> =>{//empty [] acceptable
        const result = await  Prisma.Category.findMany({// or findMany()
            // include: {
            //     head: true
            // },
        })
        return result;
    },
    createCategoryS : async (category_name) : Promise<CategoryT | null> =>{
        const result = await  Prisma.Category.create({
            data: {
               name: category_name
            },
        })
        return result;
    },
    deleteCategoryS : async (Id) : Promise<CategoryT | null> =>{
        const result = await Prisma.Category.delete({
            where: {
                id: Id
            },
        })
        return result;
    },
}