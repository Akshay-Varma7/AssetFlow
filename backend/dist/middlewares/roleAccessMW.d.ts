import { AuthRequest } from "../types";
import { Response, NextFunction } from "express";
import { Role } from "../types";
export declare const accessMW: (...allowedRoles: Role[]) => (req: AuthRequest, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=roleAccessMW.d.ts.map