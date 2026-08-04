//screen 3
import { asyncHandler } from "../helper/asyncHandler";
import { Person } from "../services";

export const getPersonC = asyncHandler(async (req,res)=>{
    const persons = await Person.getPersonS();

    res.status(200).json(persons);
});

export const updatePersonC = asyncHandler(async (req,res)=>{
    const personId = req.params.id;//from query 
    const { newRole } = req.body;

    const result = await Person.updatePersonS(personId,newRole);//enum or what?

    res.status(200).json({message: "successfully updated person's role",result});

}) 
//no need to delete person then: resigned true ,->future
