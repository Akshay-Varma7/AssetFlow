"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.AuditScalarFieldEnum = exports.MaintananceScalarFieldEnum = exports.BookingScalarFieldEnum = exports.ResourceScalarFieldEnum = exports.AllocationScalarFieldEnum = exports.AssetScalarFieldEnum = exports.CategoryScalarFieldEnum = exports.DepartmentScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    User: 'User',
    Department: 'Department',
    Category: 'Category',
    Asset: 'Asset',
    Allocation: 'Allocation',
    Resource: 'Resource',
    Booking: 'Booking',
    Maintanance: 'Maintanance',
    Audit: 'Audit'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    roles: 'roles',
    deptId: 'deptId'
};
exports.DepartmentScalarFieldEnum = {
    id: 'id',
    department_name: 'department_name',
    headId: 'headId',
    parent_deptId: 'parent_deptId',
    status: 'status'
};
exports.CategoryScalarFieldEnum = {
    id: 'id',
    name: 'name'
};
exports.AssetScalarFieldEnum = {
    id: 'id',
    name: 'name',
    categoryId: 'categoryId',
    missing: 'missing'
};
exports.AllocationScalarFieldEnum = {
    id: 'id',
    assetId: 'assetId',
    userId: 'userId',
    reason: 'reason',
    allocated_date: 'allocated_date',
    return_date: 'return_date',
    status: 'status',
    location: 'location'
};
exports.ResourceScalarFieldEnum = {
    id: 'id',
    name: 'name'
};
exports.BookingScalarFieldEnum = {
    id: 'id',
    resourceId: 'resourceId',
    start_time: 'start_time',
    end_time: 'end_time'
};
exports.MaintananceScalarFieldEnum = {
    id: 'id',
    assetId: 'assetId',
    technician_name: 'technician_name',
    status: 'status'
};
exports.AuditScalarFieldEnum = {
    id: 'id',
    assetId: 'assetId',
    expected_location: 'expected_location',
    status: 'status'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map