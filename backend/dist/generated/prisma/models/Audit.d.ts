import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AuditModel = runtime.Types.Result.DefaultSelection<Prisma.$AuditPayload>;
export type AggregateAudit = {
    _count: AuditCountAggregateOutputType | null;
    _avg: AuditAvgAggregateOutputType | null;
    _sum: AuditSumAggregateOutputType | null;
    _min: AuditMinAggregateOutputType | null;
    _max: AuditMaxAggregateOutputType | null;
};
export type AuditAvgAggregateOutputType = {
    id: number | null;
    assetId: number | null;
};
export type AuditSumAggregateOutputType = {
    id: number | null;
    assetId: number | null;
};
export type AuditMinAggregateOutputType = {
    id: number | null;
    assetId: number | null;
    expected_location: string | null;
    status: $Enums.Audit_Status | null;
};
export type AuditMaxAggregateOutputType = {
    id: number | null;
    assetId: number | null;
    expected_location: string | null;
    status: $Enums.Audit_Status | null;
};
export type AuditCountAggregateOutputType = {
    id: number;
    assetId: number;
    expected_location: number;
    status: number;
    _all: number;
};
export type AuditAvgAggregateInputType = {
    id?: true;
    assetId?: true;
};
export type AuditSumAggregateInputType = {
    id?: true;
    assetId?: true;
};
export type AuditMinAggregateInputType = {
    id?: true;
    assetId?: true;
    expected_location?: true;
    status?: true;
};
export type AuditMaxAggregateInputType = {
    id?: true;
    assetId?: true;
    expected_location?: true;
    status?: true;
};
export type AuditCountAggregateInputType = {
    id?: true;
    assetId?: true;
    expected_location?: true;
    status?: true;
    _all?: true;
};
export type AuditAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditWhereInput;
    orderBy?: Prisma.AuditOrderByWithRelationInput | Prisma.AuditOrderByWithRelationInput[];
    cursor?: Prisma.AuditWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AuditCountAggregateInputType;
    _avg?: AuditAvgAggregateInputType;
    _sum?: AuditSumAggregateInputType;
    _min?: AuditMinAggregateInputType;
    _max?: AuditMaxAggregateInputType;
};
export type GetAuditAggregateType<T extends AuditAggregateArgs> = {
    [P in keyof T & keyof AggregateAudit]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAudit[P]> : Prisma.GetScalarType<T[P], AggregateAudit[P]>;
};
export type AuditGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditWhereInput;
    orderBy?: Prisma.AuditOrderByWithAggregationInput | Prisma.AuditOrderByWithAggregationInput[];
    by: Prisma.AuditScalarFieldEnum[] | Prisma.AuditScalarFieldEnum;
    having?: Prisma.AuditScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AuditCountAggregateInputType | true;
    _avg?: AuditAvgAggregateInputType;
    _sum?: AuditSumAggregateInputType;
    _min?: AuditMinAggregateInputType;
    _max?: AuditMaxAggregateInputType;
};
export type AuditGroupByOutputType = {
    id: number;
    assetId: number;
    expected_location: string;
    status: $Enums.Audit_Status;
    _count: AuditCountAggregateOutputType | null;
    _avg: AuditAvgAggregateOutputType | null;
    _sum: AuditSumAggregateOutputType | null;
    _min: AuditMinAggregateOutputType | null;
    _max: AuditMaxAggregateOutputType | null;
};
export type GetAuditGroupByPayload<T extends AuditGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AuditGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AuditGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AuditGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AuditGroupByOutputType[P]>;
}>>;
export type AuditWhereInput = {
    AND?: Prisma.AuditWhereInput | Prisma.AuditWhereInput[];
    OR?: Prisma.AuditWhereInput[];
    NOT?: Prisma.AuditWhereInput | Prisma.AuditWhereInput[];
    id?: Prisma.IntFilter<"Audit"> | number;
    assetId?: Prisma.IntFilter<"Audit"> | number;
    expected_location?: Prisma.StringFilter<"Audit"> | string;
    status?: Prisma.EnumAudit_StatusFilter<"Audit"> | $Enums.Audit_Status;
    asset?: Prisma.XOR<Prisma.AssetScalarRelationFilter, Prisma.AssetWhereInput>;
};
export type AuditOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    expected_location?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    asset?: Prisma.AssetOrderByWithRelationInput;
};
export type AuditWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.AuditWhereInput | Prisma.AuditWhereInput[];
    OR?: Prisma.AuditWhereInput[];
    NOT?: Prisma.AuditWhereInput | Prisma.AuditWhereInput[];
    assetId?: Prisma.IntFilter<"Audit"> | number;
    expected_location?: Prisma.StringFilter<"Audit"> | string;
    status?: Prisma.EnumAudit_StatusFilter<"Audit"> | $Enums.Audit_Status;
    asset?: Prisma.XOR<Prisma.AssetScalarRelationFilter, Prisma.AssetWhereInput>;
}, "id">;
export type AuditOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    expected_location?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    _count?: Prisma.AuditCountOrderByAggregateInput;
    _avg?: Prisma.AuditAvgOrderByAggregateInput;
    _max?: Prisma.AuditMaxOrderByAggregateInput;
    _min?: Prisma.AuditMinOrderByAggregateInput;
    _sum?: Prisma.AuditSumOrderByAggregateInput;
};
export type AuditScalarWhereWithAggregatesInput = {
    AND?: Prisma.AuditScalarWhereWithAggregatesInput | Prisma.AuditScalarWhereWithAggregatesInput[];
    OR?: Prisma.AuditScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AuditScalarWhereWithAggregatesInput | Prisma.AuditScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Audit"> | number;
    assetId?: Prisma.IntWithAggregatesFilter<"Audit"> | number;
    expected_location?: Prisma.StringWithAggregatesFilter<"Audit"> | string;
    status?: Prisma.EnumAudit_StatusWithAggregatesFilter<"Audit"> | $Enums.Audit_Status;
};
export type AuditCreateInput = {
    expected_location: string;
    status: $Enums.Audit_Status;
    asset: Prisma.AssetCreateNestedOneWithoutAuditsInput;
};
export type AuditUncheckedCreateInput = {
    id?: number;
    assetId: number;
    expected_location: string;
    status: $Enums.Audit_Status;
};
export type AuditUpdateInput = {
    expected_location?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAudit_StatusFieldUpdateOperationsInput | $Enums.Audit_Status;
    asset?: Prisma.AssetUpdateOneRequiredWithoutAuditsNestedInput;
};
export type AuditUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    assetId?: Prisma.IntFieldUpdateOperationsInput | number;
    expected_location?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAudit_StatusFieldUpdateOperationsInput | $Enums.Audit_Status;
};
export type AuditCreateManyInput = {
    id?: number;
    assetId: number;
    expected_location: string;
    status: $Enums.Audit_Status;
};
export type AuditUpdateManyMutationInput = {
    expected_location?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAudit_StatusFieldUpdateOperationsInput | $Enums.Audit_Status;
};
export type AuditUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    assetId?: Prisma.IntFieldUpdateOperationsInput | number;
    expected_location?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAudit_StatusFieldUpdateOperationsInput | $Enums.Audit_Status;
};
export type AuditListRelationFilter = {
    every?: Prisma.AuditWhereInput;
    some?: Prisma.AuditWhereInput;
    none?: Prisma.AuditWhereInput;
};
export type AuditOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AuditCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    expected_location?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type AuditAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
};
export type AuditMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    expected_location?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type AuditMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    expected_location?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type AuditSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
};
export type AuditCreateNestedManyWithoutAssetInput = {
    create?: Prisma.XOR<Prisma.AuditCreateWithoutAssetInput, Prisma.AuditUncheckedCreateWithoutAssetInput> | Prisma.AuditCreateWithoutAssetInput[] | Prisma.AuditUncheckedCreateWithoutAssetInput[];
    connectOrCreate?: Prisma.AuditCreateOrConnectWithoutAssetInput | Prisma.AuditCreateOrConnectWithoutAssetInput[];
    createMany?: Prisma.AuditCreateManyAssetInputEnvelope;
    connect?: Prisma.AuditWhereUniqueInput | Prisma.AuditWhereUniqueInput[];
};
export type AuditUncheckedCreateNestedManyWithoutAssetInput = {
    create?: Prisma.XOR<Prisma.AuditCreateWithoutAssetInput, Prisma.AuditUncheckedCreateWithoutAssetInput> | Prisma.AuditCreateWithoutAssetInput[] | Prisma.AuditUncheckedCreateWithoutAssetInput[];
    connectOrCreate?: Prisma.AuditCreateOrConnectWithoutAssetInput | Prisma.AuditCreateOrConnectWithoutAssetInput[];
    createMany?: Prisma.AuditCreateManyAssetInputEnvelope;
    connect?: Prisma.AuditWhereUniqueInput | Prisma.AuditWhereUniqueInput[];
};
export type AuditUpdateManyWithoutAssetNestedInput = {
    create?: Prisma.XOR<Prisma.AuditCreateWithoutAssetInput, Prisma.AuditUncheckedCreateWithoutAssetInput> | Prisma.AuditCreateWithoutAssetInput[] | Prisma.AuditUncheckedCreateWithoutAssetInput[];
    connectOrCreate?: Prisma.AuditCreateOrConnectWithoutAssetInput | Prisma.AuditCreateOrConnectWithoutAssetInput[];
    upsert?: Prisma.AuditUpsertWithWhereUniqueWithoutAssetInput | Prisma.AuditUpsertWithWhereUniqueWithoutAssetInput[];
    createMany?: Prisma.AuditCreateManyAssetInputEnvelope;
    set?: Prisma.AuditWhereUniqueInput | Prisma.AuditWhereUniqueInput[];
    disconnect?: Prisma.AuditWhereUniqueInput | Prisma.AuditWhereUniqueInput[];
    delete?: Prisma.AuditWhereUniqueInput | Prisma.AuditWhereUniqueInput[];
    connect?: Prisma.AuditWhereUniqueInput | Prisma.AuditWhereUniqueInput[];
    update?: Prisma.AuditUpdateWithWhereUniqueWithoutAssetInput | Prisma.AuditUpdateWithWhereUniqueWithoutAssetInput[];
    updateMany?: Prisma.AuditUpdateManyWithWhereWithoutAssetInput | Prisma.AuditUpdateManyWithWhereWithoutAssetInput[];
    deleteMany?: Prisma.AuditScalarWhereInput | Prisma.AuditScalarWhereInput[];
};
export type AuditUncheckedUpdateManyWithoutAssetNestedInput = {
    create?: Prisma.XOR<Prisma.AuditCreateWithoutAssetInput, Prisma.AuditUncheckedCreateWithoutAssetInput> | Prisma.AuditCreateWithoutAssetInput[] | Prisma.AuditUncheckedCreateWithoutAssetInput[];
    connectOrCreate?: Prisma.AuditCreateOrConnectWithoutAssetInput | Prisma.AuditCreateOrConnectWithoutAssetInput[];
    upsert?: Prisma.AuditUpsertWithWhereUniqueWithoutAssetInput | Prisma.AuditUpsertWithWhereUniqueWithoutAssetInput[];
    createMany?: Prisma.AuditCreateManyAssetInputEnvelope;
    set?: Prisma.AuditWhereUniqueInput | Prisma.AuditWhereUniqueInput[];
    disconnect?: Prisma.AuditWhereUniqueInput | Prisma.AuditWhereUniqueInput[];
    delete?: Prisma.AuditWhereUniqueInput | Prisma.AuditWhereUniqueInput[];
    connect?: Prisma.AuditWhereUniqueInput | Prisma.AuditWhereUniqueInput[];
    update?: Prisma.AuditUpdateWithWhereUniqueWithoutAssetInput | Prisma.AuditUpdateWithWhereUniqueWithoutAssetInput[];
    updateMany?: Prisma.AuditUpdateManyWithWhereWithoutAssetInput | Prisma.AuditUpdateManyWithWhereWithoutAssetInput[];
    deleteMany?: Prisma.AuditScalarWhereInput | Prisma.AuditScalarWhereInput[];
};
export type EnumAudit_StatusFieldUpdateOperationsInput = {
    set?: $Enums.Audit_Status;
};
export type AuditCreateWithoutAssetInput = {
    expected_location: string;
    status: $Enums.Audit_Status;
};
export type AuditUncheckedCreateWithoutAssetInput = {
    id?: number;
    expected_location: string;
    status: $Enums.Audit_Status;
};
export type AuditCreateOrConnectWithoutAssetInput = {
    where: Prisma.AuditWhereUniqueInput;
    create: Prisma.XOR<Prisma.AuditCreateWithoutAssetInput, Prisma.AuditUncheckedCreateWithoutAssetInput>;
};
export type AuditCreateManyAssetInputEnvelope = {
    data: Prisma.AuditCreateManyAssetInput | Prisma.AuditCreateManyAssetInput[];
    skipDuplicates?: boolean;
};
export type AuditUpsertWithWhereUniqueWithoutAssetInput = {
    where: Prisma.AuditWhereUniqueInput;
    update: Prisma.XOR<Prisma.AuditUpdateWithoutAssetInput, Prisma.AuditUncheckedUpdateWithoutAssetInput>;
    create: Prisma.XOR<Prisma.AuditCreateWithoutAssetInput, Prisma.AuditUncheckedCreateWithoutAssetInput>;
};
export type AuditUpdateWithWhereUniqueWithoutAssetInput = {
    where: Prisma.AuditWhereUniqueInput;
    data: Prisma.XOR<Prisma.AuditUpdateWithoutAssetInput, Prisma.AuditUncheckedUpdateWithoutAssetInput>;
};
export type AuditUpdateManyWithWhereWithoutAssetInput = {
    where: Prisma.AuditScalarWhereInput;
    data: Prisma.XOR<Prisma.AuditUpdateManyMutationInput, Prisma.AuditUncheckedUpdateManyWithoutAssetInput>;
};
export type AuditScalarWhereInput = {
    AND?: Prisma.AuditScalarWhereInput | Prisma.AuditScalarWhereInput[];
    OR?: Prisma.AuditScalarWhereInput[];
    NOT?: Prisma.AuditScalarWhereInput | Prisma.AuditScalarWhereInput[];
    id?: Prisma.IntFilter<"Audit"> | number;
    assetId?: Prisma.IntFilter<"Audit"> | number;
    expected_location?: Prisma.StringFilter<"Audit"> | string;
    status?: Prisma.EnumAudit_StatusFilter<"Audit"> | $Enums.Audit_Status;
};
export type AuditCreateManyAssetInput = {
    id?: number;
    expected_location: string;
    status: $Enums.Audit_Status;
};
export type AuditUpdateWithoutAssetInput = {
    expected_location?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAudit_StatusFieldUpdateOperationsInput | $Enums.Audit_Status;
};
export type AuditUncheckedUpdateWithoutAssetInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    expected_location?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAudit_StatusFieldUpdateOperationsInput | $Enums.Audit_Status;
};
export type AuditUncheckedUpdateManyWithoutAssetInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    expected_location?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAudit_StatusFieldUpdateOperationsInput | $Enums.Audit_Status;
};
export type AuditSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    assetId?: boolean;
    expected_location?: boolean;
    status?: boolean;
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["audit"]>;
export type AuditSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    assetId?: boolean;
    expected_location?: boolean;
    status?: boolean;
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["audit"]>;
export type AuditSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    assetId?: boolean;
    expected_location?: boolean;
    status?: boolean;
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["audit"]>;
export type AuditSelectScalar = {
    id?: boolean;
    assetId?: boolean;
    expected_location?: boolean;
    status?: boolean;
};
export type AuditOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "assetId" | "expected_location" | "status", ExtArgs["result"]["audit"]>;
export type AuditInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
};
export type AuditIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
};
export type AuditIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
};
export type $AuditPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Audit";
    objects: {
        asset: Prisma.$AssetPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        assetId: number;
        expected_location: string;
        status: $Enums.Audit_Status;
    }, ExtArgs["result"]["audit"]>;
    composites: {};
};
export type AuditGetPayload<S extends boolean | null | undefined | AuditDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AuditPayload, S>;
export type AuditCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AuditFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AuditCountAggregateInputType | true;
};
export interface AuditDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Audit'];
        meta: {
            name: 'Audit';
        };
    };
    findUnique<T extends AuditFindUniqueArgs>(args: Prisma.SelectSubset<T, AuditFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AuditClient<runtime.Types.Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AuditFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AuditFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AuditClient<runtime.Types.Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AuditFindFirstArgs>(args?: Prisma.SelectSubset<T, AuditFindFirstArgs<ExtArgs>>): Prisma.Prisma__AuditClient<runtime.Types.Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AuditFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AuditFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AuditClient<runtime.Types.Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AuditFindManyArgs>(args?: Prisma.SelectSubset<T, AuditFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AuditCreateArgs>(args: Prisma.SelectSubset<T, AuditCreateArgs<ExtArgs>>): Prisma.Prisma__AuditClient<runtime.Types.Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AuditCreateManyArgs>(args?: Prisma.SelectSubset<T, AuditCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AuditCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AuditCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AuditDeleteArgs>(args: Prisma.SelectSubset<T, AuditDeleteArgs<ExtArgs>>): Prisma.Prisma__AuditClient<runtime.Types.Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AuditUpdateArgs>(args: Prisma.SelectSubset<T, AuditUpdateArgs<ExtArgs>>): Prisma.Prisma__AuditClient<runtime.Types.Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AuditDeleteManyArgs>(args?: Prisma.SelectSubset<T, AuditDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AuditUpdateManyArgs>(args: Prisma.SelectSubset<T, AuditUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AuditUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AuditUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AuditUpsertArgs>(args: Prisma.SelectSubset<T, AuditUpsertArgs<ExtArgs>>): Prisma.Prisma__AuditClient<runtime.Types.Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AuditCountArgs>(args?: Prisma.Subset<T, AuditCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AuditCountAggregateOutputType> : number>;
    aggregate<T extends AuditAggregateArgs>(args: Prisma.Subset<T, AuditAggregateArgs>): Prisma.PrismaPromise<GetAuditAggregateType<T>>;
    groupBy<T extends AuditGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AuditGroupByArgs['orderBy'];
    } : {
        orderBy?: AuditGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AuditGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AuditFieldRefs;
}
export interface Prisma__AuditClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    asset<T extends Prisma.AssetDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AssetDefaultArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AuditFieldRefs {
    readonly id: Prisma.FieldRef<"Audit", 'Int'>;
    readonly assetId: Prisma.FieldRef<"Audit", 'Int'>;
    readonly expected_location: Prisma.FieldRef<"Audit", 'String'>;
    readonly status: Prisma.FieldRef<"Audit", 'Audit_Status'>;
}
export type AuditFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditSelect<ExtArgs> | null;
    omit?: Prisma.AuditOmit<ExtArgs> | null;
    include?: Prisma.AuditInclude<ExtArgs> | null;
    where: Prisma.AuditWhereUniqueInput;
};
export type AuditFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditSelect<ExtArgs> | null;
    omit?: Prisma.AuditOmit<ExtArgs> | null;
    include?: Prisma.AuditInclude<ExtArgs> | null;
    where: Prisma.AuditWhereUniqueInput;
};
export type AuditFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AuditFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AuditFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AuditCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditSelect<ExtArgs> | null;
    omit?: Prisma.AuditOmit<ExtArgs> | null;
    include?: Prisma.AuditInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AuditCreateInput, Prisma.AuditUncheckedCreateInput>;
};
export type AuditCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AuditCreateManyInput | Prisma.AuditCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AuditCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AuditOmit<ExtArgs> | null;
    data: Prisma.AuditCreateManyInput | Prisma.AuditCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AuditIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AuditUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditSelect<ExtArgs> | null;
    omit?: Prisma.AuditOmit<ExtArgs> | null;
    include?: Prisma.AuditInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AuditUpdateInput, Prisma.AuditUncheckedUpdateInput>;
    where: Prisma.AuditWhereUniqueInput;
};
export type AuditUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AuditUpdateManyMutationInput, Prisma.AuditUncheckedUpdateManyInput>;
    where?: Prisma.AuditWhereInput;
    limit?: number;
};
export type AuditUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AuditOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AuditUpdateManyMutationInput, Prisma.AuditUncheckedUpdateManyInput>;
    where?: Prisma.AuditWhereInput;
    limit?: number;
    include?: Prisma.AuditIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AuditUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditSelect<ExtArgs> | null;
    omit?: Prisma.AuditOmit<ExtArgs> | null;
    include?: Prisma.AuditInclude<ExtArgs> | null;
    where: Prisma.AuditWhereUniqueInput;
    create: Prisma.XOR<Prisma.AuditCreateInput, Prisma.AuditUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AuditUpdateInput, Prisma.AuditUncheckedUpdateInput>;
};
export type AuditDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditSelect<ExtArgs> | null;
    omit?: Prisma.AuditOmit<ExtArgs> | null;
    include?: Prisma.AuditInclude<ExtArgs> | null;
    where: Prisma.AuditWhereUniqueInput;
};
export type AuditDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditWhereInput;
    limit?: number;
};
export type AuditDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditSelect<ExtArgs> | null;
    omit?: Prisma.AuditOmit<ExtArgs> | null;
    include?: Prisma.AuditInclude<ExtArgs> | null;
};
//# sourceMappingURL=Audit.d.ts.map