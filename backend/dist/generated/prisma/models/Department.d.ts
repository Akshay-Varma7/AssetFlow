import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DepartmentModel = runtime.Types.Result.DefaultSelection<Prisma.$DepartmentPayload>;
export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null;
    _avg: DepartmentAvgAggregateOutputType | null;
    _sum: DepartmentSumAggregateOutputType | null;
    _min: DepartmentMinAggregateOutputType | null;
    _max: DepartmentMaxAggregateOutputType | null;
};
export type DepartmentAvgAggregateOutputType = {
    id: number | null;
    headId: number | null;
    parent_deptId: number | null;
};
export type DepartmentSumAggregateOutputType = {
    id: number | null;
    headId: number | null;
    parent_deptId: number | null;
};
export type DepartmentMinAggregateOutputType = {
    id: number | null;
    department_name: string | null;
    headId: number | null;
    parent_deptId: number | null;
    status: $Enums.Department_Status | null;
};
export type DepartmentMaxAggregateOutputType = {
    id: number | null;
    department_name: string | null;
    headId: number | null;
    parent_deptId: number | null;
    status: $Enums.Department_Status | null;
};
export type DepartmentCountAggregateOutputType = {
    id: number;
    department_name: number;
    headId: number;
    parent_deptId: number;
    status: number;
    _all: number;
};
export type DepartmentAvgAggregateInputType = {
    id?: true;
    headId?: true;
    parent_deptId?: true;
};
export type DepartmentSumAggregateInputType = {
    id?: true;
    headId?: true;
    parent_deptId?: true;
};
export type DepartmentMinAggregateInputType = {
    id?: true;
    department_name?: true;
    headId?: true;
    parent_deptId?: true;
    status?: true;
};
export type DepartmentMaxAggregateInputType = {
    id?: true;
    department_name?: true;
    headId?: true;
    parent_deptId?: true;
    status?: true;
};
export type DepartmentCountAggregateInputType = {
    id?: true;
    department_name?: true;
    headId?: true;
    parent_deptId?: true;
    status?: true;
    _all?: true;
};
export type DepartmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DepartmentWhereInput;
    orderBy?: Prisma.DepartmentOrderByWithRelationInput | Prisma.DepartmentOrderByWithRelationInput[];
    cursor?: Prisma.DepartmentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DepartmentCountAggregateInputType;
    _avg?: DepartmentAvgAggregateInputType;
    _sum?: DepartmentSumAggregateInputType;
    _min?: DepartmentMinAggregateInputType;
    _max?: DepartmentMaxAggregateInputType;
};
export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
    [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDepartment[P]> : Prisma.GetScalarType<T[P], AggregateDepartment[P]>;
};
export type DepartmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DepartmentWhereInput;
    orderBy?: Prisma.DepartmentOrderByWithAggregationInput | Prisma.DepartmentOrderByWithAggregationInput[];
    by: Prisma.DepartmentScalarFieldEnum[] | Prisma.DepartmentScalarFieldEnum;
    having?: Prisma.DepartmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DepartmentCountAggregateInputType | true;
    _avg?: DepartmentAvgAggregateInputType;
    _sum?: DepartmentSumAggregateInputType;
    _min?: DepartmentMinAggregateInputType;
    _max?: DepartmentMaxAggregateInputType;
};
export type DepartmentGroupByOutputType = {
    id: number;
    department_name: string;
    headId: number;
    parent_deptId: number | null;
    status: $Enums.Department_Status;
    _count: DepartmentCountAggregateOutputType | null;
    _avg: DepartmentAvgAggregateOutputType | null;
    _sum: DepartmentSumAggregateOutputType | null;
    _min: DepartmentMinAggregateOutputType | null;
    _max: DepartmentMaxAggregateOutputType | null;
};
export type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DepartmentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DepartmentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DepartmentGroupByOutputType[P]>;
}>>;
export type DepartmentWhereInput = {
    AND?: Prisma.DepartmentWhereInput | Prisma.DepartmentWhereInput[];
    OR?: Prisma.DepartmentWhereInput[];
    NOT?: Prisma.DepartmentWhereInput | Prisma.DepartmentWhereInput[];
    id?: Prisma.IntFilter<"Department"> | number;
    department_name?: Prisma.StringFilter<"Department"> | string;
    headId?: Prisma.IntFilter<"Department"> | number;
    parent_deptId?: Prisma.IntNullableFilter<"Department"> | number | null;
    status?: Prisma.EnumDepartment_StatusFilter<"Department"> | $Enums.Department_Status;
    head?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    parent_department?: Prisma.XOR<Prisma.DepartmentNullableScalarRelationFilter, Prisma.DepartmentWhereInput> | null;
    members?: Prisma.UserListRelationFilter;
    child_departments?: Prisma.DepartmentListRelationFilter;
};
export type DepartmentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    department_name?: Prisma.SortOrder;
    headId?: Prisma.SortOrder;
    parent_deptId?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    head?: Prisma.UserOrderByWithRelationInput;
    parent_department?: Prisma.DepartmentOrderByWithRelationInput;
    members?: Prisma.UserOrderByRelationAggregateInput;
    child_departments?: Prisma.DepartmentOrderByRelationAggregateInput;
};
export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    department_name?: string;
    headId?: number;
    AND?: Prisma.DepartmentWhereInput | Prisma.DepartmentWhereInput[];
    OR?: Prisma.DepartmentWhereInput[];
    NOT?: Prisma.DepartmentWhereInput | Prisma.DepartmentWhereInput[];
    parent_deptId?: Prisma.IntNullableFilter<"Department"> | number | null;
    status?: Prisma.EnumDepartment_StatusFilter<"Department"> | $Enums.Department_Status;
    head?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    parent_department?: Prisma.XOR<Prisma.DepartmentNullableScalarRelationFilter, Prisma.DepartmentWhereInput> | null;
    members?: Prisma.UserListRelationFilter;
    child_departments?: Prisma.DepartmentListRelationFilter;
}, "id" | "department_name" | "headId">;
export type DepartmentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    department_name?: Prisma.SortOrder;
    headId?: Prisma.SortOrder;
    parent_deptId?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    _count?: Prisma.DepartmentCountOrderByAggregateInput;
    _avg?: Prisma.DepartmentAvgOrderByAggregateInput;
    _max?: Prisma.DepartmentMaxOrderByAggregateInput;
    _min?: Prisma.DepartmentMinOrderByAggregateInput;
    _sum?: Prisma.DepartmentSumOrderByAggregateInput;
};
export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: Prisma.DepartmentScalarWhereWithAggregatesInput | Prisma.DepartmentScalarWhereWithAggregatesInput[];
    OR?: Prisma.DepartmentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DepartmentScalarWhereWithAggregatesInput | Prisma.DepartmentScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Department"> | number;
    department_name?: Prisma.StringWithAggregatesFilter<"Department"> | string;
    headId?: Prisma.IntWithAggregatesFilter<"Department"> | number;
    parent_deptId?: Prisma.IntNullableWithAggregatesFilter<"Department"> | number | null;
    status?: Prisma.EnumDepartment_StatusWithAggregatesFilter<"Department"> | $Enums.Department_Status;
};
export type DepartmentCreateInput = {
    department_name: string;
    status?: $Enums.Department_Status;
    head: Prisma.UserCreateNestedOneWithoutHeadOfInput;
    parent_department?: Prisma.DepartmentCreateNestedOneWithoutChild_departmentsInput;
    members?: Prisma.UserCreateNestedManyWithoutDepartmentInput;
    child_departments?: Prisma.DepartmentCreateNestedManyWithoutParent_departmentInput;
};
export type DepartmentUncheckedCreateInput = {
    id?: number;
    department_name: string;
    headId: number;
    parent_deptId?: number | null;
    status?: $Enums.Department_Status;
    members?: Prisma.UserUncheckedCreateNestedManyWithoutDepartmentInput;
    child_departments?: Prisma.DepartmentUncheckedCreateNestedManyWithoutParent_departmentInput;
};
export type DepartmentUpdateInput = {
    department_name?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDepartment_StatusFieldUpdateOperationsInput | $Enums.Department_Status;
    head?: Prisma.UserUpdateOneRequiredWithoutHeadOfNestedInput;
    parent_department?: Prisma.DepartmentUpdateOneWithoutChild_departmentsNestedInput;
    members?: Prisma.UserUpdateManyWithoutDepartmentNestedInput;
    child_departments?: Prisma.DepartmentUpdateManyWithoutParent_departmentNestedInput;
};
export type DepartmentUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    department_name?: Prisma.StringFieldUpdateOperationsInput | string;
    headId?: Prisma.IntFieldUpdateOperationsInput | number;
    parent_deptId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumDepartment_StatusFieldUpdateOperationsInput | $Enums.Department_Status;
    members?: Prisma.UserUncheckedUpdateManyWithoutDepartmentNestedInput;
    child_departments?: Prisma.DepartmentUncheckedUpdateManyWithoutParent_departmentNestedInput;
};
export type DepartmentCreateManyInput = {
    id?: number;
    department_name: string;
    headId: number;
    parent_deptId?: number | null;
    status?: $Enums.Department_Status;
};
export type DepartmentUpdateManyMutationInput = {
    department_name?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDepartment_StatusFieldUpdateOperationsInput | $Enums.Department_Status;
};
export type DepartmentUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    department_name?: Prisma.StringFieldUpdateOperationsInput | string;
    headId?: Prisma.IntFieldUpdateOperationsInput | number;
    parent_deptId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumDepartment_StatusFieldUpdateOperationsInput | $Enums.Department_Status;
};
export type DepartmentScalarRelationFilter = {
    is?: Prisma.DepartmentWhereInput;
    isNot?: Prisma.DepartmentWhereInput;
};
export type DepartmentNullableScalarRelationFilter = {
    is?: Prisma.DepartmentWhereInput | null;
    isNot?: Prisma.DepartmentWhereInput | null;
};
export type DepartmentListRelationFilter = {
    every?: Prisma.DepartmentWhereInput;
    some?: Prisma.DepartmentWhereInput;
    none?: Prisma.DepartmentWhereInput;
};
export type DepartmentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DepartmentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    department_name?: Prisma.SortOrder;
    headId?: Prisma.SortOrder;
    parent_deptId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type DepartmentAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    headId?: Prisma.SortOrder;
    parent_deptId?: Prisma.SortOrder;
};
export type DepartmentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    department_name?: Prisma.SortOrder;
    headId?: Prisma.SortOrder;
    parent_deptId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type DepartmentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    department_name?: Prisma.SortOrder;
    headId?: Prisma.SortOrder;
    parent_deptId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type DepartmentSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    headId?: Prisma.SortOrder;
    parent_deptId?: Prisma.SortOrder;
};
export type DepartmentCreateNestedOneWithoutMembersInput = {
    create?: Prisma.XOR<Prisma.DepartmentCreateWithoutMembersInput, Prisma.DepartmentUncheckedCreateWithoutMembersInput>;
    connectOrCreate?: Prisma.DepartmentCreateOrConnectWithoutMembersInput;
    connect?: Prisma.DepartmentWhereUniqueInput;
};
export type DepartmentCreateNestedOneWithoutHeadInput = {
    create?: Prisma.XOR<Prisma.DepartmentCreateWithoutHeadInput, Prisma.DepartmentUncheckedCreateWithoutHeadInput>;
    connectOrCreate?: Prisma.DepartmentCreateOrConnectWithoutHeadInput;
    connect?: Prisma.DepartmentWhereUniqueInput;
};
export type DepartmentUncheckedCreateNestedOneWithoutHeadInput = {
    create?: Prisma.XOR<Prisma.DepartmentCreateWithoutHeadInput, Prisma.DepartmentUncheckedCreateWithoutHeadInput>;
    connectOrCreate?: Prisma.DepartmentCreateOrConnectWithoutHeadInput;
    connect?: Prisma.DepartmentWhereUniqueInput;
};
export type DepartmentUpdateOneRequiredWithoutMembersNestedInput = {
    create?: Prisma.XOR<Prisma.DepartmentCreateWithoutMembersInput, Prisma.DepartmentUncheckedCreateWithoutMembersInput>;
    connectOrCreate?: Prisma.DepartmentCreateOrConnectWithoutMembersInput;
    upsert?: Prisma.DepartmentUpsertWithoutMembersInput;
    connect?: Prisma.DepartmentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DepartmentUpdateToOneWithWhereWithoutMembersInput, Prisma.DepartmentUpdateWithoutMembersInput>, Prisma.DepartmentUncheckedUpdateWithoutMembersInput>;
};
export type DepartmentUpdateOneWithoutHeadNestedInput = {
    create?: Prisma.XOR<Prisma.DepartmentCreateWithoutHeadInput, Prisma.DepartmentUncheckedCreateWithoutHeadInput>;
    connectOrCreate?: Prisma.DepartmentCreateOrConnectWithoutHeadInput;
    upsert?: Prisma.DepartmentUpsertWithoutHeadInput;
    disconnect?: Prisma.DepartmentWhereInput | boolean;
    delete?: Prisma.DepartmentWhereInput | boolean;
    connect?: Prisma.DepartmentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DepartmentUpdateToOneWithWhereWithoutHeadInput, Prisma.DepartmentUpdateWithoutHeadInput>, Prisma.DepartmentUncheckedUpdateWithoutHeadInput>;
};
export type DepartmentUncheckedUpdateOneWithoutHeadNestedInput = {
    create?: Prisma.XOR<Prisma.DepartmentCreateWithoutHeadInput, Prisma.DepartmentUncheckedCreateWithoutHeadInput>;
    connectOrCreate?: Prisma.DepartmentCreateOrConnectWithoutHeadInput;
    upsert?: Prisma.DepartmentUpsertWithoutHeadInput;
    disconnect?: Prisma.DepartmentWhereInput | boolean;
    delete?: Prisma.DepartmentWhereInput | boolean;
    connect?: Prisma.DepartmentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DepartmentUpdateToOneWithWhereWithoutHeadInput, Prisma.DepartmentUpdateWithoutHeadInput>, Prisma.DepartmentUncheckedUpdateWithoutHeadInput>;
};
export type DepartmentCreateNestedOneWithoutChild_departmentsInput = {
    create?: Prisma.XOR<Prisma.DepartmentCreateWithoutChild_departmentsInput, Prisma.DepartmentUncheckedCreateWithoutChild_departmentsInput>;
    connectOrCreate?: Prisma.DepartmentCreateOrConnectWithoutChild_departmentsInput;
    connect?: Prisma.DepartmentWhereUniqueInput;
};
export type DepartmentCreateNestedManyWithoutParent_departmentInput = {
    create?: Prisma.XOR<Prisma.DepartmentCreateWithoutParent_departmentInput, Prisma.DepartmentUncheckedCreateWithoutParent_departmentInput> | Prisma.DepartmentCreateWithoutParent_departmentInput[] | Prisma.DepartmentUncheckedCreateWithoutParent_departmentInput[];
    connectOrCreate?: Prisma.DepartmentCreateOrConnectWithoutParent_departmentInput | Prisma.DepartmentCreateOrConnectWithoutParent_departmentInput[];
    createMany?: Prisma.DepartmentCreateManyParent_departmentInputEnvelope;
    connect?: Prisma.DepartmentWhereUniqueInput | Prisma.DepartmentWhereUniqueInput[];
};
export type DepartmentUncheckedCreateNestedManyWithoutParent_departmentInput = {
    create?: Prisma.XOR<Prisma.DepartmentCreateWithoutParent_departmentInput, Prisma.DepartmentUncheckedCreateWithoutParent_departmentInput> | Prisma.DepartmentCreateWithoutParent_departmentInput[] | Prisma.DepartmentUncheckedCreateWithoutParent_departmentInput[];
    connectOrCreate?: Prisma.DepartmentCreateOrConnectWithoutParent_departmentInput | Prisma.DepartmentCreateOrConnectWithoutParent_departmentInput[];
    createMany?: Prisma.DepartmentCreateManyParent_departmentInputEnvelope;
    connect?: Prisma.DepartmentWhereUniqueInput | Prisma.DepartmentWhereUniqueInput[];
};
export type EnumDepartment_StatusFieldUpdateOperationsInput = {
    set?: $Enums.Department_Status;
};
export type DepartmentUpdateOneWithoutChild_departmentsNestedInput = {
    create?: Prisma.XOR<Prisma.DepartmentCreateWithoutChild_departmentsInput, Prisma.DepartmentUncheckedCreateWithoutChild_departmentsInput>;
    connectOrCreate?: Prisma.DepartmentCreateOrConnectWithoutChild_departmentsInput;
    upsert?: Prisma.DepartmentUpsertWithoutChild_departmentsInput;
    disconnect?: Prisma.DepartmentWhereInput | boolean;
    delete?: Prisma.DepartmentWhereInput | boolean;
    connect?: Prisma.DepartmentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DepartmentUpdateToOneWithWhereWithoutChild_departmentsInput, Prisma.DepartmentUpdateWithoutChild_departmentsInput>, Prisma.DepartmentUncheckedUpdateWithoutChild_departmentsInput>;
};
export type DepartmentUpdateManyWithoutParent_departmentNestedInput = {
    create?: Prisma.XOR<Prisma.DepartmentCreateWithoutParent_departmentInput, Prisma.DepartmentUncheckedCreateWithoutParent_departmentInput> | Prisma.DepartmentCreateWithoutParent_departmentInput[] | Prisma.DepartmentUncheckedCreateWithoutParent_departmentInput[];
    connectOrCreate?: Prisma.DepartmentCreateOrConnectWithoutParent_departmentInput | Prisma.DepartmentCreateOrConnectWithoutParent_departmentInput[];
    upsert?: Prisma.DepartmentUpsertWithWhereUniqueWithoutParent_departmentInput | Prisma.DepartmentUpsertWithWhereUniqueWithoutParent_departmentInput[];
    createMany?: Prisma.DepartmentCreateManyParent_departmentInputEnvelope;
    set?: Prisma.DepartmentWhereUniqueInput | Prisma.DepartmentWhereUniqueInput[];
    disconnect?: Prisma.DepartmentWhereUniqueInput | Prisma.DepartmentWhereUniqueInput[];
    delete?: Prisma.DepartmentWhereUniqueInput | Prisma.DepartmentWhereUniqueInput[];
    connect?: Prisma.DepartmentWhereUniqueInput | Prisma.DepartmentWhereUniqueInput[];
    update?: Prisma.DepartmentUpdateWithWhereUniqueWithoutParent_departmentInput | Prisma.DepartmentUpdateWithWhereUniqueWithoutParent_departmentInput[];
    updateMany?: Prisma.DepartmentUpdateManyWithWhereWithoutParent_departmentInput | Prisma.DepartmentUpdateManyWithWhereWithoutParent_departmentInput[];
    deleteMany?: Prisma.DepartmentScalarWhereInput | Prisma.DepartmentScalarWhereInput[];
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type DepartmentUncheckedUpdateManyWithoutParent_departmentNestedInput = {
    create?: Prisma.XOR<Prisma.DepartmentCreateWithoutParent_departmentInput, Prisma.DepartmentUncheckedCreateWithoutParent_departmentInput> | Prisma.DepartmentCreateWithoutParent_departmentInput[] | Prisma.DepartmentUncheckedCreateWithoutParent_departmentInput[];
    connectOrCreate?: Prisma.DepartmentCreateOrConnectWithoutParent_departmentInput | Prisma.DepartmentCreateOrConnectWithoutParent_departmentInput[];
    upsert?: Prisma.DepartmentUpsertWithWhereUniqueWithoutParent_departmentInput | Prisma.DepartmentUpsertWithWhereUniqueWithoutParent_departmentInput[];
    createMany?: Prisma.DepartmentCreateManyParent_departmentInputEnvelope;
    set?: Prisma.DepartmentWhereUniqueInput | Prisma.DepartmentWhereUniqueInput[];
    disconnect?: Prisma.DepartmentWhereUniqueInput | Prisma.DepartmentWhereUniqueInput[];
    delete?: Prisma.DepartmentWhereUniqueInput | Prisma.DepartmentWhereUniqueInput[];
    connect?: Prisma.DepartmentWhereUniqueInput | Prisma.DepartmentWhereUniqueInput[];
    update?: Prisma.DepartmentUpdateWithWhereUniqueWithoutParent_departmentInput | Prisma.DepartmentUpdateWithWhereUniqueWithoutParent_departmentInput[];
    updateMany?: Prisma.DepartmentUpdateManyWithWhereWithoutParent_departmentInput | Prisma.DepartmentUpdateManyWithWhereWithoutParent_departmentInput[];
    deleteMany?: Prisma.DepartmentScalarWhereInput | Prisma.DepartmentScalarWhereInput[];
};
export type DepartmentCreateWithoutMembersInput = {
    department_name: string;
    status?: $Enums.Department_Status;
    head: Prisma.UserCreateNestedOneWithoutHeadOfInput;
    parent_department?: Prisma.DepartmentCreateNestedOneWithoutChild_departmentsInput;
    child_departments?: Prisma.DepartmentCreateNestedManyWithoutParent_departmentInput;
};
export type DepartmentUncheckedCreateWithoutMembersInput = {
    id?: number;
    department_name: string;
    headId: number;
    parent_deptId?: number | null;
    status?: $Enums.Department_Status;
    child_departments?: Prisma.DepartmentUncheckedCreateNestedManyWithoutParent_departmentInput;
};
export type DepartmentCreateOrConnectWithoutMembersInput = {
    where: Prisma.DepartmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DepartmentCreateWithoutMembersInput, Prisma.DepartmentUncheckedCreateWithoutMembersInput>;
};
export type DepartmentCreateWithoutHeadInput = {
    department_name: string;
    status?: $Enums.Department_Status;
    parent_department?: Prisma.DepartmentCreateNestedOneWithoutChild_departmentsInput;
    members?: Prisma.UserCreateNestedManyWithoutDepartmentInput;
    child_departments?: Prisma.DepartmentCreateNestedManyWithoutParent_departmentInput;
};
export type DepartmentUncheckedCreateWithoutHeadInput = {
    id?: number;
    department_name: string;
    parent_deptId?: number | null;
    status?: $Enums.Department_Status;
    members?: Prisma.UserUncheckedCreateNestedManyWithoutDepartmentInput;
    child_departments?: Prisma.DepartmentUncheckedCreateNestedManyWithoutParent_departmentInput;
};
export type DepartmentCreateOrConnectWithoutHeadInput = {
    where: Prisma.DepartmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DepartmentCreateWithoutHeadInput, Prisma.DepartmentUncheckedCreateWithoutHeadInput>;
};
export type DepartmentUpsertWithoutMembersInput = {
    update: Prisma.XOR<Prisma.DepartmentUpdateWithoutMembersInput, Prisma.DepartmentUncheckedUpdateWithoutMembersInput>;
    create: Prisma.XOR<Prisma.DepartmentCreateWithoutMembersInput, Prisma.DepartmentUncheckedCreateWithoutMembersInput>;
    where?: Prisma.DepartmentWhereInput;
};
export type DepartmentUpdateToOneWithWhereWithoutMembersInput = {
    where?: Prisma.DepartmentWhereInput;
    data: Prisma.XOR<Prisma.DepartmentUpdateWithoutMembersInput, Prisma.DepartmentUncheckedUpdateWithoutMembersInput>;
};
export type DepartmentUpdateWithoutMembersInput = {
    department_name?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDepartment_StatusFieldUpdateOperationsInput | $Enums.Department_Status;
    head?: Prisma.UserUpdateOneRequiredWithoutHeadOfNestedInput;
    parent_department?: Prisma.DepartmentUpdateOneWithoutChild_departmentsNestedInput;
    child_departments?: Prisma.DepartmentUpdateManyWithoutParent_departmentNestedInput;
};
export type DepartmentUncheckedUpdateWithoutMembersInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    department_name?: Prisma.StringFieldUpdateOperationsInput | string;
    headId?: Prisma.IntFieldUpdateOperationsInput | number;
    parent_deptId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumDepartment_StatusFieldUpdateOperationsInput | $Enums.Department_Status;
    child_departments?: Prisma.DepartmentUncheckedUpdateManyWithoutParent_departmentNestedInput;
};
export type DepartmentUpsertWithoutHeadInput = {
    update: Prisma.XOR<Prisma.DepartmentUpdateWithoutHeadInput, Prisma.DepartmentUncheckedUpdateWithoutHeadInput>;
    create: Prisma.XOR<Prisma.DepartmentCreateWithoutHeadInput, Prisma.DepartmentUncheckedCreateWithoutHeadInput>;
    where?: Prisma.DepartmentWhereInput;
};
export type DepartmentUpdateToOneWithWhereWithoutHeadInput = {
    where?: Prisma.DepartmentWhereInput;
    data: Prisma.XOR<Prisma.DepartmentUpdateWithoutHeadInput, Prisma.DepartmentUncheckedUpdateWithoutHeadInput>;
};
export type DepartmentUpdateWithoutHeadInput = {
    department_name?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDepartment_StatusFieldUpdateOperationsInput | $Enums.Department_Status;
    parent_department?: Prisma.DepartmentUpdateOneWithoutChild_departmentsNestedInput;
    members?: Prisma.UserUpdateManyWithoutDepartmentNestedInput;
    child_departments?: Prisma.DepartmentUpdateManyWithoutParent_departmentNestedInput;
};
export type DepartmentUncheckedUpdateWithoutHeadInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    department_name?: Prisma.StringFieldUpdateOperationsInput | string;
    parent_deptId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumDepartment_StatusFieldUpdateOperationsInput | $Enums.Department_Status;
    members?: Prisma.UserUncheckedUpdateManyWithoutDepartmentNestedInput;
    child_departments?: Prisma.DepartmentUncheckedUpdateManyWithoutParent_departmentNestedInput;
};
export type DepartmentCreateWithoutChild_departmentsInput = {
    department_name: string;
    status?: $Enums.Department_Status;
    head: Prisma.UserCreateNestedOneWithoutHeadOfInput;
    parent_department?: Prisma.DepartmentCreateNestedOneWithoutChild_departmentsInput;
    members?: Prisma.UserCreateNestedManyWithoutDepartmentInput;
};
export type DepartmentUncheckedCreateWithoutChild_departmentsInput = {
    id?: number;
    department_name: string;
    headId: number;
    parent_deptId?: number | null;
    status?: $Enums.Department_Status;
    members?: Prisma.UserUncheckedCreateNestedManyWithoutDepartmentInput;
};
export type DepartmentCreateOrConnectWithoutChild_departmentsInput = {
    where: Prisma.DepartmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DepartmentCreateWithoutChild_departmentsInput, Prisma.DepartmentUncheckedCreateWithoutChild_departmentsInput>;
};
export type DepartmentCreateWithoutParent_departmentInput = {
    department_name: string;
    status?: $Enums.Department_Status;
    head: Prisma.UserCreateNestedOneWithoutHeadOfInput;
    members?: Prisma.UserCreateNestedManyWithoutDepartmentInput;
    child_departments?: Prisma.DepartmentCreateNestedManyWithoutParent_departmentInput;
};
export type DepartmentUncheckedCreateWithoutParent_departmentInput = {
    id?: number;
    department_name: string;
    headId: number;
    status?: $Enums.Department_Status;
    members?: Prisma.UserUncheckedCreateNestedManyWithoutDepartmentInput;
    child_departments?: Prisma.DepartmentUncheckedCreateNestedManyWithoutParent_departmentInput;
};
export type DepartmentCreateOrConnectWithoutParent_departmentInput = {
    where: Prisma.DepartmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DepartmentCreateWithoutParent_departmentInput, Prisma.DepartmentUncheckedCreateWithoutParent_departmentInput>;
};
export type DepartmentCreateManyParent_departmentInputEnvelope = {
    data: Prisma.DepartmentCreateManyParent_departmentInput | Prisma.DepartmentCreateManyParent_departmentInput[];
    skipDuplicates?: boolean;
};
export type DepartmentUpsertWithoutChild_departmentsInput = {
    update: Prisma.XOR<Prisma.DepartmentUpdateWithoutChild_departmentsInput, Prisma.DepartmentUncheckedUpdateWithoutChild_departmentsInput>;
    create: Prisma.XOR<Prisma.DepartmentCreateWithoutChild_departmentsInput, Prisma.DepartmentUncheckedCreateWithoutChild_departmentsInput>;
    where?: Prisma.DepartmentWhereInput;
};
export type DepartmentUpdateToOneWithWhereWithoutChild_departmentsInput = {
    where?: Prisma.DepartmentWhereInput;
    data: Prisma.XOR<Prisma.DepartmentUpdateWithoutChild_departmentsInput, Prisma.DepartmentUncheckedUpdateWithoutChild_departmentsInput>;
};
export type DepartmentUpdateWithoutChild_departmentsInput = {
    department_name?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDepartment_StatusFieldUpdateOperationsInput | $Enums.Department_Status;
    head?: Prisma.UserUpdateOneRequiredWithoutHeadOfNestedInput;
    parent_department?: Prisma.DepartmentUpdateOneWithoutChild_departmentsNestedInput;
    members?: Prisma.UserUpdateManyWithoutDepartmentNestedInput;
};
export type DepartmentUncheckedUpdateWithoutChild_departmentsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    department_name?: Prisma.StringFieldUpdateOperationsInput | string;
    headId?: Prisma.IntFieldUpdateOperationsInput | number;
    parent_deptId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumDepartment_StatusFieldUpdateOperationsInput | $Enums.Department_Status;
    members?: Prisma.UserUncheckedUpdateManyWithoutDepartmentNestedInput;
};
export type DepartmentUpsertWithWhereUniqueWithoutParent_departmentInput = {
    where: Prisma.DepartmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.DepartmentUpdateWithoutParent_departmentInput, Prisma.DepartmentUncheckedUpdateWithoutParent_departmentInput>;
    create: Prisma.XOR<Prisma.DepartmentCreateWithoutParent_departmentInput, Prisma.DepartmentUncheckedCreateWithoutParent_departmentInput>;
};
export type DepartmentUpdateWithWhereUniqueWithoutParent_departmentInput = {
    where: Prisma.DepartmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.DepartmentUpdateWithoutParent_departmentInput, Prisma.DepartmentUncheckedUpdateWithoutParent_departmentInput>;
};
export type DepartmentUpdateManyWithWhereWithoutParent_departmentInput = {
    where: Prisma.DepartmentScalarWhereInput;
    data: Prisma.XOR<Prisma.DepartmentUpdateManyMutationInput, Prisma.DepartmentUncheckedUpdateManyWithoutParent_departmentInput>;
};
export type DepartmentScalarWhereInput = {
    AND?: Prisma.DepartmentScalarWhereInput | Prisma.DepartmentScalarWhereInput[];
    OR?: Prisma.DepartmentScalarWhereInput[];
    NOT?: Prisma.DepartmentScalarWhereInput | Prisma.DepartmentScalarWhereInput[];
    id?: Prisma.IntFilter<"Department"> | number;
    department_name?: Prisma.StringFilter<"Department"> | string;
    headId?: Prisma.IntFilter<"Department"> | number;
    parent_deptId?: Prisma.IntNullableFilter<"Department"> | number | null;
    status?: Prisma.EnumDepartment_StatusFilter<"Department"> | $Enums.Department_Status;
};
export type DepartmentCreateManyParent_departmentInput = {
    id?: number;
    department_name: string;
    headId: number;
    status?: $Enums.Department_Status;
};
export type DepartmentUpdateWithoutParent_departmentInput = {
    department_name?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDepartment_StatusFieldUpdateOperationsInput | $Enums.Department_Status;
    head?: Prisma.UserUpdateOneRequiredWithoutHeadOfNestedInput;
    members?: Prisma.UserUpdateManyWithoutDepartmentNestedInput;
    child_departments?: Prisma.DepartmentUpdateManyWithoutParent_departmentNestedInput;
};
export type DepartmentUncheckedUpdateWithoutParent_departmentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    department_name?: Prisma.StringFieldUpdateOperationsInput | string;
    headId?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumDepartment_StatusFieldUpdateOperationsInput | $Enums.Department_Status;
    members?: Prisma.UserUncheckedUpdateManyWithoutDepartmentNestedInput;
    child_departments?: Prisma.DepartmentUncheckedUpdateManyWithoutParent_departmentNestedInput;
};
export type DepartmentUncheckedUpdateManyWithoutParent_departmentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    department_name?: Prisma.StringFieldUpdateOperationsInput | string;
    headId?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumDepartment_StatusFieldUpdateOperationsInput | $Enums.Department_Status;
};
export type DepartmentCountOutputType = {
    members: number;
    child_departments: number;
};
export type DepartmentCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    members?: boolean | DepartmentCountOutputTypeCountMembersArgs;
    child_departments?: boolean | DepartmentCountOutputTypeCountChild_departmentsArgs;
};
export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentCountOutputTypeSelect<ExtArgs> | null;
};
export type DepartmentCountOutputTypeCountMembersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
};
export type DepartmentCountOutputTypeCountChild_departmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DepartmentWhereInput;
};
export type DepartmentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    department_name?: boolean;
    headId?: boolean;
    parent_deptId?: boolean;
    status?: boolean;
    head?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    parent_department?: boolean | Prisma.Department$parent_departmentArgs<ExtArgs>;
    members?: boolean | Prisma.Department$membersArgs<ExtArgs>;
    child_departments?: boolean | Prisma.Department$child_departmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.DepartmentCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["department"]>;
