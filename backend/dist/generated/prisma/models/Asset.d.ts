import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AssetModel = runtime.Types.Result.DefaultSelection<Prisma.$AssetPayload>;
export type AggregateAsset = {
    _count: AssetCountAggregateOutputType | null;
    _avg: AssetAvgAggregateOutputType | null;
    _sum: AssetSumAggregateOutputType | null;
    _min: AssetMinAggregateOutputType | null;
    _max: AssetMaxAggregateOutputType | null;
};
export type AssetAvgAggregateOutputType = {
    id: number | null;
    categoryId: number | null;
};
export type AssetSumAggregateOutputType = {
    id: number | null;
    categoryId: number | null;
};
export type AssetMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    categoryId: number | null;
    missing: boolean | null;
};
export type AssetMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    categoryId: number | null;
    missing: boolean | null;
};
export type AssetCountAggregateOutputType = {
    id: number;
    name: number;
    categoryId: number;
    missing: number;
    _all: number;
};
export type AssetAvgAggregateInputType = {
    id?: true;
    categoryId?: true;
};
export type AssetSumAggregateInputType = {
    id?: true;
    categoryId?: true;
};
export type AssetMinAggregateInputType = {
    id?: true;
    name?: true;
    categoryId?: true;
    missing?: true;
};
export type AssetMaxAggregateInputType = {
    id?: true;
    name?: true;
    categoryId?: true;
    missing?: true;
};
export type AssetCountAggregateInputType = {
    id?: true;
    name?: true;
    categoryId?: true;
    missing?: true;
    _all?: true;
};
export type AssetAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetWhereInput;
    orderBy?: Prisma.AssetOrderByWithRelationInput | Prisma.AssetOrderByWithRelationInput[];
    cursor?: Prisma.AssetWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AssetCountAggregateInputType;
    _avg?: AssetAvgAggregateInputType;
    _sum?: AssetSumAggregateInputType;
    _min?: AssetMinAggregateInputType;
    _max?: AssetMaxAggregateInputType;
};
export type GetAssetAggregateType<T extends AssetAggregateArgs> = {
    [P in keyof T & keyof AggregateAsset]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAsset[P]> : Prisma.GetScalarType<T[P], AggregateAsset[P]>;
};
export type AssetGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetWhereInput;
    orderBy?: Prisma.AssetOrderByWithAggregationInput | Prisma.AssetOrderByWithAggregationInput[];
    by: Prisma.AssetScalarFieldEnum[] | Prisma.AssetScalarFieldEnum;
    having?: Prisma.AssetScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AssetCountAggregateInputType | true;
    _avg?: AssetAvgAggregateInputType;
    _sum?: AssetSumAggregateInputType;
    _min?: AssetMinAggregateInputType;
    _max?: AssetMaxAggregateInputType;
};
export type AssetGroupByOutputType = {
    id: number;
    name: string;
    categoryId: number;
    missing: boolean;
    _count: AssetCountAggregateOutputType | null;
    _avg: AssetAvgAggregateOutputType | null;
    _sum: AssetSumAggregateOutputType | null;
    _min: AssetMinAggregateOutputType | null;
    _max: AssetMaxAggregateOutputType | null;
};
export type GetAssetGroupByPayload<T extends AssetGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AssetGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AssetGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AssetGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AssetGroupByOutputType[P]>;
}>>;
export type AssetWhereInput = {
    AND?: Prisma.AssetWhereInput | Prisma.AssetWhereInput[];
    OR?: Prisma.AssetWhereInput[];
    NOT?: Prisma.AssetWhereInput | Prisma.AssetWhereInput[];
    id?: Prisma.IntFilter<"Asset"> | number;
    name?: Prisma.StringFilter<"Asset"> | string;
    categoryId?: Prisma.IntFilter<"Asset"> | number;
    missing?: Prisma.BoolFilter<"Asset"> | boolean;
    category?: Prisma.XOR<Prisma.CategoryScalarRelationFilter, Prisma.CategoryWhereInput>;
    allocations?: Prisma.AllocationListRelationFilter;
    maintainances?: Prisma.MaintananceListRelationFilter;
    audits?: Prisma.AuditListRelationFilter;
};
export type AssetOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    missing?: Prisma.SortOrder;
    category?: Prisma.CategoryOrderByWithRelationInput;
    allocations?: Prisma.AllocationOrderByRelationAggregateInput;
    maintainances?: Prisma.MaintananceOrderByRelationAggregateInput;
    audits?: Prisma.AuditOrderByRelationAggregateInput;
};
export type AssetWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.AssetWhereInput | Prisma.AssetWhereInput[];
    OR?: Prisma.AssetWhereInput[];
    NOT?: Prisma.AssetWhereInput | Prisma.AssetWhereInput[];
    name?: Prisma.StringFilter<"Asset"> | string;
    categoryId?: Prisma.IntFilter<"Asset"> | number;
    missing?: Prisma.BoolFilter<"Asset"> | boolean;
    category?: Prisma.XOR<Prisma.CategoryScalarRelationFilter, Prisma.CategoryWhereInput>;
    allocations?: Prisma.AllocationListRelationFilter;
    maintainances?: Prisma.MaintananceListRelationFilter;
    audits?: Prisma.AuditListRelationFilter;
}, "id">;
export type AssetOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    missing?: Prisma.SortOrder;
    _count?: Prisma.AssetCountOrderByAggregateInput;
    _avg?: Prisma.AssetAvgOrderByAggregateInput;
    _max?: Prisma.AssetMaxOrderByAggregateInput;
    _min?: Prisma.AssetMinOrderByAggregateInput;
    _sum?: Prisma.AssetSumOrderByAggregateInput;
};
export type AssetScalarWhereWithAggregatesInput = {
    AND?: Prisma.AssetScalarWhereWithAggregatesInput | Prisma.AssetScalarWhereWithAggregatesInput[];
    OR?: Prisma.AssetScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AssetScalarWhereWithAggregatesInput | Prisma.AssetScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Asset"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Asset"> | string;
    categoryId?: Prisma.IntWithAggregatesFilter<"Asset"> | number;
    missing?: Prisma.BoolWithAggregatesFilter<"Asset"> | boolean;
};
export type AssetCreateInput = {
    name: string;
    missing?: boolean;
    category: Prisma.CategoryCreateNestedOneWithoutAssetsInput;
    allocations?: Prisma.AllocationCreateNestedManyWithoutAssetInput;
    maintainances?: Prisma.MaintananceCreateNestedManyWithoutAssetInput;
    audits?: Prisma.AuditCreateNestedManyWithoutAssetInput;
};
export type AssetUncheckedCreateInput = {
    id?: number;
    name: string;
    categoryId: number;
    missing?: boolean;
    allocations?: Prisma.AllocationUncheckedCreateNestedManyWithoutAssetInput;
    maintainances?: Prisma.MaintananceUncheckedCreateNestedManyWithoutAssetInput;
    audits?: Prisma.AuditUncheckedCreateNestedManyWithoutAssetInput;
};
export type AssetUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    missing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    category?: Prisma.CategoryUpdateOneRequiredWithoutAssetsNestedInput;
    allocations?: Prisma.AllocationUpdateManyWithoutAssetNestedInput;
    maintainances?: Prisma.MaintananceUpdateManyWithoutAssetNestedInput;
    audits?: Prisma.AuditUpdateManyWithoutAssetNestedInput;
};
export type AssetUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.IntFieldUpdateOperationsInput | number;
    missing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    allocations?: Prisma.AllocationUncheckedUpdateManyWithoutAssetNestedInput;
    maintainances?: Prisma.MaintananceUncheckedUpdateManyWithoutAssetNestedInput;
    audits?: Prisma.AuditUncheckedUpdateManyWithoutAssetNestedInput;
};
export type AssetCreateManyInput = {
    id?: number;
    name: string;
    categoryId: number;
    missing?: boolean;
};
export type AssetUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    missing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type AssetUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.IntFieldUpdateOperationsInput | number;
    missing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type AssetListRelationFilter = {
    every?: Prisma.AssetWhereInput;
    some?: Prisma.AssetWhereInput;
    none?: Prisma.AssetWhereInput;
};
export type AssetOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AssetCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    missing?: Prisma.SortOrder;
};
export type AssetAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
};
export type AssetMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    missing?: Prisma.SortOrder;
};
export type AssetMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    missing?: Prisma.SortOrder;
};
export type AssetSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
};
export type AssetScalarRelationFilter = {
    is?: Prisma.AssetWhereInput;
    isNot?: Prisma.AssetWhereInput;
};
export type AssetCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutCategoryInput, Prisma.AssetUncheckedCreateWithoutCategoryInput> | Prisma.AssetCreateWithoutCategoryInput[] | Prisma.AssetUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutCategoryInput | Prisma.AssetCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.AssetCreateManyCategoryInputEnvelope;
    connect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
};
export type AssetUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutCategoryInput, Prisma.AssetUncheckedCreateWithoutCategoryInput> | Prisma.AssetCreateWithoutCategoryInput[] | Prisma.AssetUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutCategoryInput | Prisma.AssetCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.AssetCreateManyCategoryInputEnvelope;
    connect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
};
export type AssetUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutCategoryInput, Prisma.AssetUncheckedCreateWithoutCategoryInput> | Prisma.AssetCreateWithoutCategoryInput[] | Prisma.AssetUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutCategoryInput | Prisma.AssetCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.AssetUpsertWithWhereUniqueWithoutCategoryInput | Prisma.AssetUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.AssetCreateManyCategoryInputEnvelope;
    set?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    disconnect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    delete?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    connect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    update?: Prisma.AssetUpdateWithWhereUniqueWithoutCategoryInput | Prisma.AssetUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.AssetUpdateManyWithWhereWithoutCategoryInput | Prisma.AssetUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.AssetScalarWhereInput | Prisma.AssetScalarWhereInput[];
};
export type AssetUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutCategoryInput, Prisma.AssetUncheckedCreateWithoutCategoryInput> | Prisma.AssetCreateWithoutCategoryInput[] | Prisma.AssetUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutCategoryInput | Prisma.AssetCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.AssetUpsertWithWhereUniqueWithoutCategoryInput | Prisma.AssetUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.AssetCreateManyCategoryInputEnvelope;
    set?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    disconnect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    delete?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    connect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    update?: Prisma.AssetUpdateWithWhereUniqueWithoutCategoryInput | Prisma.AssetUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.AssetUpdateManyWithWhereWithoutCategoryInput | Prisma.AssetUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.AssetScalarWhereInput | Prisma.AssetScalarWhereInput[];
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type AssetCreateNestedOneWithoutAllocationsInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutAllocationsInput, Prisma.AssetUncheckedCreateWithoutAllocationsInput>;
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutAllocationsInput;
    connect?: Prisma.AssetWhereUniqueInput;
};
export type AssetUpdateOneRequiredWithoutAllocationsNestedInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutAllocationsInput, Prisma.AssetUncheckedCreateWithoutAllocationsInput>;
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutAllocationsInput;
    upsert?: Prisma.AssetUpsertWithoutAllocationsInput;
    connect?: Prisma.AssetWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AssetUpdateToOneWithWhereWithoutAllocationsInput, Prisma.AssetUpdateWithoutAllocationsInput>, Prisma.AssetUncheckedUpdateWithoutAllocationsInput>;
};
export type AssetCreateNestedOneWithoutMaintainancesInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutMaintainancesInput, Prisma.AssetUncheckedCreateWithoutMaintainancesInput>;
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutMaintainancesInput;
    connect?: Prisma.AssetWhereUniqueInput;
};
export type AssetUpdateOneRequiredWithoutMaintainancesNestedInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutMaintainancesInput, Prisma.AssetUncheckedCreateWithoutMaintainancesInput>;
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutMaintainancesInput;
    upsert?: Prisma.AssetUpsertWithoutMaintainancesInput;
    connect?: Prisma.AssetWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AssetUpdateToOneWithWhereWithoutMaintainancesInput, Prisma.AssetUpdateWithoutMaintainancesInput>, Prisma.AssetUncheckedUpdateWithoutMaintainancesInput>;
};
export type AssetCreateNestedOneWithoutAuditsInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutAuditsInput, Prisma.AssetUncheckedCreateWithoutAuditsInput>;
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutAuditsInput;
    connect?: Prisma.AssetWhereUniqueInput;
};
export type AssetUpdateOneRequiredWithoutAuditsNestedInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutAuditsInput, Prisma.AssetUncheckedCreateWithoutAuditsInput>;
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutAuditsInput;
    upsert?: Prisma.AssetUpsertWithoutAuditsInput;
    connect?: Prisma.AssetWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AssetUpdateToOneWithWhereWithoutAuditsInput, Prisma.AssetUpdateWithoutAuditsInput>, Prisma.AssetUncheckedUpdateWithoutAuditsInput>;
};
export type AssetCreateWithoutCategoryInput = {
    name: string;
    missing?: boolean;
    allocations?: Prisma.AllocationCreateNestedManyWithoutAssetInput;
    maintainances?: Prisma.MaintananceCreateNestedManyWithoutAssetInput;
    audits?: Prisma.AuditCreateNestedManyWithoutAssetInput;
};
export type AssetUncheckedCreateWithoutCategoryInput = {
    id?: number;
    name: string;
    missing?: boolean;
    allocations?: Prisma.AllocationUncheckedCreateNestedManyWithoutAssetInput;
    maintainances?: Prisma.MaintananceUncheckedCreateNestedManyWithoutAssetInput;
    audits?: Prisma.AuditUncheckedCreateNestedManyWithoutAssetInput;
};
export type AssetCreateOrConnectWithoutCategoryInput = {
    where: Prisma.AssetWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetCreateWithoutCategoryInput, Prisma.AssetUncheckedCreateWithoutCategoryInput>;
};
export type AssetCreateManyCategoryInputEnvelope = {
    data: Prisma.AssetCreateManyCategoryInput | Prisma.AssetCreateManyCategoryInput[];
    skipDuplicates?: boolean;
};
export type AssetUpsertWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.AssetWhereUniqueInput;
    update: Prisma.XOR<Prisma.AssetUpdateWithoutCategoryInput, Prisma.AssetUncheckedUpdateWithoutCategoryInput>;
    create: Prisma.XOR<Prisma.AssetCreateWithoutCategoryInput, Prisma.AssetUncheckedCreateWithoutCategoryInput>;
};
export type AssetUpdateWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.AssetWhereUniqueInput;
    data: Prisma.XOR<Prisma.AssetUpdateWithoutCategoryInput, Prisma.AssetUncheckedUpdateWithoutCategoryInput>;
};
export type AssetUpdateManyWithWhereWithoutCategoryInput = {
    where: Prisma.AssetScalarWhereInput;
    data: Prisma.XOR<Prisma.AssetUpdateManyMutationInput, Prisma.AssetUncheckedUpdateManyWithoutCategoryInput>;
};
export type AssetScalarWhereInput = {
    AND?: Prisma.AssetScalarWhereInput | Prisma.AssetScalarWhereInput[];
    OR?: Prisma.AssetScalarWhereInput[];
    NOT?: Prisma.AssetScalarWhereInput | Prisma.AssetScalarWhereInput[];
    id?: Prisma.IntFilter<"Asset"> | number;
    name?: Prisma.StringFilter<"Asset"> | string;
    categoryId?: Prisma.IntFilter<"Asset"> | number;
    missing?: Prisma.BoolFilter<"Asset"> | boolean;
};
export type AssetCreateWithoutAllocationsInput = {
    name: string;
    missing?: boolean;
    category: Prisma.CategoryCreateNestedOneWithoutAssetsInput;
    maintainances?: Prisma.MaintananceCreateNestedManyWithoutAssetInput;
    audits?: Prisma.AuditCreateNestedManyWithoutAssetInput;
};
export type AssetUncheckedCreateWithoutAllocationsInput = {
    id?: number;
    name: string;
    categoryId: number;
    missing?: boolean;
    maintainances?: Prisma.MaintananceUncheckedCreateNestedManyWithoutAssetInput;
    audits?: Prisma.AuditUncheckedCreateNestedManyWithoutAssetInput;
};
export type AssetCreateOrConnectWithoutAllocationsInput = {
    where: Prisma.AssetWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetCreateWithoutAllocationsInput, Prisma.AssetUncheckedCreateWithoutAllocationsInput>;
};
export type AssetUpsertWithoutAllocationsInput = {
    update: Prisma.XOR<Prisma.AssetUpdateWithoutAllocationsInput, Prisma.AssetUncheckedUpdateWithoutAllocationsInput>;
    create: Prisma.XOR<Prisma.AssetCreateWithoutAllocationsInput, Prisma.AssetUncheckedCreateWithoutAllocationsInput>;
    where?: Prisma.AssetWhereInput;
};
export type AssetUpdateToOneWithWhereWithoutAllocationsInput = {
    where?: Prisma.AssetWhereInput;
    data: Prisma.XOR<Prisma.AssetUpdateWithoutAllocationsInput, Prisma.AssetUncheckedUpdateWithoutAllocationsInput>;
};
export type AssetUpdateWithoutAllocationsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    missing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    category?: Prisma.CategoryUpdateOneRequiredWithoutAssetsNestedInput;
    maintainances?: Prisma.MaintananceUpdateManyWithoutAssetNestedInput;
    audits?: Prisma.AuditUpdateManyWithoutAssetNestedInput;
};
export type AssetUncheckedUpdateWithoutAllocationsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.IntFieldUpdateOperationsInput | number;
    missing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    maintainances?: Prisma.MaintananceUncheckedUpdateManyWithoutAssetNestedInput;
    audits?: Prisma.AuditUncheckedUpdateManyWithoutAssetNestedInput;
};
export type AssetCreateWithoutMaintainancesInput = {
    name: string;
    missing?: boolean;
    category: Prisma.CategoryCreateNestedOneWithoutAssetsInput;
    allocations?: Prisma.AllocationCreateNestedManyWithoutAssetInput;
    audits?: Prisma.AuditCreateNestedManyWithoutAssetInput;
};
export type AssetUncheckedCreateWithoutMaintainancesInput = {
    id?: number;
    name: string;
    categoryId: number;
    missing?: boolean;
    allocations?: Prisma.AllocationUncheckedCreateNestedManyWithoutAssetInput;
    audits?: Prisma.AuditUncheckedCreateNestedManyWithoutAssetInput;
};
export type AssetCreateOrConnectWithoutMaintainancesInput = {
    where: Prisma.AssetWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetCreateWithoutMaintainancesInput, Prisma.AssetUncheckedCreateWithoutMaintainancesInput>;
};
export type AssetUpsertWithoutMaintainancesInput = {
    update: Prisma.XOR<Prisma.AssetUpdateWithoutMaintainancesInput, Prisma.AssetUncheckedUpdateWithoutMaintainancesInput>;
    create: Prisma.XOR<Prisma.AssetCreateWithoutMaintainancesInput, Prisma.AssetUncheckedCreateWithoutMaintainancesInput>;
    where?: Prisma.AssetWhereInput;
};
export type AssetUpdateToOneWithWhereWithoutMaintainancesInput = {
    where?: Prisma.AssetWhereInput;
    data: Prisma.XOR<Prisma.AssetUpdateWithoutMaintainancesInput, Prisma.AssetUncheckedUpdateWithoutMaintainancesInput>;
};
export type AssetUpdateWithoutMaintainancesInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    missing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    category?: Prisma.CategoryUpdateOneRequiredWithoutAssetsNestedInput;
    allocations?: Prisma.AllocationUpdateManyWithoutAssetNestedInput;
    audits?: Prisma.AuditUpdateManyWithoutAssetNestedInput;
};
export type AssetUncheckedUpdateWithoutMaintainancesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.IntFieldUpdateOperationsInput | number;
    missing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    allocations?: Prisma.AllocationUncheckedUpdateManyWithoutAssetNestedInput;
    audits?: Prisma.AuditUncheckedUpdateManyWithoutAssetNestedInput;
};
export type AssetCreateWithoutAuditsInput = {
    name: string;
    missing?: boolean;
    category: Prisma.CategoryCreateNestedOneWithoutAssetsInput;
    allocations?: Prisma.AllocationCreateNestedManyWithoutAssetInput;
    maintainances?: Prisma.MaintananceCreateNestedManyWithoutAssetInput;
};
export type AssetUncheckedCreateWithoutAuditsInput = {
    id?: number;
    name: string;
    categoryId: number;
    missing?: boolean;
    allocations?: Prisma.AllocationUncheckedCreateNestedManyWithoutAssetInput;
    maintainances?: Prisma.MaintananceUncheckedCreateNestedManyWithoutAssetInput;
};
export type AssetCreateOrConnectWithoutAuditsInput = {
    where: Prisma.AssetWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetCreateWithoutAuditsInput, Prisma.AssetUncheckedCreateWithoutAuditsInput>;
};
export type AssetUpsertWithoutAuditsInput = {
    update: Prisma.XOR<Prisma.AssetUpdateWithoutAuditsInput, Prisma.AssetUncheckedUpdateWithoutAuditsInput>;
    create: Prisma.XOR<Prisma.AssetCreateWithoutAuditsInput, Prisma.AssetUncheckedCreateWithoutAuditsInput>;
    where?: Prisma.AssetWhereInput;
};
export type AssetUpdateToOneWithWhereWithoutAuditsInput = {
    where?: Prisma.AssetWhereInput;
    data: Prisma.XOR<Prisma.AssetUpdateWithoutAuditsInput, Prisma.AssetUncheckedUpdateWithoutAuditsInput>;
};
export type AssetUpdateWithoutAuditsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    missing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    category?: Prisma.CategoryUpdateOneRequiredWithoutAssetsNestedInput;
    allocations?: Prisma.AllocationUpdateManyWithoutAssetNestedInput;
    maintainances?: Prisma.MaintananceUpdateManyWithoutAssetNestedInput;
};
export type AssetUncheckedUpdateWithoutAuditsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.IntFieldUpdateOperationsInput | number;
    missing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    allocations?: Prisma.AllocationUncheckedUpdateManyWithoutAssetNestedInput;
    maintainances?: Prisma.MaintananceUncheckedUpdateManyWithoutAssetNestedInput;
};
export type AssetCreateManyCategoryInput = {
    id?: number;
    name: string;
    missing?: boolean;
};
export type AssetUpdateWithoutCategoryInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    missing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    allocations?: Prisma.AllocationUpdateManyWithoutAssetNestedInput;
    maintainances?: Prisma.MaintananceUpdateManyWithoutAssetNestedInput;
    audits?: Prisma.AuditUpdateManyWithoutAssetNestedInput;
};
export type AssetUncheckedUpdateWithoutCategoryInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    missing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    allocations?: Prisma.AllocationUncheckedUpdateManyWithoutAssetNestedInput;
    maintainances?: Prisma.MaintananceUncheckedUpdateManyWithoutAssetNestedInput;
    audits?: Prisma.AuditUncheckedUpdateManyWithoutAssetNestedInput;
};
export type AssetUncheckedUpdateManyWithoutCategoryInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    missing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type AssetCountOutputType = {
    allocations: number;
    maintainances: number;
    audits: number;
};
export type AssetCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    allocations?: boolean | AssetCountOutputTypeCountAllocationsArgs;
    maintainances?: boolean | AssetCountOutputTypeCountMaintainancesArgs;
    audits?: boolean | AssetCountOutputTypeCountAuditsArgs;
};
export type AssetCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetCountOutputTypeSelect<ExtArgs> | null;
};
export type AssetCountOutputTypeCountAllocationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AllocationWhereInput;
};
export type AssetCountOutputTypeCountMaintainancesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MaintananceWhereInput;
};
export type AssetCountOutputTypeCountAuditsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditWhereInput;
};
export type AssetSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    categoryId?: boolean;
    missing?: boolean;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
    allocations?: boolean | Prisma.Asset$allocationsArgs<ExtArgs>;
    maintainances?: boolean | Prisma.Asset$maintainancesArgs<ExtArgs>;
    audits?: boolean | Prisma.Asset$auditsArgs<ExtArgs>;
    _count?: boolean | Prisma.AssetCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["asset"]>;
