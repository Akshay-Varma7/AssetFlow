//FN-> arg and return
//var 1.inherited(from fn args , 1st defined reasign,lib) 2.US -- define or force
import jwt from "jsonwebtoken";
import { AuthRequest , JwtPayload } from "../types";//from index.ts by def
import { Response ,NextFunction } from "express";
import { asyncHandler } from "../helper/asyncHandler";

const JWT_SECRET = process.env.JWT_SECRET;

export const authMW = (req: AuthRequest,res: Response,next: NextFunction)=>{
    const token = req.cookies?.token;

    //throw is captured by asyncHandler
    if(!token){
        return res.status(401).json({message: "UnAuthorized", isOperational: true});//instead of after return 
        // throw new ApiError(401,"UnAuthorized",true);
    }

    const decoded = jwt.verify(token,JWT_SECRET) as JwtPayload;//as & not decoded: JwtPayload 
    //throw error if fail 
    //ntg or obj/string
    if(!decoded){
        return res.status(403).json({message: "Invalid Token", isOperational: true});
    }
    req.user = decoded;//.username and .roles and .userId

    next();
}