import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AllocationModel = runtime.Types.Result.DefaultSelection<Prisma.$AllocationPayload>;
export type AggregateAllocation = {
    _count: AllocationCountAggregateOutputType | null;
    _avg: AllocationAvgAggregateOutputType | null;
    _sum: AllocationSumAggregateOutputType | null;
    _min: AllocationMinAggregateOutputType | null;
    _max: AllocationMaxAggregateOutputType | null;
};
export type AllocationAvgAggregateOutputType = {
    id: number | null;
    assetId: number | null;
    userId: number | null;
};
export type AllocationSumAggregateOutputType = {
    id: number | null;
    assetId: number | null;
    userId: number | null;
};
export type AllocationMinAggregateOutputType = {
    id: number | null;
    assetId: number | null;
    userId: number | null;
    reason: string | null;
    allocated_date: Date | null;
    return_date: Date | null;
    status: $Enums.Allocation_Approval_Status | null;
    location: string | null;
};
export type AllocationMaxAggregateOutputType = {
    id: number | null;
    assetId: number | null;
    userId: number | null;
    reason: string | null;
    allocated_date: Date | null;
    return_date: Date | null;
    status: $Enums.Allocation_Approval_Status | null;
    location: string | null;
};
export type AllocationCountAggregateOutputType = {
    id: number;
    assetId: number;
    userId: number;
    reason: number;
    allocated_date: number;
    return_date: number;
    status: number;
    location: number;
    _all: number;
};
export type AllocationAvgAggregateInputType = {
    id?: true;
    assetId?: true;
    userId?: true;
};
export type AllocationSumAggregateInputType = {
    id?: true;
    assetId?: true;
    userId?: true;
};
export type AllocationMinAggregateInputType = {
    id?: true;
    assetId?: true;
    userId?: true;
    reason?: true;
    allocated_date?: true;
    return_date?: true;
    status?: true;
    location?: true;
};
export type AllocationMaxAggregateInputType = {
    id?: true;
    assetId?: true;
    userId?: true;
    reason?: true;
    allocated_date?: true;
    return_date?: true;
    status?: true;
    location?: true;
};
export type AllocationCountAggregateInputType = {
    id?: true;
    assetId?: true;
    userId?: true;
    reason?: true;
    allocated_date?: true;
    return_date?: true;
    status?: true;
    location?: true;
    _all?: true;
};
export type AllocationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AllocationWhereInput;
    orderBy?: Prisma.AllocationOrderByWithRelationInput | Prisma.AllocationOrderByWithRelationInput[];
    cursor?: Prisma.AllocationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AllocationCountAggregateInputType;
    _avg?: AllocationAvgAggregateInputType;
    _sum?: AllocationSumAggregateInputType;
    _min?: AllocationMinAggregateInputType;
    _max?: AllocationMaxAggregateInputType;
};
export type GetAllocationAggregateType<T extends AllocationAggregateArgs> = {
    [P in keyof T & keyof AggregateAllocation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAllocation[P]> : Prisma.GetScalarType<T[P], AggregateAllocation[P]>;
};
export type AllocationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AllocationWhereInput;
    orderBy?: Prisma.AllocationOrderByWithAggregationInput | Prisma.AllocationOrderByWithAggregationInput[];
    by: Prisma.AllocationScalarFieldEnum[] | Prisma.AllocationScalarFieldEnum;
    having?: Prisma.AllocationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AllocationCountAggregateInputType | true;
    _avg?: AllocationAvgAggregateInputType;
    _sum?: AllocationSumAggregateInputType;
    _min?: AllocationMinAggregateInputType;
    _max?: AllocationMaxAggregateInputType;
};
export type AllocationGroupByOutputType = {
    id: number;
    assetId: number;
    userId: number;
    reason: string | null;
    allocated_date: Date;
    return_date: Date | null;
    status: $Enums.Allocation_Approval_Status;
    location: string;
    _count: AllocationCountAggregateOutputType | null;
    _avg: AllocationAvgAggregateOutputType | null;
    _sum: AllocationSumAggregateOutputType | null;
    _min: AllocationMinAggregateOutputType | null;
    _max: AllocationMaxAggregateOutputType | null;
};
export type GetAllocationGroupByPayload<T extends AllocationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AllocationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AllocationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AllocationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AllocationGroupByOutputType[P]>;
}>>;
export type AllocationWhereInput = {
    AND?: Prisma.AllocationWhereInput | Prisma.AllocationWhereInput[];
    OR?: Prisma.AllocationWhereInput[];
    NOT?: Prisma.AllocationWhereInput | Prisma.AllocationWhereInput[];
    id?: Prisma.IntFilter<"Allocation"> | number;
    assetId?: Prisma.IntFilter<"Allocation"> | number;
    userId?: Prisma.IntFilter<"Allocation"> | number;
    reason?: Prisma.StringNullableFilter<"Allocation"> | string | null;
    allocated_date?: Prisma.DateTimeFilter<"Allocation"> | Date | string;
    return_date?: Prisma.DateTimeNullableFilter<"Allocation"> | Date | string | null;
    status?: Prisma.EnumAllocation_Approval_StatusFilter<"Allocation"> | $Enums.Allocation_Approval_Status;
    location?: Prisma.StringFilter<"Allocation"> | string;
    asset?: Prisma.XOR<Prisma.AssetScalarRelationFilter, Prisma.AssetWhereInput>;
    allocated_to?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type AllocationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    allocated_date?: Prisma.SortOrder;
    return_date?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    asset?: Prisma.AssetOrderByWithRelationInput;
    allocated_to?: Prisma.UserOrderByWithRelationInput;
};
export type AllocationWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.AllocationWhereInput | Prisma.AllocationWhereInput[];
    OR?: Prisma.AllocationWhereInput[];
    NOT?: Prisma.AllocationWhereInput | Prisma.AllocationWhereInput[];
    assetId?: Prisma.IntFilter<"Allocation"> | number;
    userId?: Prisma.IntFilter<"Allocation"> | number;
    reason?: Prisma.StringNullableFilter<"Allocation"> | string | null;
    allocated_date?: Prisma.DateTimeFilter<"Allocation"> | Date | string;
    return_date?: Prisma.DateTimeNullableFilter<"Allocation"> | Date | string | null;
    status?: Prisma.EnumAllocation_Approval_StatusFilter<"Allocation"> | $Enums.Allocation_Approval_Status;
    location?: Prisma.StringFilter<"Allocation"> | string;
    asset?: Prisma.XOR<Prisma.AssetScalarRelationFilter, Prisma.AssetWhereInput>;
    allocated_to?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type AllocationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    allocated_date?: Prisma.SortOrder;
    return_date?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    _count?: Prisma.AllocationCountOrderByAggregateInput;
    _avg?: Prisma.AllocationAvgOrderByAggregateInput;
    _max?: Prisma.AllocationMaxOrderByAggregateInput;
    _min?: Prisma.AllocationMinOrderByAggregateInput;
    _sum?: Prisma.AllocationSumOrderByAggregateInput;
};
export type AllocationScalarWhereWithAggregatesInput = {
    AND?: Prisma.AllocationScalarWhereWithAggregatesInput | Prisma.AllocationScalarWhereWithAggregatesInput[];
    OR?: Prisma.AllocationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AllocationScalarWhereWithAggregatesInput | Prisma.AllocationScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Allocation"> | number;
    assetId?: Prisma.IntWithAggregatesFilter<"Allocation"> | number;
    userId?: Prisma.IntWithAggregatesFilter<"Allocation"> | number;
    reason?: Prisma.StringNullableWithAggregatesFilter<"Allocation"> | string | null;
    allocated_date?: Prisma.DateTimeWithAggregatesFilter<"Allocation"> | Date | string;
    return_date?: Prisma.DateTimeNullableWithAggregatesFilter<"Allocation"> | Date | string | null;
    status?: Prisma.EnumAllocation_Approval_StatusWithAggregatesFilter<"Allocation"> | $Enums.Allocation_Approval_Status;
    location?: Prisma.StringWithAggregatesFilter<"Allocation"> | string;
};
export type AllocationCreateInput = {
    reason?: string | null;
    allocated_date?: Date | string;
    return_date?: Date | string | null;
    status: $Enums.Allocation_Approval_Status;
    location: string;
    asset: Prisma.AssetCreateNestedOneWithoutAllocationsInput;
    allocated_to: Prisma.UserCreateNestedOneWithoutAllocated_toInput;
};
export type AllocationUncheckedCreateInput = {
    id?: number;
    assetId: number;
    userId: number;
    reason?: string | null;
    allocated_date?: Date | string;
    return_date?: Date | string | null;
    status: $Enums.Allocation_Approval_Status;
    location: string;
};
export type AllocationUpdateInput = {
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allocated_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    return_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumAllocation_Approval_StatusFieldUpdateOperationsInput | $Enums.Allocation_Approval_Status;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    asset?: Prisma.AssetUpdateOneRequiredWithoutAllocationsNestedInput;
    allocated_to?: Prisma.UserUpdateOneRequiredWithoutAllocated_toNestedInput;
};
export type AllocationUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    assetId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allocated_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    return_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumAllocation_Approval_StatusFieldUpdateOperationsInput | $Enums.Allocation_Approval_Status;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AllocationCreateManyInput = {
    id?: number;
    assetId: number;
    userId: number;
    reason?: string | null;
    allocated_date?: Date | string;
    return_date?: Date | string | null;
    status: $Enums.Allocation_Approval_Status;
    location: string;
};
export type AllocationUpdateManyMutationInput = {
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allocated_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    return_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumAllocation_Approval_StatusFieldUpdateOperationsInput | $Enums.Allocation_Approval_Status;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AllocationUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    assetId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allocated_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    return_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumAllocation_Approval_StatusFieldUpdateOperationsInput | $Enums.Allocation_Approval_Status;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AllocationListRelationFilter = {
    every?: Prisma.AllocationWhereInput;
    some?: Prisma.AllocationWhereInput;
    none?: Prisma.AllocationWhereInput;
};
export type AllocationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AllocationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    allocated_date?: Prisma.SortOrder;
    return_date?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
};
export type AllocationAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type AllocationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    allocated_date?: Prisma.SortOrder;
    return_date?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
};
export type AllocationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    allocated_date?: Prisma.SortOrder;
    return_date?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
};
export type AllocationSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type AllocationCreateNestedManyWithoutAllocated_toInput = {
    create?: Prisma.XOR<Prisma.AllocationCreateWithoutAllocated_toInput, Prisma.AllocationUncheckedCreateWithoutAllocated_toInput> | Prisma.AllocationCreateWithoutAllocated_toInput[] | Prisma.AllocationUncheckedCreateWithoutAllocated_toInput[];
    connectOrCreate?: Prisma.AllocationCreateOrConnectWithoutAllocated_toInput | Prisma.AllocationCreateOrConnectWithoutAllocated_toInput[];
    createMany?: Prisma.AllocationCreateManyAllocated_toInputEnvelope;
    connect?: Prisma.AllocationWhereUniqueInput | Prisma.AllocationWhereUniqueInput[];
};
export type AllocationUncheckedCreateNestedManyWithoutAllocated_toInput = {
    create?: Prisma.XOR<Prisma.AllocationCreateWithoutAllocated_toInput, Prisma.AllocationUncheckedCreateWithoutAllocated_toInput> | Prisma.AllocationCreateWithoutAllocated_toInput[] | Prisma.AllocationUncheckedCreateWithoutAllocated_toInput[];
    connectOrCreate?: Prisma.AllocationCreateOrConnectWithoutAllocated_toInput | Prisma.AllocationCreateOrConnectWithoutAllocated_toInput[];
    createMany?: Prisma.AllocationCreateManyAllocated_toInputEnvelope;
    connect?: Prisma.AllocationWhereUniqueInput | Prisma.AllocationWhereUniqueInput[];
};
export type AllocationUpdateManyWithoutAllocated_toNestedInput = {
    create?: Prisma.XOR<Prisma.AllocationCreateWithoutAllocated_toInput, Prisma.AllocationUncheckedCreateWithoutAllocated_toInput> | Prisma.AllocationCreateWithoutAllocated_toInput[] | Prisma.AllocationUncheckedCreateWithoutAllocated_toInput[];
    connectOrCreate?: Prisma.AllocationCreateOrConnectWithoutAllocated_toInput | Prisma.AllocationCreateOrConnectWithoutAllocated_toInput[];
    upsert?: Prisma.AllocationUpsertWithWhereUniqueWithoutAllocated_toInput | Prisma.AllocationUpsertWithWhereUniqueWithoutAllocated_toInput[];
    createMany?: Prisma.AllocationCreateManyAllocated_toInputEnvelope;
    set?: Prisma.AllocationWhereUniqueInput | Prisma.AllocationWhereUniqueInput[];
    disconnect?: Prisma.AllocationWhereUniqueInput | Prisma.AllocationWhereUniqueInput[];
    delete?: Prisma.AllocationWhereUniqueInput | Prisma.AllocationWhereUniqueInput[];
    connect?: Prisma.AllocationWhereUniqueInput | Prisma.AllocationWhereUniqueInput[];
    update?: Prisma.AllocationUpdateWithWhereUniqueWithoutAllocated_toInput | Prisma.AllocationUpdateWithWhereUniqueWithoutAllocated_toInput[];
    updateMany?: Prisma.AllocationUpdateManyWithWhereWithoutAllocated_toInput | Prisma.AllocationUpdateManyWithWhereWithoutAllocated_toInput[];
    deleteMany?: Prisma.AllocationScalarWhereInput | Prisma.AllocationScalarWhereInput[];
};
export type AllocationUncheckedUpdateManyWithoutAllocated_toNestedInput = {
    create?: Prisma.XOR<Prisma.AllocationCreateWithoutAllocated_toInput, Prisma.AllocationUncheckedCreateWithoutAllocated_toInput> | Prisma.AllocationCreateWithoutAllocated_toInput[] | Prisma.AllocationUncheckedCreateWithoutAllocated_toInput[];
    connectOrCreate?: Prisma.AllocationCreateOrConnectWithoutAllocated_toInput | Prisma.AllocationCreateOrConnectWithoutAllocated_toInput[];
    upsert?: Prisma.AllocationUpsertWithWhereUniqueWithoutAllocated_toInput | Prisma.AllocationUpsertWithWhereUniqueWithoutAllocated_toInput[];
    createMany?: Prisma.AllocationCreateManyAllocated_toInputEnvelope;
    set?: Prisma.AllocationWhereUniqueInput | Prisma.AllocationWhereUniqueInput[];
    disconnect?: Prisma.AllocationWhereUniqueInput | Prisma.AllocationWhereUniqueInput[];
    delete?: Prisma.AllocationWhereUniqueInput | Prisma.AllocationWhereUniqueInput[];
    connect?: Prisma.AllocationWhereUniqueInput | Prisma.AllocationWhereUniqueInput[];
    update?: Prisma.AllocationUpdateWithWhereUniqueWithoutAllocated_toInput | Prisma.AllocationUpdateWithWhereUniqueWithoutAllocated_toInput[];
    updateMany?: Prisma.AllocationUpdateManyWithWhereWithoutAllocated_toInput | Prisma.AllocationUpdateManyWithWhereWithoutAllocated_toInput[];
    deleteMany?: Prisma.AllocationScalarWhereInput | Prisma.AllocationScalarWhereInput[];
};
export type AllocationCreateNestedManyWithoutAssetInput = {
    create?: Prisma.XOR<Prisma.AllocationCreateWithoutAssetInput, Prisma.AllocationUncheckedCreateWithoutAssetInput> | Prisma.AllocationCreateWithoutAssetInput[] | Prisma.AllocationUncheckedCreateWithoutAssetInput[];
    connectOrCreate?: Prisma.AllocationCreateOrConnectWithoutAssetInput | Prisma.AllocationCreateOrConnectWithoutAssetInput[];
    createMany?: Prisma.AllocationCreateManyAssetInputEnvelope;
    connect?: Prisma.AllocationWhereUniqueInput | Prisma.AllocationWhereUniqueInput[];
};
export type AllocationUncheckedCreateNestedManyWithoutAssetInput = {
    create?: Prisma.XOR<Prisma.AllocationCreateWithoutAssetInput, Prisma.AllocationUncheckedCreateWithoutAssetInput> | Prisma.AllocationCreateWithoutAssetInput[] | Prisma.AllocationUncheckedCreateWithoutAssetInput[];
    connectOrCreate?: Prisma.AllocationCreateOrConnectWithoutAssetInput | Prisma.AllocationCreateOrConnectWithoutAssetInput[];
    createMany?: Prisma.AllocationCreateManyAssetInputEnvelope;
    connect?: Prisma.AllocationWhereUniqueInput | Prisma.AllocationWhereUniqueInput[];
};
export type AllocationUpdateManyWithoutAssetNestedInput = {
    create?: Prisma.XOR<Prisma.AllocationCreateWithoutAssetInput, Prisma.AllocationUncheckedCreateWithoutAssetInput> | Prisma.AllocationCreateWithoutAssetInput[] | Prisma.AllocationUncheckedCreateWithoutAssetInput[];
    connectOrCreate?: Prisma.AllocationCreateOrConnectWithoutAssetInput | Prisma.AllocationCreateOrConnectWithoutAssetInput[];
    upsert?: Prisma.AllocationUpsertWithWhereUniqueWithoutAssetInput | Prisma.AllocationUpsertWithWhereUniqueWithoutAssetInput[];
    createMany?: Prisma.AllocationCreateManyAssetInputEnvelope;
    set?: Prisma.AllocationWhereUniqueInput | Prisma.AllocationWhereUniqueInput[];
    disconnect?: Prisma.AllocationWhereUniqueInput | Prisma.AllocationWhereUniqueInput[];
    delete?: Prisma.AllocationWhereUniqueInput | Prisma.AllocationWhereUniqueInput[];
    connect?: Prisma.AllocationWhereUniqueInput | Prisma.AllocationWhereUniqueInput[];
    update?: Prisma.AllocationUpdateWithWhereUniqueWithoutAssetInput | Prisma.AllocationUpdateWithWhereUniqueWithoutAssetInput[];
    updateMany?: Prisma.AllocationUpdateManyWithWhereWithoutAssetInput | Prisma.AllocationUpdateManyWithWhereWithoutAssetInput[];
    deleteMany?: Prisma.AllocationScalarWhereInput | Prisma.AllocationScalarWhereInput[];
};
export type AllocationUncheckedUpdateManyWithoutAssetNestedInput = {
    create?: Prisma.XOR<Prisma.AllocationCreateWithoutAssetInput, Prisma.AllocationUncheckedCreateWithoutAssetInput> | Prisma.AllocationCreateWithoutAssetInput[] | Prisma.AllocationUncheckedCreateWithoutAssetInput[];
    connectOrCreate?: Prisma.AllocationCreateOrConnectWithoutAssetInput | Prisma.AllocationCreateOrConnectWithoutAssetInput[];
    upsert?: Prisma.AllocationUpsertWithWhereUniqueWithoutAssetInput | Prisma.AllocationUpsertWithWhereUniqueWithoutAssetInput[];
    createMany?: Prisma.AllocationCreateManyAssetInputEnvelope;
    set?: Prisma.AllocationWhereUniqueInput | Prisma.AllocationWhereUniqueInput[];
    disconnect?: Prisma.AllocationWhereUniqueInput | Prisma.AllocationWhereUniqueInput[];
    delete?: Prisma.AllocationWhereUniqueInput | Prisma.AllocationWhereUniqueInput[];
    connect?: Prisma.AllocationWhereUniqueInput | Prisma.AllocationWhereUniqueInput[];
    update?: Prisma.AllocationUpdateWithWhereUniqueWithoutAssetInput | Prisma.AllocationUpdateWithWhereUniqueWithoutAssetInput[];
    updateMany?: Prisma.AllocationUpdateManyWithWhereWithoutAssetInput | Prisma.AllocationUpdateManyWithWhereWithoutAssetInput[];
    deleteMany?: Prisma.AllocationScalarWhereInput | Prisma.AllocationScalarWhereInput[];
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type EnumAllocation_Approval_StatusFieldUpdateOperationsInput = {
    set?: $Enums.Allocation_Approval_Status;
};
export type AllocationCreateWithoutAllocated_toInput = {
    reason?: string | null;
    allocated_date?: Date | string;
    return_date?: Date | string | null;
    status: $Enums.Allocation_Approval_Status;
    location: string;
    asset: Prisma.AssetCreateNestedOneWithoutAllocationsInput;
};
export type AllocationUncheckedCreateWithoutAllocated_toInput = {
    id?: number;
    assetId: number;
    reason?: string | null;
    allocated_date?: Date | string;
    return_date?: Date | string | null;
    status: $Enums.Allocation_Approval_Status;
    location: string;
};
export type AllocationCreateOrConnectWithoutAllocated_toInput = {
    where: Prisma.AllocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.AllocationCreateWithoutAllocated_toInput, Prisma.AllocationUncheckedCreateWithoutAllocated_toInput>;
};
export type AllocationCreateManyAllocated_toInputEnvelope = {
    data: Prisma.AllocationCreateManyAllocated_toInput | Prisma.AllocationCreateManyAllocated_toInput[];
    skipDuplicates?: boolean;
};
export type AllocationUpsertWithWhereUniqueWithoutAllocated_toInput = {
    where: Prisma.AllocationWhereUniqueInput;
    update: Prisma.XOR<Prisma.AllocationUpdateWithoutAllocated_toInput, Prisma.AllocationUncheckedUpdateWithoutAllocated_toInput>;
    create: Prisma.XOR<Prisma.AllocationCreateWithoutAllocated_toInput, Prisma.AllocationUncheckedCreateWithoutAllocated_toInput>;
};
export type AllocationUpdateWithWhereUniqueWithoutAllocated_toInput = {
    where: Prisma.AllocationWhereUniqueInput;
    data: Prisma.XOR<Prisma.AllocationUpdateWithoutAllocated_toInput, Prisma.AllocationUncheckedUpdateWithoutAllocated_toInput>;
};
export type AllocationUpdateManyWithWhereWithoutAllocated_toInput = {
    where: Prisma.AllocationScalarWhereInput;
    data: Prisma.XOR<Prisma.AllocationUpdateManyMutationInput, Prisma.AllocationUncheckedUpdateManyWithoutAllocated_toInput>;
};
export type AllocationScalarWhereInput = {
    AND?: Prisma.AllocationScalarWhereInput | Prisma.AllocationScalarWhereInput[];
    OR?: Prisma.AllocationScalarWhereInput[];
    NOT?: Prisma.AllocationScalarWhereInput | Prisma.AllocationScalarWhereInput[];
    id?: Prisma.IntFilter<"Allocation"> | number;
    assetId?: Prisma.IntFilter<"Allocation"> | number;
    userId?: Prisma.IntFilter<"Allocation"> | number;
    reason?: Prisma.StringNullableFilter<"Allocation"> | string | null;
    allocated_date?: Prisma.DateTimeFilter<"Allocation"> | Date | string;
    return_date?: Prisma.DateTimeNullableFilter<"Allocation"> | Date | string | null;
    status?: Prisma.EnumAllocation_Approval_StatusFilter<"Allocation"> | $Enums.Allocation_Approval_Status;
    location?: Prisma.StringFilter<"Allocation"> | string;
};
export type AllocationCreateWithoutAssetInput = {
    reason?: string | null;
    allocated_date?: Date | string;
    return_date?: Date | string | null;
    status: $Enums.Allocation_Approval_Status;
    location: string;
    allocated_to: Prisma.UserCreateNestedOneWithoutAllocated_toInput;
};
export type AllocationUncheckedCreateWithoutAssetInput = {
    id?: number;
    userId: number;
    reason?: string | null;
    allocated_date?: Date | string;
    return_date?: Date | string | null;
    status: $Enums.Allocation_Approval_Status;
    location: string;
};
export type AllocationCreateOrConnectWithoutAssetInput = {
    where: Prisma.AllocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.AllocationCreateWithoutAssetInput, Prisma.AllocationUncheckedCreateWithoutAssetInput>;
};
export type AllocationCreateManyAssetInputEnvelope = {
    data: Prisma.AllocationCreateManyAssetInput | Prisma.AllocationCreateManyAssetInput[];
    skipDuplicates?: boolean;
};
export type AllocationUpsertWithWhereUniqueWithoutAssetInput = {
    where: Prisma.AllocationWhereUniqueInput;
    update: Prisma.XOR<Prisma.AllocationUpdateWithoutAssetInput, Prisma.AllocationUncheckedUpdateWithoutAssetInput>;
    create: Prisma.XOR<Prisma.AllocationCreateWithoutAssetInput, Prisma.AllocationUncheckedCreateWithoutAssetInput>;
};
export type AllocationUpdateWithWhereUniqueWithoutAssetInput = {
    where: Prisma.AllocationWhereUniqueInput;
    data: Prisma.XOR<Prisma.AllocationUpdateWithoutAssetInput, Prisma.AllocationUncheckedUpdateWithoutAssetInput>;
};
export type AllocationUpdateManyWithWhereWithoutAssetInput = {
    where: Prisma.AllocationScalarWhereInput;
    data: Prisma.XOR<Prisma.AllocationUpdateManyMutationInput, Prisma.AllocationUncheckedUpdateManyWithoutAssetInput>;
};
export type AllocationCreateManyAllocated_toInput = {
    id?: number;
    assetId: number;
    reason?: string | null;
    allocated_date?: Date | string;
    return_date?: Date | string | null;
    status: $Enums.Allocation_Approval_Status;
    location: string;
};
export type AllocationUpdateWithoutAllocated_toInput = {
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allocated_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    return_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumAllocation_Approval_StatusFieldUpdateOperationsInput | $Enums.Allocation_Approval_Status;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    asset?: Prisma.AssetUpdateOneRequiredWithoutAllocationsNestedInput;
};
export type AllocationUncheckedUpdateWithoutAllocated_toInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    assetId?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allocated_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    return_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumAllocation_Approval_StatusFieldUpdateOperationsInput | $Enums.Allocation_Approval_Status;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AllocationUncheckedUpdateManyWithoutAllocated_toInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    assetId?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allocated_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    return_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumAllocation_Approval_StatusFieldUpdateOperationsInput | $Enums.Allocation_Approval_Status;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AllocationCreateManyAssetInput = {
    id?: number;
    userId: number;
    reason?: string | null;
    allocated_date?: Date | string;
    return_date?: Date | string | null;
    status: $Enums.Allocation_Approval_Status;
    location: string;
};
export type AllocationUpdateWithoutAssetInput = {
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allocated_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    return_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumAllocation_Approval_StatusFieldUpdateOperationsInput | $Enums.Allocation_Approval_Status;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    allocated_to?: Prisma.UserUpdateOneRequiredWithoutAllocated_toNestedInput;
};
export type AllocationUncheckedUpdateWithoutAssetInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allocated_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    return_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumAllocation_Approval_StatusFieldUpdateOperationsInput | $Enums.Allocation_Approval_Status;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AllocationUncheckedUpdateManyWithoutAssetInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allocated_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    return_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumAllocation_Approval_StatusFieldUpdateOperationsInput | $Enums.Allocation_Approval_Status;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AllocationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    assetId?: boolean;
    userId?: boolean;
    reason?: boolean;
    allocated_date?: boolean;
    return_date?: boolean;
    status?: boolean;
    location?: boolean;
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
    allocated_to?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["allocation"]>;
export type AllocationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    assetId?: boolean;
    userId?: boolean;
    reason?: boolean;
    allocated_date?: boolean;
    return_date?: boolean;
    status?: boolean;
    location?: boolean;
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
    allocated_to?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["allocation"]>;
export type AllocationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    assetId?: boolean;
    userId?: boolean;
    reason?: boolean;
    allocated_date?: boolean;
    return_date?: boolean;
    status?: boolean;
    location?: boolean;
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
    allocated_to?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["allocation"]>;
export type AllocationSelectScalar = {
    id?: boolean;
    assetId?: boolean;
    userId?: boolean;
    reason?: boolean;
    allocated_date?: boolean;
    return_date?: boolean;
    status?: boolean;
    location?: boolean;
};
export type AllocationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "assetId" | "userId" | "reason" | "allocated_date" | "return_date" | "status" | "location", ExtArgs["result"]["allocation"]>;
export type AllocationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
    allocated_to?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type AllocationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
    allocated_to?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type AllocationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
    allocated_to?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $AllocationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Allocation";
    objects: {
        asset: Prisma.$AssetPayload<ExtArgs>;
        allocated_to: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        assetId: number;
        userId: number;
        reason: string | null;
        allocated_date: Date;
        return_date: Date | null;
        status: $Enums.Allocation_Approval_Status;
        location: string;
    }, ExtArgs["result"]["allocation"]>;
    composites: {};
};
export type AllocationGetPayload<S extends boolean | null | undefined | AllocationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AllocationPayload, S>;
export type AllocationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AllocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AllocationCountAggregateInputType | true;
};
export interface AllocationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Allocation'];
        meta: {
            name: 'Allocation';
        };
    };
    findUnique<T extends AllocationFindUniqueArgs>(args: Prisma.SelectSubset<T, AllocationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AllocationClient<runtime.Types.Result.GetResult<Prisma.$AllocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AllocationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AllocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AllocationClient<runtime.Types.Result.GetResult<Prisma.$AllocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AllocationFindFirstArgs>(args?: Prisma.SelectSubset<T, AllocationFindFirstArgs<ExtArgs>>): Prisma.Prisma__AllocationClient<runtime.Types.Result.GetResult<Prisma.$AllocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AllocationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AllocationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AllocationClient<runtime.Types.Result.GetResult<Prisma.$AllocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AllocationFindManyArgs>(args?: Prisma.SelectSubset<T, AllocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AllocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AllocationCreateArgs>(args: Prisma.SelectSubset<T, AllocationCreateArgs<ExtArgs>>): Prisma.Prisma__AllocationClient<runtime.Types.Result.GetResult<Prisma.$AllocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AllocationCreateManyArgs>(args?: Prisma.SelectSubset<T, AllocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AllocationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AllocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AllocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AllocationDeleteArgs>(args: Prisma.SelectSubset<T, AllocationDeleteArgs<ExtArgs>>): Prisma.Prisma__AllocationClient<runtime.Types.Result.GetResult<Prisma.$AllocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AllocationUpdateArgs>(args: Prisma.SelectSubset<T, AllocationUpdateArgs<ExtArgs>>): Prisma.Prisma__AllocationClient<runtime.Types.Result.GetResult<Prisma.$AllocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AllocationDeleteManyArgs>(args?: Prisma.SelectSubset<T, AllocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AllocationUpdateManyArgs>(args: Prisma.SelectSubset<T, AllocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AllocationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AllocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AllocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AllocationUpsertArgs>(args: Prisma.SelectSubset<T, AllocationUpsertArgs<ExtArgs>>): Prisma.Prisma__AllocationClient<runtime.Types.Result.GetResult<Prisma.$AllocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AllocationCountArgs>(args?: Prisma.Subset<T, AllocationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AllocationCountAggregateOutputType> : number>;
    aggregate<T extends AllocationAggregateArgs>(args: Prisma.Subset<T, AllocationAggregateArgs>): Prisma.PrismaPromise<GetAllocationAggregateType<T>>;
    groupBy<T extends AllocationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AllocationGroupByArgs['orderBy'];
    } : {
        orderBy?: AllocationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AllocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAllocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AllocationFieldRefs;
}
export interface Prisma__AllocationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    asset<T extends Prisma.AssetDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AssetDefaultArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    allocated_to<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AllocationFieldRefs {
    readonly id: Prisma.FieldRef<"Allocation", 'Int'>;
    readonly assetId: Prisma.FieldRef<"Allocation", 'Int'>;
    readonly userId: Prisma.FieldRef<"Allocation", 'Int'>;
    readonly reason: Prisma.FieldRef<"Allocation", 'String'>;
    readonly allocated_date: Prisma.FieldRef<"Allocation", 'DateTime'>;
    readonly return_date: Prisma.FieldRef<"Allocation", 'DateTime'>;
    readonly status: Prisma.FieldRef<"Allocation", 'Allocation_Approval_Status'>;
    readonly location: Prisma.FieldRef<"Allocation", 'String'>;
}
export type AllocationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AllocationSelect<ExtArgs> | null;
    omit?: Prisma.AllocationOmit<ExtArgs> | null;
    include?: Prisma.AllocationInclude<ExtArgs> | null;
    where: Prisma.AllocationWhereUniqueInput;
};
export type AllocationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AllocationSelect<ExtArgs> | null;
    omit?: Prisma.AllocationOmit<ExtArgs> | null;
    include?: Prisma.AllocationInclude<ExtArgs> | null;
    where: Prisma.AllocationWhereUniqueInput;
};
export type AllocationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AllocationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AllocationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AllocationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AllocationSelect<ExtArgs> | null;
    omit?: Prisma.AllocationOmit<ExtArgs> | null;
    include?: Prisma.AllocationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AllocationCreateInput, Prisma.AllocationUncheckedCreateInput>;
};
export type AllocationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AllocationCreateManyInput | Prisma.AllocationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AllocationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AllocationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AllocationOmit<ExtArgs> | null;
    data: Prisma.AllocationCreateManyInput | Prisma.AllocationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AllocationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AllocationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AllocationSelect<ExtArgs> | null;
    omit?: Prisma.AllocationOmit<ExtArgs> | null;
    include?: Prisma.AllocationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AllocationUpdateInput, Prisma.AllocationUncheckedUpdateInput>;
    where: Prisma.AllocationWhereUniqueInput;
};
export type AllocationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AllocationUpdateManyMutationInput, Prisma.AllocationUncheckedUpdateManyInput>;
    where?: Prisma.AllocationWhereInput;
    limit?: number;
};
export type AllocationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AllocationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AllocationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AllocationUpdateManyMutationInput, Prisma.AllocationUncheckedUpdateManyInput>;
    where?: Prisma.AllocationWhereInput;
    limit?: number;
    include?: Prisma.AllocationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AllocationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AllocationSelect<ExtArgs> | null;
    omit?: Prisma.AllocationOmit<ExtArgs> | null;
    include?: Prisma.AllocationInclude<ExtArgs> | null;
    where: Prisma.AllocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.AllocationCreateInput, Prisma.AllocationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AllocationUpdateInput, Prisma.AllocationUncheckedUpdateInput>;
};
export type AllocationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AllocationSelect<ExtArgs> | null;
    omit?: Prisma.AllocationOmit<ExtArgs> | null;
    include?: Prisma.AllocationInclude<ExtArgs> | null;
    where: Prisma.AllocationWhereUniqueInput;
};
export type AllocationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AllocationWhereInput;
    limit?: number;
};
export type AllocationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AllocationSelect<ExtArgs> | null;
    omit?: Prisma.AllocationOmit<ExtArgs> | null;
    include?: Prisma.AllocationInclude<ExtArgs> | null;
};
//# sourceMappingURL=Allocation.d.ts.map