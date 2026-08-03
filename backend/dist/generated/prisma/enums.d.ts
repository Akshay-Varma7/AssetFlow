export declare const Role: {
    readonly Admin: 'Admin';
    readonly Asset_Manager: 'Asset_Manager';
    readonly Department_Head: 'Department_Head';
    readonly Employee: 'Employee';
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const Department_Status: {
    readonly Active: 'Active';
    readonly Inactive: 'Inactive';
};
export type Department_Status = (typeof Department_Status)[keyof typeof Department_Status];
export declare const Allocation_Approval_Status: {
    readonly pending: 'pending';
    readonly allocated: 'allocated';
    readonly rejected: 'rejected';
};
export type Allocation_Approval_Status = (typeof Allocation_Approval_Status)[keyof typeof Allocation_Approval_Status];
export declare const Maintanance_Status: {
    readonly pending: 'pending';
    readonly approved: 'approved';
    readonly rejected: 'rejected';
    readonly in_progress: 'in_progress';
    readonly resolved: 'resolved';
};
export type Maintanance_Status = (typeof Maintanance_Status)[keyof typeof Maintanance_Status];
export declare const Audit_Status: {
    readonly pending: 'pending';
    readonly verified: 'verified';
    readonly missing: 'missing';
    readonly damage: 'damage';
};
export type Audit_Status = (typeof Audit_Status)[keyof typeof Audit_Status];
//# sourceMappingURL=enums.d.ts.map