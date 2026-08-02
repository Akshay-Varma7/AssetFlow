"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expressTypes_1 = require("../types/expressTypes");
const express_1 = require("express");
errorMw = (err, req, res, next) => {
    res.status(500).json({ message: err.message || "error" });
};
//# sourceMappingURL=errorMW.js.map