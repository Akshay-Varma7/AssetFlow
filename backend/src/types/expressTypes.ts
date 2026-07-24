import { Request, Response, NextFunction } from "express";
import { Role } from "../types";
import type JwtPayload = require("../types");

export interface AuthRequest extends Request {
    user: JwtPayload
}