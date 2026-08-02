declare const ROLES: {
    readonly Admin: 'Admin';
    readonly Asset_Manager: 'Asset_Manager';
    readonly Department_Head: 'Department_Head';
    readonly Employee: 'Employee';
};
export type Role = (typeof ROLES)[keyof typeof ROLES];
export {};
//# sourceMappingURL=role.d.ts.map