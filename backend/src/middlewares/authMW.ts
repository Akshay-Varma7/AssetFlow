//FN-> arg and return
//var 1.inherited(from fn args , 1st defined reasign,lib) 2.US -- define or force
import jwt from "jsonwebtoken";
import { AuthRequest , JwtPayload } from "../types";//from index.ts by def
import { Response ,NextFunction } from "express";
import { asyncHandler } from "../helper/asyncHandler";

const JWT_SECRET = process.env.JWT_SECRET;

export const authMW = asyncHandler((req: AuthRequest,res: Response,next: NextFunction)=>{
    const token = req.cookies?.token;

    //throw is captured by asyncHandler
    if(!token){
        // return res.status(404).json({message: "UnAuthorized"});//instead of after return 
        throw new ApiError(401,"UnAuthorized",true);
    }

    const decoded = jwt.verify(token,JWT_SECRET) as JwtPayload;//as & not decoded: JwtPayload 
    //ntg or obj/string
    if(!decoded){
        throw new ApiError(403,"Invalid Token",true);
    }
    req.username = decoded.username;

    next();
})