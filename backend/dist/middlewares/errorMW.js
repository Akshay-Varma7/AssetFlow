"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMw = void 0;
const expressTypes_1 = require("../types/expressTypes");
const express_1 = require("express");
const errorMw = (err, req, res, next) => {
    res.status(500).json({ message: err.message || "error" });
};
exports.errorMw = errorMw;
//# sourceMappingURL=errorMW.js.map