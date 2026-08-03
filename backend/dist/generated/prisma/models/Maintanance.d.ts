import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MaintananceModel = runtime.Types.Result.DefaultSelection<Prisma.$MaintanancePayload>;
export type AggregateMaintanance = {
    _count: MaintananceCountAggregateOutputType | null;
    _avg: MaintananceAvgAggregateOutputType | null;
    _sum: MaintananceSumAggregateOutputType | null;
    _min: MaintananceMinAggregateOutputType | null;
    _max: MaintananceMaxAggregateOutputType | null;
};
export type MaintananceAvgAggregateOutputType = {
    id: number | null;
    assetId: number | null;
};
export type MaintananceSumAggregateOutputType = {
    id: number | null;
    assetId: number | null;
};
export type MaintananceMinAggregateOutputType = {
    id: number | null;
    assetId: number | null;
    technician_name: string | null;
    status: $Enums.Maintanance_Status | null;
};
export type MaintananceMaxAggregateOutputType = {
    id: number | null;
    assetId: number | null;
    technician_name: string | null;
    status: $Enums.Maintanance_Status | null;
};
export type MaintananceCountAggregateOutputType = {
    id: number;
    assetId: number;
    technician_name: number;
    status: number;
    _all: number;
};
export type MaintananceAvgAggregateInputType = {
    id?: true;
    assetId?: true;
};
export type MaintananceSumAggregateInputType = {
    id?: true;
    assetId?: true;
};
export type MaintananceMinAggregateInputType = {
    id?: true;
    assetId?: true;
    technician_name?: true;
    status?: true;
};
export type MaintananceMaxAggregateInputType = {
    id?: true;
    assetId?: true;
    technician_name?: true;
    status?: true;
};
export type MaintananceCountAggregateInputType = {
    id?: true;
    assetId?: true;
    technician_name?: true;
    status?: true;
    _all?: true;
};
export type MaintananceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MaintananceWhereInput;
    orderBy?: Prisma.MaintananceOrderByWithRelationInput | Prisma.MaintananceOrderByWithRelationInput[];
    cursor?: Prisma.MaintananceWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MaintananceCountAggregateInputType;
    _avg?: MaintananceAvgAggregateInputType;
    _sum?: MaintananceSumAggregateInputType;
    _min?: MaintananceMinAggregateInputType;
    _max?: MaintananceMaxAggregateInputType;
};
export type GetMaintananceAggregateType<T extends MaintananceAggregateArgs> = {
    [P in keyof T & keyof AggregateMaintanance]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMaintanance[P]> : Prisma.GetScalarType<T[P], AggregateMaintanance[P]>;
};
export type MaintananceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MaintananceWhereInput;
    orderBy?: Prisma.MaintananceOrderByWithAggregationInput | Prisma.MaintananceOrderByWithAggregationInput[];
    by: Prisma.MaintananceScalarFieldEnum[] | Prisma.MaintananceScalarFieldEnum;
    having?: Prisma.MaintananceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MaintananceCountAggregateInputType | true;
    _avg?: MaintananceAvgAggregateInputType;
    _sum?: MaintananceSumAggregateInputType;
    _min?: MaintananceMinAggregateInputType;
    _max?: MaintananceMaxAggregateInputType;
};
export type MaintananceGroupByOutputType = {
    id: number;
    assetId: number;
    technician_name: string | null;
    status: $Enums.Maintanance_Status;
    _count: MaintananceCountAggregateOutputType | null;
    _avg: MaintananceAvgAggregateOutputType | null;
    _sum: MaintananceSumAggregateOutputType | null;
    _min: MaintananceMinAggregateOutputType | null;
    _max: MaintananceMaxAggregateOutputType | null;
};
export type GetMaintananceGroupByPayload<T extends MaintananceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MaintananceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MaintananceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MaintananceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MaintananceGroupByOutputType[P]>;
}>>;
export type MaintananceWhereInput = {
    AND?: Prisma.MaintananceWhereInput | Prisma.MaintananceWhereInput[];
    OR?: Prisma.MaintananceWhereInput[];
    NOT?: Prisma.MaintananceWhereInput | Prisma.MaintananceWhereInput[];
    id?: Prisma.IntFilter<"Maintanance"> | number;
    assetId?: Prisma.IntFilter<"Maintanance"> | number;
    technician_name?: Prisma.StringNullableFilter<"Maintanance"> | string | null;
    status?: Prisma.EnumMaintanance_StatusFilter<"Maintanance"> | $Enums.Maintanance_Status;
    asset?: Prisma.XOR<Prisma.AssetScalarRelationFilter, Prisma.AssetWhereInput>;
};
export type MaintananceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    technician_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    asset?: Prisma.AssetOrderByWithRelationInput;
};
export type MaintananceWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.MaintananceWhereInput | Prisma.MaintananceWhereInput[];
    OR?: Prisma.MaintananceWhereInput[];
    NOT?: Prisma.MaintananceWhereInput | Prisma.MaintananceWhereInput[];
    assetId?: Prisma.IntFilter<"Maintanance"> | number;
    technician_name?: Prisma.StringNullableFilter<"Maintanance"> | string | null;
    status?: Prisma.EnumMaintanance_StatusFilter<"Maintanance"> | $Enums.Maintanance_Status;
    asset?: Prisma.XOR<Prisma.AssetScalarRelationFilter, Prisma.AssetWhereInput>;
}, "id">;
export type MaintananceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    technician_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    _count?: Prisma.MaintananceCountOrderByAggregateInput;
    _avg?: Prisma.MaintananceAvgOrderByAggregateInput;
    _max?: Prisma.MaintananceMaxOrderByAggregateInput;
    _min?: Prisma.MaintananceMinOrderByAggregateInput;
    _sum?: Prisma.MaintananceSumOrderByAggregateInput;
};
export type MaintananceScalarWhereWithAggregatesInput = {
    AND?: Prisma.MaintananceScalarWhereWithAggregatesInput | Prisma.MaintananceScalarWhereWithAggregatesInput[];
    OR?: Prisma.MaintananceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MaintananceScalarWhereWithAggregatesInput | Prisma.MaintananceScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Maintanance"> | number;
    assetId?: Prisma.IntWithAggregatesFilter<"Maintanance"> | number;
    technician_name?: Prisma.StringNullableWithAggregatesFilter<"Maintanance"> | string | null;
    status?: Prisma.EnumMaintanance_StatusWithAggregatesFilter<"Maintanance"> | $Enums.Maintanance_Status;
};
export type MaintananceCreateInput = {
    technician_name?: string | null;
    status: $Enums.Maintanance_Status;
    asset: Prisma.AssetCreateNestedOneWithoutMaintainancesInput;
};
export type MaintananceUncheckedCreateInput = {
    id?: number;
    assetId: number;
    technician_name?: string | null;
    status: $Enums.Maintanance_Status;
};
export type MaintananceUpdateInput = {
    technician_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumMaintanance_StatusFieldUpdateOperationsInput | $Enums.Maintanance_Status;
    asset?: Prisma.AssetUpdateOneRequiredWithoutMaintainancesNestedInput;
};
export type MaintananceUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    assetId?: Prisma.IntFieldUpdateOperationsInput | number;
    technician_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumMaintanance_StatusFieldUpdateOperationsInput | $Enums.Maintanance_Status;
};
export type MaintananceCreateManyInput = {
    id?: number;
    assetId: number;
    technician_name?: string | null;
    status: $Enums.Maintanance_Status;
};
export type MaintananceUpdateManyMutationInput = {
    technician_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumMaintanance_StatusFieldUpdateOperationsInput | $Enums.Maintanance_Status;
};
export type MaintananceUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    assetId?: Prisma.IntFieldUpdateOperationsInput | number;
    technician_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumMaintanance_StatusFieldUpdateOperationsInput | $Enums.Maintanance_Status;
};
export type MaintananceListRelationFilter = {
    every?: Prisma.MaintananceWhereInput;
    some?: Prisma.MaintananceWhereInput;
    none?: Prisma.MaintananceWhereInput;
};
export type MaintananceOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MaintananceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    technician_name?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type MaintananceAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
};
export type MaintananceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    technician_name?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type MaintananceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    technician_name?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type MaintananceSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
};
export type MaintananceCreateNestedManyWithoutAssetInput = {
    create?: Prisma.XOR<Prisma.MaintananceCreateWithoutAssetInput, Prisma.MaintananceUncheckedCreateWithoutAssetInput> | Prisma.MaintananceCreateWithoutAssetInput[] | Prisma.MaintananceUncheckedCreateWithoutAssetInput[];
    connectOrCreate?: Prisma.MaintananceCreateOrConnectWithoutAssetInput | Prisma.MaintananceCreateOrConnectWithoutAssetInput[];
    createMany?: Prisma.MaintananceCreateManyAssetInputEnvelope;
    connect?: Prisma.MaintananceWhereUniqueInput | Prisma.MaintananceWhereUniqueInput[];
};
export type MaintananceUncheckedCreateNestedManyWithoutAssetInput = {
    create?: Prisma.XOR<Prisma.MaintananceCreateWithoutAssetInput, Prisma.MaintananceUncheckedCreateWithoutAssetInput> | Prisma.MaintananceCreateWithoutAssetInput[] | Prisma.MaintananceUncheckedCreateWithoutAssetInput[];
    connectOrCreate?: Prisma.MaintananceCreateOrConnectWithoutAssetInput | Prisma.MaintananceCreateOrConnectWithoutAssetInput[];
    createMany?: Prisma.MaintananceCreateManyAssetInputEnvelope;
    connect?: Prisma.MaintananceWhereUniqueInput | Prisma.MaintananceWhereUniqueInput[];
};
export type MaintananceUpdateManyWithoutAssetNestedInput = {
    create?: Prisma.XOR<Prisma.MaintananceCreateWithoutAssetInput, Prisma.MaintananceUncheckedCreateWithoutAssetInput> | Prisma.MaintananceCreateWithoutAssetInput[] | Prisma.MaintananceUncheckedCreateWithoutAssetInput[];
    connectOrCreate?: Prisma.MaintananceCreateOrConnectWithoutAssetInput | Prisma.MaintananceCreateOrConnectWithoutAssetInput[];
    upsert?: Prisma.MaintananceUpsertWithWhereUniqueWithoutAssetInput | Prisma.MaintananceUpsertWithWhereUniqueWithoutAssetInput[];
    createMany?: Prisma.MaintananceCreateManyAssetInputEnvelope;
    set?: Prisma.MaintananceWhereUniqueInput | Prisma.MaintananceWhereUniqueInput[];
    disconnect?: Prisma.MaintananceWhereUniqueInput | Prisma.MaintananceWhereUniqueInput[];
    delete?: Prisma.MaintananceWhereUniqueInput | Prisma.MaintananceWhereUniqueInput[];
    connect?: Prisma.MaintananceWhereUniqueInput | Prisma.MaintananceWhereUniqueInput[];
    update?: Prisma.MaintananceUpdateWithWhereUniqueWithoutAssetInput | Prisma.MaintananceUpdateWithWhereUniqueWithoutAssetInput[];
    updateMany?: Prisma.MaintananceUpdateManyWithWhereWithoutAssetInput | Prisma.MaintananceUpdateManyWithWhereWithoutAssetInput[];
    deleteMany?: Prisma.MaintananceScalarWhereInput | Prisma.MaintananceScalarWhereInput[];
};
export type MaintananceUncheckedUpdateManyWithoutAssetNestedInput = {
    create?: Prisma.XOR<Prisma.MaintananceCreateWithoutAssetInput, Prisma.MaintananceUncheckedCreateWithoutAssetInput> | Prisma.MaintananceCreateWithoutAssetInput[] | Prisma.MaintananceUncheckedCreateWithoutAssetInput[];
    connectOrCreate?: Prisma.MaintananceCreateOrConnectWithoutAssetInput | Prisma.MaintananceCreateOrConnectWithoutAssetInput[];
    upsert?: Prisma.MaintananceUpsertWithWhereUniqueWithoutAssetInput | Prisma.MaintananceUpsertWithWhereUniqueWithoutAssetInput[];
    createMany?: Prisma.MaintananceCreateManyAssetInputEnvelope;
    set?: Prisma.MaintananceWhereUniqueInput | Prisma.MaintananceWhereUniqueInput[];
    disconnect?: Prisma.MaintananceWhereUniqueInput | Prisma.MaintananceWhereUniqueInput[];
    delete?: Prisma.MaintananceWhereUniqueInput | Prisma.MaintananceWhereUniqueInput[];
    connect?: Prisma.MaintananceWhereUniqueInput | Prisma.MaintananceWhereUniqueInput[];
    update?: Prisma.MaintananceUpdateWithWhereUniqueWithoutAssetInput | Prisma.MaintananceUpdateWithWhereUniqueWithoutAssetInput[];
    updateMany?: Prisma.MaintananceUpdateManyWithWhereWithoutAssetInput | Prisma.MaintananceUpdateManyWithWhereWithoutAssetInput[];
    deleteMany?: Prisma.MaintananceScalarWhereInput | Prisma.MaintananceScalarWhereInput[];
};
export type EnumMaintanance_StatusFieldUpdateOperationsInput = {
    set?: $Enums.Maintanance_Status;
};
export type MaintananceCreateWithoutAssetInput = {
    technician_name?: string | null;
    status: $Enums.Maintanance_Status;
};
export type MaintananceUncheckedCreateWithoutAssetInput = {
    id?: number;
    technician_name?: string | null;
    status: $Enums.Maintanance_Status;
};
export type MaintananceCreateOrConnectWithoutAssetInput = {
    where: Prisma.MaintananceWhereUniqueInput;
    create: Prisma.XOR<Prisma.MaintananceCreateWithoutAssetInput, Prisma.MaintananceUncheckedCreateWithoutAssetInput>;
};
export type MaintananceCreateManyAssetInputEnvelope = {
    data: Prisma.MaintananceCreateManyAssetInput | Prisma.MaintananceCreateManyAssetInput[];
    skipDuplicates?: boolean;
};
export type MaintananceUpsertWithWhereUniqueWithoutAssetInput = {
    where: Prisma.MaintananceWhereUniqueInput;
    update: Prisma.XOR<Prisma.MaintananceUpdateWithoutAssetInput, Prisma.MaintananceUncheckedUpdateWithoutAssetInput>;
    create: Prisma.XOR<Prisma.MaintananceCreateWithoutAssetInput, Prisma.MaintananceUncheckedCreateWithoutAssetInput>;
};
export type MaintananceUpdateWithWhereUniqueWithoutAssetInput = {
    where: Prisma.MaintananceWhereUniqueInput;
    data: Prisma.XOR<Prisma.MaintananceUpdateWithoutAssetInput, Prisma.MaintananceUncheckedUpdateWithoutAssetInput>;
};
export type MaintananceUpdateManyWithWhereWithoutAssetInput = {
    where: Prisma.MaintananceScalarWhereInput;
    data: Prisma.XOR<Prisma.MaintananceUpdateManyMutationInput, Prisma.MaintananceUncheckedUpdateManyWithoutAssetInput>;
};
export type MaintananceScalarWhereInput = {
    AND?: Prisma.MaintananceScalarWhereInput | Prisma.MaintananceScalarWhereInput[];
    OR?: Prisma.MaintananceScalarWhereInput[];
    NOT?: Prisma.MaintananceScalarWhereInput | Prisma.MaintananceScalarWhereInput[];
    id?: Prisma.IntFilter<"Maintanance"> | number;
    assetId?: Prisma.IntFilter<"Maintanance"> | number;
    technician_name?: Prisma.StringNullableFilter<"Maintanance"> | string | null;
    status?: Prisma.EnumMaintanance_StatusFilter<"Maintanance"> | $Enums.Maintanance_Status;
};
export type MaintananceCreateManyAssetInput = {
    id?: number;
    technician_name?: string | null;
    status: $Enums.Maintanance_Status;
};
export type MaintananceUpdateWithoutAssetInput = {
    technician_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumMaintanance_StatusFieldUpdateOperationsInput | $Enums.Maintanance_Status;
};
export type MaintananceUncheckedUpdateWithoutAssetInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    technician_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumMaintanance_StatusFieldUpdateOperationsInput | $Enums.Maintanance_Status;
};
export type MaintananceUncheckedUpdateManyWithoutAssetInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    technician_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumMaintanance_StatusFieldUpdateOperationsInput | $Enums.Maintanance_Status;
};
export type MaintananceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    assetId?: boolean;
    technician_name?: boolean;
    status?: boolean;
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["maintanance"]>;
export type MaintananceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    assetId?: boolean;
    technician_name?: boolean;
    status?: boolean;
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["maintanance"]>;
export type MaintananceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    assetId?: boolean;
    technician_name?: boolean;
    status?: boolean;
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["maintanance"]>;
export type MaintananceSelectScalar = {
    id?: boolean;
    assetId?: boolean;
    technician_name?: boolean;
    status?: boolean;
};
export type MaintananceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "assetId" | "technician_name" | "status", ExtArgs["result"]["maintanance"]>;
export type MaintananceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
};
export type MaintananceIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
};
export type MaintananceIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
};
export type $MaintanancePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Maintanance";
    objects: {
        asset: Prisma.$AssetPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        assetId: number;
        technician_name: string | null;
        status: $Enums.Maintanance_Status;
    }, ExtArgs["result"]["maintanance"]>;
    composites: {};
};
export type MaintananceGetPayload<S extends boolean | null | undefined | MaintananceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MaintanancePayload, S>;
export type MaintananceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MaintananceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MaintananceCountAggregateInputType | true;
};
export interface MaintananceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Maintanance'];
        meta: {
            name: 'Maintanance';
        };
    };
    findUnique<T extends MaintananceFindUniqueArgs>(args: Prisma.SelectSubset<T, MaintananceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MaintananceClient<runtime.Types.Result.GetResult<Prisma.$MaintanancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MaintananceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MaintananceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MaintananceClient<runtime.Types.Result.GetResult<Prisma.$MaintanancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MaintananceFindFirstArgs>(args?: Prisma.SelectSubset<T, MaintananceFindFirstArgs<ExtArgs>>): Prisma.Prisma__MaintananceClient<runtime.Types.Result.GetResult<Prisma.$MaintanancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MaintananceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MaintananceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MaintananceClient<runtime.Types.Result.GetResult<Prisma.$MaintanancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MaintananceFindManyArgs>(args?: Prisma.SelectSubset<T, MaintananceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MaintanancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MaintananceCreateArgs>(args: Prisma.SelectSubset<T, MaintananceCreateArgs<ExtArgs>>): Prisma.Prisma__MaintananceClient<runtime.Types.Result.GetResult<Prisma.$MaintanancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MaintananceCreateManyArgs>(args?: Prisma.SelectSubset<T, MaintananceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MaintananceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MaintananceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MaintanancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MaintananceDeleteArgs>(args: Prisma.SelectSubset<T, MaintananceDeleteArgs<ExtArgs>>): Prisma.Prisma__MaintananceClient<runtime.Types.Result.GetResult<Prisma.$MaintanancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MaintananceUpdateArgs>(args: Prisma.SelectSubset<T, MaintananceUpdateArgs<ExtArgs>>): Prisma.Prisma__MaintananceClient<runtime.Types.Result.GetResult<Prisma.$MaintanancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MaintananceDeleteManyArgs>(args?: Prisma.SelectSubset<T, MaintananceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MaintananceUpdateManyArgs>(args: Prisma.SelectSubset<T, MaintananceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MaintananceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MaintananceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MaintanancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MaintananceUpsertArgs>(args: Prisma.SelectSubset<T, MaintananceUpsertArgs<ExtArgs>>): Prisma.Prisma__MaintananceClient<runtime.Types.Result.GetResult<Prisma.$MaintanancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MaintananceCountArgs>(args?: Prisma.Subset<T, MaintananceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MaintananceCountAggregateOutputType> : number>;
    aggregate<T extends MaintananceAggregateArgs>(args: Prisma.Subset<T, MaintananceAggregateArgs>): Prisma.PrismaPromise<GetMaintananceAggregateType<T>>;
    groupBy<T extends MaintananceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MaintananceGroupByArgs['orderBy'];
    } : {
        orderBy?: MaintananceGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MaintananceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaintananceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MaintananceFieldRefs;
}
export interface Prisma__MaintananceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    asset<T extends Prisma.AssetDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AssetDefaultArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MaintananceFieldRefs {
    readonly id: Prisma.FieldRef<"Maintanance", 'Int'>;
    readonly assetId: Prisma.FieldRef<"Maintanance", 'Int'>;
    readonly technician_name: Prisma.FieldRef<"Maintanance", 'String'>;
    readonly status: Prisma.FieldRef<"Maintanance", 'Maintanance_Status'>;
}
export type MaintananceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaintananceSelect<ExtArgs> | null;
    omit?: Prisma.MaintananceOmit<ExtArgs> | null;
    include?: Prisma.MaintananceInclude<ExtArgs> | null;
    where: Prisma.MaintananceWhereUniqueInput;
};
export type MaintananceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaintananceSelect<ExtArgs> | null;
    omit?: Prisma.MaintananceOmit<ExtArgs> | null;
    include?: Prisma.MaintananceInclude<ExtArgs> | null;
    where: Prisma.MaintananceWhereUniqueInput;
};
export type MaintananceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MaintananceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MaintananceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MaintananceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaintananceSelect<ExtArgs> | null;
    omit?: Prisma.MaintananceOmit<ExtArgs> | null;
    include?: Prisma.MaintananceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MaintananceCreateInput, Prisma.MaintananceUncheckedCreateInput>;
};
export type MaintananceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MaintananceCreateManyInput | Prisma.MaintananceCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MaintananceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaintananceSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MaintananceOmit<ExtArgs> | null;
    data: Prisma.MaintananceCreateManyInput | Prisma.MaintananceCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MaintananceIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MaintananceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaintananceSelect<ExtArgs> | null;
    omit?: Prisma.MaintananceOmit<ExtArgs> | null;
    include?: Prisma.MaintananceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MaintananceUpdateInput, Prisma.MaintananceUncheckedUpdateInput>;
    where: Prisma.MaintananceWhereUniqueInput;
};
export type MaintananceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MaintananceUpdateManyMutationInput, Prisma.MaintananceUncheckedUpdateManyInput>;
    where?: Prisma.MaintananceWhereInput;
    limit?: number;
};
export type MaintananceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaintananceSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MaintananceOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MaintananceUpdateManyMutationInput, Prisma.MaintananceUncheckedUpdateManyInput>;
    where?: Prisma.MaintananceWhereInput;
    limit?: number;
    include?: Prisma.MaintananceIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MaintananceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaintananceSelect<ExtArgs> | null;
    omit?: Prisma.MaintananceOmit<ExtArgs> | null;
    include?: Prisma.MaintananceInclude<ExtArgs> | null;
    where: Prisma.MaintananceWhereUniqueInput;
    create: Prisma.XOR<Prisma.MaintananceCreateInput, Prisma.MaintananceUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MaintananceUpdateInput, Prisma.MaintananceUncheckedUpdateInput>;
};
export type MaintananceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaintananceSelect<ExtArgs> | null;
    omit?: Prisma.MaintananceOmit<ExtArgs> | null;
    include?: Prisma.MaintananceInclude<ExtArgs> | null;
    where: Prisma.MaintananceWhereUniqueInput;
};
export type MaintananceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MaintananceWhereInput;
    limit?: number;
};
export type MaintananceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaintananceSelect<ExtArgs> | null;
    omit?: Prisma.MaintananceOmit<ExtArgs> | null;
    include?: Prisma.MaintananceInclude<ExtArgs> | null;
};
//# sourceMappingURL=Maintanance.d.ts.map