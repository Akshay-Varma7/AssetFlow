"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accessMW = void 0;
const types_1 = require("../types");
const express_1 = require("express");
const types_2 = require("../types");
const accessMW = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req.user.roles) {
            return res.status(401).json({ message: "unauthorized" });
        }
        const hasPermission = allowedRoles(role => req.user.roles.includes(role));
        if (!hasPermission) {
            return res.status(403).json({
                message: "insufficient permissions",
                required: allowedRoles,
                found: req.user.roles
            });
        }
        next();
    };
};
exports.accessMW = accessMW;
//# sourceMappingURL=roleAccessMW.js.map