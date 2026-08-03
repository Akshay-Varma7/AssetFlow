"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDeptC = exports.renameDeptC = exports.createDeptC = exports.getDeptC = void 0;
const asyncHandler_1 = require("../helper/asyncHandler");
const services_1 = require("../services");
exports.getDeptC = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const departments = await services_1.Department.getDeptS();
    res.status(200).json(departments);
});
exports.createDeptC = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const details = req.body;
    const department = await services_1.Department.createDeptS(details);
    res.status(200).json({ message: "successfully added department", department });
});
exports.renameDeptC = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const deptId = req.params.id;
    const { newDeptName } = req.body;
    const result = await services_1.Department.renameDeptS(deptId, newDeptName);
    res.status(200).json({ message: "successfully renamed department", result });
});
exports.deleteDeptC = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const deptId = req.params.id;
    const result = await services_1.Department.deleteDeptS(deptId);
    res.status(200).json({ message: "successfully deleted department", result });
});
//# sourceMappingURL=department.js.map