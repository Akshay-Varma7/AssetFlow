import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserAvgAggregateOutputType = {
    id: number | null;
    deptId: number | null;
};
export type UserSumAggregateOutputType = {
    id: number | null;
    deptId: number | null;
};
export type UserMinAggregateOutputType = {
    id: number | null;
    username: string | null;
    email: string | null;
    password: string | null;
    deptId: number | null;
};
export type UserMaxAggregateOutputType = {
    id: number | null;
    username: string | null;
    email: string | null;
    password: string | null;
    deptId: number | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    username: number;
    email: number;
    password: number;
    roles: number;
    deptId: number;
    _all: number;
};
export type UserAvgAggregateInputType = {
    id?: true;
    deptId?: true;
};
export type UserSumAggregateInputType = {
    id?: true;
    deptId?: true;
};
export type UserMinAggregateInputType = {
    id?: true;
    username?: true;
    email?: true;
    password?: true;
    deptId?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    username?: true;
    email?: true;
    password?: true;
    deptId?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    username?: true;
    email?: true;
    password?: true;
    roles?: true;
    deptId?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: number;
    username: string;
    email: string;
    password: string;
    roles: $Enums.Role[];
    deptId: number;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.IntFilter<"User"> | number;
    username?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    password?: Prisma.StringFilter<"User"> | string;
    roles?: Prisma.EnumRoleNullableListFilter<"User">;
    deptId?: Prisma.IntFilter<"User"> | number;
    department?: Prisma.XOR<Prisma.DepartmentScalarRelationFilter, Prisma.DepartmentWhereInput>;
    headOf?: Prisma.XOR<Prisma.DepartmentNullableScalarRelationFilter, Prisma.DepartmentWhereInput> | null;
    allocated_to?: Prisma.AllocationListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    roles?: Prisma.SortOrder;
    deptId?: Prisma.SortOrder;
    department?: Prisma.DepartmentOrderByWithRelationInput;
    headOf?: Prisma.DepartmentOrderByWithRelationInput;
    allocated_to?: Prisma.AllocationOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    username?: string;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    password?: Prisma.StringFilter<"User"> | string;
    roles?: Prisma.EnumRoleNullableListFilter<"User">;
    deptId?: Prisma.IntFilter<"User"> | number;
    department?: Prisma.XOR<Prisma.DepartmentScalarRelationFilter, Prisma.DepartmentWhereInput>;
    headOf?: Prisma.XOR<Prisma.DepartmentNullableScalarRelationFilter, Prisma.DepartmentWhereInput> | null;
    allocated_to?: Prisma.AllocationListRelationFilter;
}, "id" | "username" | "email">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    roles?: Prisma.SortOrder;
    deptId?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _avg?: Prisma.UserAvgOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
    _sum?: Prisma.UserSumOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"User"> | number;
    username?: Prisma.StringWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    password?: Prisma.StringWithAggregatesFilter<"User"> | string;
    roles?: Prisma.EnumRoleNullableListFilter<"User">;
    deptId?: Prisma.IntWithAggregatesFilter<"User"> | number;
};
export type UserCreateInput = {
    username: string;
    email: string;
    password: string;
    roles?: Prisma.UserCreaterolesInput | $Enums.Role[];
    department: Prisma.DepartmentCreateNestedOneWithoutMembersInput;
    headOf?: Prisma.DepartmentCreateNestedOneWithoutHeadInput;
    allocated_to?: Prisma.AllocationCreateNestedManyWithoutAllocated_toInput;
};
export type UserUncheckedCreateInput = {
    id?: number;
    username: string;
    email: string;
    password: string;
    roles?: Prisma.UserCreaterolesInput | $Enums.Role[];
    deptId: number;
    headOf?: Prisma.DepartmentUncheckedCreateNestedOneWithoutHeadInput;
    allocated_to?: Prisma.AllocationUncheckedCreateNestedManyWithoutAllocated_toInput;
};
export type UserUpdateInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    roles?: Prisma.UserUpdaterolesInput | $Enums.Role[];
    department?: Prisma.DepartmentUpdateOneRequiredWithoutMembersNestedInput;
    headOf?: Prisma.DepartmentUpdateOneWithoutHeadNestedInput;
    allocated_to?: Prisma.AllocationUpdateManyWithoutAllocated_toNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    roles?: Prisma.UserUpdaterolesInput | $Enums.Role[];
    deptId?: Prisma.IntFieldUpdateOperationsInput | number;
    headOf?: Prisma.DepartmentUncheckedUpdateOneWithoutHeadNestedInput;
    allocated_to?: Prisma.AllocationUncheckedUpdateManyWithoutAllocated_toNestedInput;
};
export type UserCreateManyInput = {
    id?: number;
    username: string;
    email: string;
    password: string;
    roles?: Prisma.UserCreaterolesInput | $Enums.Role[];
    deptId: number;
};
export type UserUpdateManyMutationInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    roles?: Prisma.UserUpdaterolesInput | $Enums.Role[];
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    roles?: Prisma.UserUpdaterolesInput | $Enums.Role[];
    deptId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type EnumRoleNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel> | null;
    has?: $Enums.Role | Prisma.EnumRoleFieldRefInput<$PrismaModel> | null;
    hasEvery?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    hasSome?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    roles?: Prisma.SortOrder;
    deptId?: Prisma.SortOrder;
};
export type UserAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    deptId?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    deptId?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    deptId?: Prisma.SortOrder;
};
export type UserSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    deptId?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type UserListRelationFilter = {
    every?: Prisma.UserWhereInput;
    some?: Prisma.UserWhereInput;
    none?: Prisma.UserWhereInput;
};
export type UserOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UserCreaterolesInput = {
    set: $Enums.Role[];
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type UserUpdaterolesInput = {
    set?: $Enums.Role[];
    push?: $Enums.Role | $Enums.Role[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type UserCreateNestedOneWithoutHeadOfInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutHeadOfInput, Prisma.UserUncheckedCreateWithoutHeadOfInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutHeadOfInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedManyWithoutDepartmentInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutDepartmentInput, Prisma.UserUncheckedCreateWithoutDepartmentInput> | Prisma.UserCreateWithoutDepartmentInput[] | Prisma.UserUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutDepartmentInput | Prisma.UserCreateOrConnectWithoutDepartmentInput[];
    createMany?: Prisma.UserCreateManyDepartmentInputEnvelope;
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutDepartmentInput, Prisma.UserUncheckedCreateWithoutDepartmentInput> | Prisma.UserCreateWithoutDepartmentInput[] | Prisma.UserUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutDepartmentInput | Prisma.UserCreateOrConnectWithoutDepartmentInput[];
    createMany?: Prisma.UserCreateManyDepartmentInputEnvelope;
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUpdateOneRequiredWithoutHeadOfNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutHeadOfInput, Prisma.UserUncheckedCreateWithoutHeadOfInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutHeadOfInput;
    upsert?: Prisma.UserUpsertWithoutHeadOfInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutHeadOfInput, Prisma.UserUpdateWithoutHeadOfInput>, Prisma.UserUncheckedUpdateWithoutHeadOfInput>;
};
export type UserUpdateManyWithoutDepartmentNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutDepartmentInput, Prisma.UserUncheckedCreateWithoutDepartmentInput> | Prisma.UserCreateWithoutDepartmentInput[] | Prisma.UserUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutDepartmentInput | Prisma.UserCreateOrConnectWithoutDepartmentInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutDepartmentInput | Prisma.UserUpsertWithWhereUniqueWithoutDepartmentInput[];
    createMany?: Prisma.UserCreateManyDepartmentInputEnvelope;
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutDepartmentInput | Prisma.UserUpdateWithWhereUniqueWithoutDepartmentInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutDepartmentInput | Prisma.UserUpdateManyWithWhereWithoutDepartmentInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutDepartmentInput, Prisma.UserUncheckedCreateWithoutDepartmentInput> | Prisma.UserCreateWithoutDepartmentInput[] | Prisma.UserUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutDepartmentInput | Prisma.UserCreateOrConnectWithoutDepartmentInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutDepartmentInput | Prisma.UserUpsertWithWhereUniqueWithoutDepartmentInput[];
    createMany?: Prisma.UserCreateManyDepartmentInputEnvelope;
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutDepartmentInput | Prisma.UserUpdateWithWhereUniqueWithoutDepartmentInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutDepartmentInput | Prisma.UserUpdateManyWithWhereWithoutDepartmentInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserCreateNestedOneWithoutAllocated_toInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAllocated_toInput, Prisma.UserUncheckedCreateWithoutAllocated_toInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAllocated_toInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutAllocated_toNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAllocated_toInput, Prisma.UserUncheckedCreateWithoutAllocated_toInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAllocated_toInput;
    upsert?: Prisma.UserUpsertWithoutAllocated_toInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAllocated_toInput, Prisma.UserUpdateWithoutAllocated_toInput>, Prisma.UserUncheckedUpdateWithoutAllocated_toInput>;
};
export type UserCreateWithoutHeadOfInput = {
    username: string;
    email: string;
    password: string;
    roles?: Prisma.UserCreaterolesInput | $Enums.Role[];
    department: Prisma.DepartmentCreateNestedOneWithoutMembersInput;
    allocated_to?: Prisma.AllocationCreateNestedManyWithoutAllocated_toInput;
};
export type UserUncheckedCreateWithoutHeadOfInput = {
    id?: number;
    username: string;
    email: string;
    password: string;
    roles?: Prisma.UserCreaterolesInput | $Enums.Role[];
    deptId: number;
    allocated_to?: Prisma.AllocationUncheckedCreateNestedManyWithoutAllocated_toInput;
};
export type UserCreateOrConnectWithoutHeadOfInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutHeadOfInput, Prisma.UserUncheckedCreateWithoutHeadOfInput>;
};
export type UserCreateWithoutDepartmentInput = {
    username: string;
    email: string;
    password: string;
    roles?: Prisma.UserCreaterolesInput | $Enums.Role[];
    headOf?: Prisma.DepartmentCreateNestedOneWithoutHeadInput;
    allocated_to?: Prisma.AllocationCreateNestedManyWithoutAllocated_toInput;
};
export type UserUncheckedCreateWithoutDepartmentInput = {
    id?: number;
    username: string;
    email: string;
    password: string;
    roles?: Prisma.UserCreaterolesInput | $Enums.Role[];
    headOf?: Prisma.DepartmentUncheckedCreateNestedOneWithoutHeadInput;
    allocated_to?: Prisma.AllocationUncheckedCreateNestedManyWithoutAllocated_toInput;
};
export type UserCreateOrConnectWithoutDepartmentInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutDepartmentInput, Prisma.UserUncheckedCreateWithoutDepartmentInput>;
};
export type UserCreateManyDepartmentInputEnvelope = {
    data: Prisma.UserCreateManyDepartmentInput | Prisma.UserCreateManyDepartmentInput[];
    skipDuplicates?: boolean;
};
export type UserUpsertWithoutHeadOfInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutHeadOfInput, Prisma.UserUncheckedUpdateWithoutHeadOfInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutHeadOfInput, Prisma.UserUncheckedCreateWithoutHeadOfInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutHeadOfInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutHeadOfInput, Prisma.UserUncheckedUpdateWithoutHeadOfInput>;
};
export type UserUpdateWithoutHeadOfInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    roles?: Prisma.UserUpdaterolesInput | $Enums.Role[];
    department?: Prisma.DepartmentUpdateOneRequiredWithoutMembersNestedInput;
    allocated_to?: Prisma.AllocationUpdateManyWithoutAllocated_toNestedInput;
};
export type UserUncheckedUpdateWithoutHeadOfInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    roles?: Prisma.UserUpdaterolesInput | $Enums.Role[];
    deptId?: Prisma.IntFieldUpdateOperationsInput | number;
    allocated_to?: Prisma.AllocationUncheckedUpdateManyWithoutAllocated_toNestedInput;
};
export type UserUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: Prisma.UserWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserUpdateWithoutDepartmentInput, Prisma.UserUncheckedUpdateWithoutDepartmentInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutDepartmentInput, Prisma.UserUncheckedCreateWithoutDepartmentInput>;
};
export type UserUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutDepartmentInput, Prisma.UserUncheckedUpdateWithoutDepartmentInput>;
};
export type UserUpdateManyWithWhereWithoutDepartmentInput = {
    where: Prisma.UserScalarWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyWithoutDepartmentInput>;
};
export type UserScalarWhereInput = {
    AND?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
    OR?: Prisma.UserScalarWhereInput[];
    NOT?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
    id?: Prisma.IntFilter<"User"> | number;
    username?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    password?: Prisma.StringFilter<"User"> | string;
    roles?: Prisma.EnumRoleNullableListFilter<"User">;
    deptId?: Prisma.IntFilter<"User"> | number;
};
export type UserCreateWithoutAllocated_toInput = {
    username: string;
    email: string;
    password: string;
    roles?: Prisma.UserCreaterolesInput | $Enums.Role[];
    department: Prisma.DepartmentCreateNestedOneWithoutMembersInput;
    headOf?: Prisma.DepartmentCreateNestedOneWithoutHeadInput;
};
export type UserUncheckedCreateWithoutAllocated_toInput = {
    id?: number;
    username: string;
    email: string;
    password: string;
    roles?: Prisma.UserCreaterolesInput | $Enums.Role[];
    deptId: number;
    headOf?: Prisma.DepartmentUncheckedCreateNestedOneWithoutHeadInput;
};
export type UserCreateOrConnectWithoutAllocated_toInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutAllocated_toInput, Prisma.UserUncheckedCreateWithoutAllocated_toInput>;
};
export type UserUpsertWithoutAllocated_toInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutAllocated_toInput, Prisma.UserUncheckedUpdateWithoutAllocated_toInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutAllocated_toInput, Prisma.UserUncheckedCreateWithoutAllocated_toInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAllocated_toInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutAllocated_toInput, Prisma.UserUncheckedUpdateWithoutAllocated_toInput>;
};
export type UserUpdateWithoutAllocated_toInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    roles?: Prisma.UserUpdaterolesInput | $Enums.Role[];
    department?: Prisma.DepartmentUpdateOneRequiredWithoutMembersNestedInput;
    headOf?: Prisma.DepartmentUpdateOneWithoutHeadNestedInput;
};
export type UserUncheckedUpdateWithoutAllocated_toInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    roles?: Prisma.UserUpdaterolesInput | $Enums.Role[];
    deptId?: Prisma.IntFieldUpdateOperationsInput | number;
    headOf?: Prisma.DepartmentUncheckedUpdateOneWithoutHeadNestedInput;
};
export type UserCreateManyDepartmentInput = {
    id?: number;
    username: string;
    email: string;
    password: string;
    roles?: Prisma.UserCreaterolesInput | $Enums.Role[];
};
export type UserUpdateWithoutDepartmentInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    roles?: Prisma.UserUpdaterolesInput | $Enums.Role[];
    headOf?: Prisma.DepartmentUpdateOneWithoutHeadNestedInput;
    allocated_to?: Prisma.AllocationUpdateManyWithoutAllocated_toNestedInput;
};
export type UserUncheckedUpdateWithoutDepartmentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    roles?: Prisma.UserUpdaterolesInput | $Enums.Role[];
    headOf?: Prisma.DepartmentUncheckedUpdateOneWithoutHeadNestedInput;
    allocated_to?: Prisma.AllocationUncheckedUpdateManyWithoutAllocated_toNestedInput;
};
export type UserUncheckedUpdateManyWithoutDepartmentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    roles?: Prisma.UserUpdaterolesInput | $Enums.Role[];
};
export type UserCountOutputType = {
    allocated_to: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    allocated_to?: boolean | UserCountOutputTypeCountAllocated_toArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountAllocated_toArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AllocationWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    username?: boolean;
    email?: boolean;
    password?: boolean;
    roles?: boolean;
    deptId?: boolean;
    department?: boolean | Prisma.DepartmentDefaultArgs<ExtArgs>;
    headOf?: boolean | Prisma.User$headOfArgs<ExtArgs>;
    allocated_to?: boolean | Prisma.User$allocated_toArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    username?: boolean;
    email?: boolean;
    password?: boolean;
    roles?: boolean;
    deptId?: boolean;
    department?: boolean | Prisma.DepartmentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    username?: boolean;
    email?: boolean;
    password?: boolean;
    roles?: boolean;
    deptId?: boolean;
    department?: boolean | Prisma.DepartmentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    username?: boolean;
    email?: boolean;
    password?: boolean;
    roles?: boolean;
    deptId?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "username" | "email" | "password" | "roles" | "deptId", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    department?: boolean | Prisma.DepartmentDefaultArgs<ExtArgs>;
    headOf?: boolean | Prisma.User$headOfArgs<ExtArgs>;
    allocated_to?: boolean | Prisma.User$allocated_toArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    department?: boolean | Prisma.DepartmentDefaultArgs<ExtArgs>;
};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    department?: boolean | Prisma.DepartmentDefaultArgs<ExtArgs>;
};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        department: Prisma.$DepartmentPayload<ExtArgs>;
        headOf: Prisma.$DepartmentPayload<ExtArgs> | null;
        allocated_to: Prisma.$AllocationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        username: string;
        email: string;
        password: string;
        roles: $Enums.Role[];
        deptId: number;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    department<T extends Prisma.DepartmentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DepartmentDefaultArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    headOf<T extends Prisma.User$headOfArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$headOfArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    allocated_to<T extends Prisma.User$allocated_toArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$allocated_toArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AllocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'Int'>;
    readonly username: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly password: Prisma.FieldRef<"User", 'String'>;
    readonly roles: Prisma.FieldRef<"User", 'Role[]'>;
    readonly deptId: Prisma.FieldRef<"User", 'Int'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.UserIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
    include?: Prisma.UserIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$headOfArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where?: Prisma.DepartmentWhereInput;
};
export type User$allocated_toArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AllocationSelect<ExtArgs> | null;
    omit?: Prisma.AllocationOmit<ExtArgs> | null;
    include?: Prisma.AllocationInclude<ExtArgs> | null;
    where?: Prisma.AllocationWhereInput;
    orderBy?: Prisma.AllocationOrderByWithRelationInput | Prisma.AllocationOrderByWithRelationInput[];
    cursor?: Prisma.AllocationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AllocationScalarFieldEnum | Prisma.AllocationScalarFieldEnum[];
};
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};
//# sourceMappingURL=User.d.ts.map