export type AssetSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    categoryId?: boolean;
    missing?: boolean;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["asset"]>;
export type AssetSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    categoryId?: boolean;
    missing?: boolean;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["asset"]>;
export type AssetSelectScalar = {
    id?: boolean;
    name?: boolean;
    categoryId?: boolean;
    missing?: boolean;
};
export type AssetOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "categoryId" | "missing", ExtArgs["result"]["asset"]>;
export type AssetInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
    allocations?: boolean | Prisma.Asset$allocationsArgs<ExtArgs>;
    maintainances?: boolean | Prisma.Asset$maintainancesArgs<ExtArgs>;
    audits?: boolean | Prisma.Asset$auditsArgs<ExtArgs>;
    _count?: boolean | Prisma.AssetCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AssetIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
};
export type AssetIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
};
export type $AssetPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Asset";
    objects: {
        category: Prisma.$CategoryPayload<ExtArgs>;
        allocations: Prisma.$AllocationPayload<ExtArgs>[];
        maintainances: Prisma.$MaintanancePayload<ExtArgs>[];
        audits: Prisma.$AuditPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        categoryId: number;
        missing: boolean;
    }, ExtArgs["result"]["asset"]>;
    composites: {};
};
export type AssetGetPayload<S extends boolean | null | undefined | AssetDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AssetPayload, S>;
export type AssetCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AssetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AssetCountAggregateInputType | true;
};
export interface AssetDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Asset'];
        meta: {
            name: 'Asset';
        };
    };
    findUnique<T extends AssetFindUniqueArgs>(args: Prisma.SelectSubset<T, AssetFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AssetFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AssetFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AssetFindFirstArgs>(args?: Prisma.SelectSubset<T, AssetFindFirstArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AssetFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AssetFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AssetFindManyArgs>(args?: Prisma.SelectSubset<T, AssetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AssetCreateArgs>(args: Prisma.SelectSubset<T, AssetCreateArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AssetCreateManyArgs>(args?: Prisma.SelectSubset<T, AssetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AssetCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AssetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AssetDeleteArgs>(args: Prisma.SelectSubset<T, AssetDeleteArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AssetUpdateArgs>(args: Prisma.SelectSubset<T, AssetUpdateArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AssetDeleteManyArgs>(args?: Prisma.SelectSubset<T, AssetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AssetUpdateManyArgs>(args: Prisma.SelectSubset<T, AssetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AssetUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AssetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AssetUpsertArgs>(args: Prisma.SelectSubset<T, AssetUpsertArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AssetCountArgs>(args?: Prisma.Subset<T, AssetCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AssetCountAggregateOutputType> : number>;
    aggregate<T extends AssetAggregateArgs>(args: Prisma.Subset<T, AssetAggregateArgs>): Prisma.PrismaPromise<GetAssetAggregateType<T>>;
    groupBy<T extends AssetGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AssetGroupByArgs['orderBy'];
    } : {
        orderBy?: AssetGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AssetFieldRefs;
}
export interface Prisma__AssetClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    category<T extends Prisma.CategoryDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CategoryDefaultArgs<ExtArgs>>): Prisma.Prisma__CategoryClient<runtime.Types.Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    allocations<T extends Prisma.Asset$allocationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Asset$allocationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AllocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    maintainances<T extends Prisma.Asset$maintainancesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Asset$maintainancesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MaintanancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    audits<T extends Prisma.Asset$auditsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Asset$auditsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AssetFieldRefs {
    readonly id: Prisma.FieldRef<"Asset", 'Int'>;
    readonly name: Prisma.FieldRef<"Asset", 'String'>;
    readonly categoryId: Prisma.FieldRef<"Asset", 'Int'>;
    readonly missing: Prisma.FieldRef<"Asset", 'Boolean'>;
}
export type AssetFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelect<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    include?: Prisma.AssetInclude<ExtArgs> | null;
    where: Prisma.AssetWhereUniqueInput;
};
export type AssetFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelect<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    include?: Prisma.AssetInclude<ExtArgs> | null;
    where: Prisma.AssetWhereUniqueInput;
};
export type AssetFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelect<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    include?: Prisma.AssetInclude<ExtArgs> | null;
    where?: Prisma.AssetWhereInput;
    orderBy?: Prisma.AssetOrderByWithRelationInput | Prisma.AssetOrderByWithRelationInput[];
    cursor?: Prisma.AssetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetScalarFieldEnum | Prisma.AssetScalarFieldEnum[];
};
export type AssetFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelect<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    include?: Prisma.AssetInclude<ExtArgs> | null;
    where?: Prisma.AssetWhereInput;
    orderBy?: Prisma.AssetOrderByWithRelationInput | Prisma.AssetOrderByWithRelationInput[];
    cursor?: Prisma.AssetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetScalarFieldEnum | Prisma.AssetScalarFieldEnum[];
};
export type AssetFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelect<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    include?: Prisma.AssetInclude<ExtArgs> | null;
    where?: Prisma.AssetWhereInput;
    orderBy?: Prisma.AssetOrderByWithRelationInput | Prisma.AssetOrderByWithRelationInput[];
    cursor?: Prisma.AssetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetScalarFieldEnum | Prisma.AssetScalarFieldEnum[];
};
export type AssetCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelect<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    include?: Prisma.AssetInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssetCreateInput, Prisma.AssetUncheckedCreateInput>;
};
export type AssetCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AssetCreateManyInput | Prisma.AssetCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AssetCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    data: Prisma.AssetCreateManyInput | Prisma.AssetCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AssetIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AssetUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelect<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    include?: Prisma.AssetInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssetUpdateInput, Prisma.AssetUncheckedUpdateInput>;
    where: Prisma.AssetWhereUniqueInput;
};
export type AssetUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AssetUpdateManyMutationInput, Prisma.AssetUncheckedUpdateManyInput>;
    where?: Prisma.AssetWhereInput;
    limit?: number;
};
export type AssetUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssetUpdateManyMutationInput, Prisma.AssetUncheckedUpdateManyInput>;
    where?: Prisma.AssetWhereInput;
    limit?: number;
    include?: Prisma.AssetIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AssetUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelect<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    include?: Prisma.AssetInclude<ExtArgs> | null;
    where: Prisma.AssetWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetCreateInput, Prisma.AssetUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AssetUpdateInput, Prisma.AssetUncheckedUpdateInput>;
};
export type AssetDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelect<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    include?: Prisma.AssetInclude<ExtArgs> | null;
    where: Prisma.AssetWhereUniqueInput;
};
export type AssetDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetWhereInput;
    limit?: number;
};
export type Asset$allocationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Asset$maintainancesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaintananceSelect<ExtArgs> | null;
    omit?: Prisma.MaintananceOmit<ExtArgs> | null;
    include?: Prisma.MaintananceInclude<ExtArgs> | null;
    where?: Prisma.MaintananceWhereInput;
    orderBy?: Prisma.MaintananceOrderByWithRelationInput | Prisma.MaintananceOrderByWithRelationInput[];
    cursor?: Prisma.MaintananceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MaintananceScalarFieldEnum | Prisma.MaintananceScalarFieldEnum[];
};
export type Asset$auditsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditSelect<ExtArgs> | null;
    omit?: Prisma.AuditOmit<ExtArgs> | null;
    include?: Prisma.AuditInclude<ExtArgs> | null;
    where?: Prisma.AuditWhereInput;
    orderBy?: Prisma.AuditOrderByWithRelationInput | Prisma.AuditOrderByWithRelationInput[];
    cursor?: Prisma.AuditWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AuditScalarFieldEnum | Prisma.AuditScalarFieldEnum[];
};
export type AssetDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelect<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    include?: Prisma.AssetInclude<ExtArgs> | null;
};
//# sourceMappingURL=Asset.d.ts.map