import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: 'User';
    readonly Department: 'Department';
    readonly Category: 'Category';
    readonly Asset: 'Asset';
    readonly Allocation: 'Allocation';
    readonly Resource: 'Resource';
    readonly Booking: 'Booking';
    readonly Maintanance: 'Maintanance';
    readonly Audit: 'Audit';
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: 'ReadUncommitted';
    readonly ReadCommitted: 'ReadCommitted';
    readonly RepeatableRead: 'RepeatableRead';
    readonly Serializable: 'Serializable';
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: 'id';
    readonly username: 'username';
    readonly email: 'email';
    readonly password: 'password';
    readonly roles: 'roles';
    readonly deptId: 'deptId';
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const DepartmentScalarFieldEnum: {
    readonly id: 'id';
    readonly department_name: 'department_name';
    readonly headId: 'headId';
    readonly parent_deptId: 'parent_deptId';
    readonly status: 'status';
};
export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum];
export declare const CategoryScalarFieldEnum: {
    readonly id: 'id';
    readonly name: 'name';
};
export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum];
export declare const AssetScalarFieldEnum: {
    readonly id: 'id';
    readonly name: 'name';
    readonly categoryId: 'categoryId';
    readonly missing: 'missing';
};
export type AssetScalarFieldEnum = (typeof AssetScalarFieldEnum)[keyof typeof AssetScalarFieldEnum];
export declare const AllocationScalarFieldEnum: {
    readonly id: 'id';
    readonly assetId: 'assetId';
    readonly userId: 'userId';
    readonly reason: 'reason';
    readonly allocated_date: 'allocated_date';
    readonly return_date: 'return_date';
    readonly status: 'status';
    readonly location: 'location';
};
export type AllocationScalarFieldEnum = (typeof AllocationScalarFieldEnum)[keyof typeof AllocationScalarFieldEnum];
export declare const ResourceScalarFieldEnum: {
    readonly id: 'id';
    readonly name: 'name';
};
export type ResourceScalarFieldEnum = (typeof ResourceScalarFieldEnum)[keyof typeof ResourceScalarFieldEnum];
export declare const BookingScalarFieldEnum: {
    readonly id: 'id';
    readonly resourceId: 'resourceId';
    readonly start_time: 'start_time';
    readonly end_time: 'end_time';
};
export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum];
export declare const MaintananceScalarFieldEnum: {
    readonly id: 'id';
    readonly assetId: 'assetId';
    readonly technician_name: 'technician_name';
    readonly status: 'status';
};
export type MaintananceScalarFieldEnum = (typeof MaintananceScalarFieldEnum)[keyof typeof MaintananceScalarFieldEnum];
export declare const AuditScalarFieldEnum: {
    readonly id: 'id';
    readonly assetId: 'assetId';
    readonly expected_location: 'expected_location';
    readonly status: 'status';
};
export type AuditScalarFieldEnum = (typeof AuditScalarFieldEnum)[keyof typeof AuditScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: 'asc';
    readonly desc: 'desc';
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: 'default';
    readonly insensitive: 'insensitive';
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: 'first';
    readonly last: 'last';
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map