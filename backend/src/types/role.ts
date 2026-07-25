//m0: 0... by def if enum
//m1: export type Role = 'Admin' | 'Asset_Manager' | 'Department_Head' | 'Employee';0 runtime code

//m2: from runtime 
const ROLES = {
  Admin: 'Admin',
  Asset_Manager: 'Asset_Manager',
  Department_Head: 'Department_Head',
  Employee: 'Employee'
} as const;//AS CONST FOR TS ONLY

export type Role = (typeof ROLES)[keyof typeof ROLES];//result is same btw

/*instead of manual tracking btw this and db enum */
//m3: after npx prisma generate // from @prisma/client
