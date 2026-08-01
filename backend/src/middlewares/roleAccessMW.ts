import { AuthRequest } from "../types";
import { Response ,NextFunction } from "express";
import { Role } from "../types";

//in router
export const accessMW = (...allowedRoles : Role[])=>{
    return (req: AuthRequest,res: Response,next: NextFunction)=>{
        if(!req.user.roles){
            return res.status(401).json({message: "unauthorized"});
        }

        const hasPermission = allowedRoles(role => req.user.roles.includes(role));//true even if one among allowed in user.roles

        if(!hasPermission){
            return res.status(403).json({
                message: "insufficient permissions",
                required: allowedRoles,
                found: req.user.roles
            });
        }

        next();
    }
}