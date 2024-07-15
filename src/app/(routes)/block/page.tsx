import React from "react";

// Components
import Container from "@/components/container";
import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import BlocksTable from "@/components/block/blocks-table";

import dCoin from "@/lib/d-coin";
import { getAllBlocks } from "@/services";

const AllBlocksPage = async () => {
    const blocksData = await getAllBlocks();
    console.log(blocksData.blocks);

    return (
        <Container>
            <p className="mb-4 text-center text-3xl font-bold">Blocks</p>

            <BlocksTable data={blocksData.blocks} big />
        </Container>
    );
};

export default AllBlocksPage;
