import { AuthRequest } from "../types/";
import { Response ,NextFunction } from "express";

export const asyncHandler = (fn)=> (req: AuthRequest,res: Response,next:NextFunction)=>{//return defn
    //direct call with a call
    //in js ok if one arg not pass also
    Promise.resolve(fn(req,res,next)).catch(next);//to next err mw-global err mw
}
