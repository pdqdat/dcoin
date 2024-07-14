import React from "react";
import Link from "next/link";

// Components
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import AllBlocks from "@/components/all-blocks";
import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import BlocksTable from "@/components/block/blocks-table";

// Assets
import { MoveRight } from "lucide-react";

import { getAllBlocks } from "@/services";

import { Blockchain, Transaction } from "@/services/blockchain";
import { createBlock } from "@/services/actions";
import dCoin from "@/lib/d-coin";
import { ec as EC } from "elliptic";
const ec = new EC("secp256k1");

const HomePage = async () => {
    console.log("from home: ", dCoin);
    const blocksData = await getAllBlocks();
    console.log("blocksData: ", blocksData.blocks);

    return (
        <Container>
            <p className="text-center text-3xl font-bold">DCoin</p>

            <div className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Latest Blocks</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <BlocksTable data={blocksData.blocks} />
                    </CardContent>

                    <CardFooter>
                        <Link href="/block" className="mx-auto flex text-sm">
                            View all Blocks{" "}
                            <MoveRight className="ml-2 h-5 w-5" />
                        </Link>
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Latest Transactions</CardTitle>
                    </CardHeader>

                    <CardContent>Transactions</CardContent>

                    <CardFooter>
                        <Link href="/tx" className="mx-auto flex text-sm">
                            View all Transactions{" "}
                            <MoveRight className="ml-2 h-5 w-5" />
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        </Container>
    );
};

export default HomePage;
