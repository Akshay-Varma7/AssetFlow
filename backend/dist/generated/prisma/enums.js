"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Audit_Status = exports.Maintanance_Status = exports.Allocation_Approval_Status = exports.Department_Status = exports.Role = void 0;
exports.Role = {
    Admin: 'Admin',
    Asset_Manager: 'Asset_Manager',
    Department_Head: 'Department_Head',
    Employee: 'Employee'
};
exports.Department_Status = {
    Active: 'Active',
    Inactive: 'Inactive'
};
exports.Allocation_Approval_Status = {
    pending: 'pending',
    allocated: 'allocated',
    rejected: 'rejected'
};
exports.Maintanance_Status = {
    pending: 'pending',
    approved: 'approved',
    rejected: 'rejected',
    in_progress: 'in_progress',
    resolved: 'resolved'
};
exports.Audit_Status = {
    pending: 'pending',
    verified: 'verified',
    missing: 'missing',
    damage: 'damage'
};
//# sourceMappingURL=enums.js.map