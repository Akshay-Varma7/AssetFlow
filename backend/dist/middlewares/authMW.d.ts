import { AuthRequest } from "../types/index.ts";
import { Response, NextFunction } from "express";
export declare const authMW: (req: AuthRequest, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=authMW.d.ts.map