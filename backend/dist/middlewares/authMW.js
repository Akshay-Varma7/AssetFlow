"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMW = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const index_ts_1 = require("../types/index.ts");
const express_1 = require("express");
const asyncHandler_1 = require("../helper/asyncHandler");
const JWT_SECRET = process.env.JWT_SECRET;
const authMW = (req, res, next) => {
    const token = req.cookies?.token;
    if (!token) {
        return res.status(401).json({ message: "UnAuthorized", isOperational: true });
    }
    const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
    if (!decoded) {
        return res.status(403).json({ message: "Invalid Token", isOperational: true });
    }
    req.user = decoded;
    next();
};
exports.authMW = authMW;
//# sourceMappingURL=authMW.js.map