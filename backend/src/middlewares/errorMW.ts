//no need to wrap this in asynchandler as this is the last none below
import { AuthRequest } from "../types/expressTypes";
import { Error ,Response , NextFunction } from "express";

//or errorMw : ErrorRequestHandler = ()=>{} //already defined but req.username error
export const errorMw = (err: Error,req: AuthRequest,res: Response,next: NextFunction)=>{
    res.status(500).json({message: err.message || "error"});
    //dif and is operational?
}