export type DepartmentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    department_name?: boolean;
    headId?: boolean;
    parent_deptId?: boolean;
    status?: boolean;
    head?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    parent_department?: boolean | Prisma.Department$parent_departmentArgs<ExtArgs>;
}, ExtArgs["result"]["department"]>;
export type DepartmentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    department_name?: boolean;
    headId?: boolean;
    parent_deptId?: boolean;
    status?: boolean;
    head?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    parent_department?: boolean | Prisma.Department$parent_departmentArgs<ExtArgs>;
}, ExtArgs["result"]["department"]>;
export type DepartmentSelectScalar = {
    id?: boolean;
    department_name?: boolean;
    headId?: boolean;
    parent_deptId?: boolean;
    status?: boolean;
};
export type DepartmentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "department_name" | "headId" | "parent_deptId" | "status", ExtArgs["result"]["department"]>;
export type DepartmentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    head?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    parent_department?: boolean | Prisma.Department$parent_departmentArgs<ExtArgs>;
    members?: boolean | Prisma.Department$membersArgs<ExtArgs>;
    child_departments?: boolean | Prisma.Department$child_departmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.DepartmentCountOutputTypeDefaultArgs<ExtArgs>;
};
export type DepartmentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    head?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    parent_department?: boolean | Prisma.Department$parent_departmentArgs<ExtArgs>;
};
export type DepartmentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    head?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    parent_department?: boolean | Prisma.Department$parent_departmentArgs<ExtArgs>;
};
export type $DepartmentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Department";
    objects: {
        head: Prisma.$UserPayload<ExtArgs>;
        parent_department: Prisma.$DepartmentPayload<ExtArgs> | null;
        members: Prisma.$UserPayload<ExtArgs>[];
        child_departments: Prisma.$DepartmentPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        department_name: string;
        headId: number;
        parent_deptId: number | null;
        status: $Enums.Department_Status;
    }, ExtArgs["result"]["department"]>;
    composites: {};
};
export type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DepartmentPayload, S>;
export type DepartmentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DepartmentCountAggregateInputType | true;
};
export interface DepartmentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Department'];
        meta: {
            name: 'Department';
        };
    };
    findUnique<T extends DepartmentFindUniqueArgs>(args: Prisma.SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DepartmentFindFirstArgs>(args?: Prisma.SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DepartmentFindManyArgs>(args?: Prisma.SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DepartmentCreateArgs>(args: Prisma.SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DepartmentCreateManyArgs>(args?: Prisma.SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DepartmentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DepartmentDeleteArgs>(args: Prisma.SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DepartmentUpdateArgs>(args: Prisma.SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: Prisma.SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DepartmentUpdateManyArgs>(args: Prisma.SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DepartmentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DepartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DepartmentUpsertArgs>(args: Prisma.SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DepartmentCountArgs>(args?: Prisma.Subset<T, DepartmentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DepartmentCountAggregateOutputType> : number>;
    aggregate<T extends DepartmentAggregateArgs>(args: Prisma.Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>;
    groupBy<T extends DepartmentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DepartmentGroupByArgs['orderBy'];
    } : {
        orderBy?: DepartmentGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DepartmentFieldRefs;
}
export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    head<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    parent_department<T extends Prisma.Department$parent_departmentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Department$parent_departmentArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    members<T extends Prisma.Department$membersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Department$membersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    child_departments<T extends Prisma.Department$child_departmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Department$child_departmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DepartmentFieldRefs {
    readonly id: Prisma.FieldRef<"Department", 'Int'>;
    readonly department_name: Prisma.FieldRef<"Department", 'String'>;
    readonly headId: Prisma.FieldRef<"Department", 'Int'>;
    readonly parent_deptId: Prisma.FieldRef<"Department", 'Int'>;
    readonly status: Prisma.FieldRef<"Department", 'Department_Status'>;
}
export type DepartmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where: Prisma.DepartmentWhereUniqueInput;
};
export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where: Prisma.DepartmentWhereUniqueInput;
};
export type DepartmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where?: Prisma.DepartmentWhereInput;
    orderBy?: Prisma.DepartmentOrderByWithRelationInput | Prisma.DepartmentOrderByWithRelationInput[];
    cursor?: Prisma.DepartmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DepartmentScalarFieldEnum | Prisma.DepartmentScalarFieldEnum[];
};
export type DepartmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where?: Prisma.DepartmentWhereInput;
    orderBy?: Prisma.DepartmentOrderByWithRelationInput | Prisma.DepartmentOrderByWithRelationInput[];
    cursor?: Prisma.DepartmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DepartmentScalarFieldEnum | Prisma.DepartmentScalarFieldEnum[];
};
export type DepartmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where?: Prisma.DepartmentWhereInput;
    orderBy?: Prisma.DepartmentOrderByWithRelationInput | Prisma.DepartmentOrderByWithRelationInput[];
    cursor?: Prisma.DepartmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DepartmentScalarFieldEnum | Prisma.DepartmentScalarFieldEnum[];
};
export type DepartmentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DepartmentCreateInput, Prisma.DepartmentUncheckedCreateInput>;
};
export type DepartmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DepartmentCreateManyInput | Prisma.DepartmentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DepartmentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    data: Prisma.DepartmentCreateManyInput | Prisma.DepartmentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DepartmentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DepartmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DepartmentUpdateInput, Prisma.DepartmentUncheckedUpdateInput>;
    where: Prisma.DepartmentWhereUniqueInput;
};
export type DepartmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DepartmentUpdateManyMutationInput, Prisma.DepartmentUncheckedUpdateManyInput>;
    where?: Prisma.DepartmentWhereInput;
    limit?: number;
};
export type DepartmentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DepartmentUpdateManyMutationInput, Prisma.DepartmentUncheckedUpdateManyInput>;
    where?: Prisma.DepartmentWhereInput;
    limit?: number;
    include?: Prisma.DepartmentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DepartmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where: Prisma.DepartmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DepartmentCreateInput, Prisma.DepartmentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DepartmentUpdateInput, Prisma.DepartmentUncheckedUpdateInput>;
};
export type DepartmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where: Prisma.DepartmentWhereUniqueInput;
};
export type DepartmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DepartmentWhereInput;
    limit?: number;
};
export type Department$parent_departmentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where?: Prisma.DepartmentWhereInput;
};
export type Department$membersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type Department$child_departmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where?: Prisma.DepartmentWhereInput;
    orderBy?: Prisma.DepartmentOrderByWithRelationInput | Prisma.DepartmentOrderByWithRelationInput[];
    cursor?: Prisma.DepartmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DepartmentScalarFieldEnum | Prisma.DepartmentScalarFieldEnum[];
};
export type DepartmentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
};
//# sourceMappingURL=Department.d.ts.map