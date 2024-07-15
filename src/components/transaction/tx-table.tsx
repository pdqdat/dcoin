"use client";

import React from "react";

// Components
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";

const TxTable = async ({ data }: { data: any }) => {
    const router = useRouter();

    return (
        <Table>
            <TableBody>
                {data.map((block: any, index: any) => (
                    <TableRow key={block.hash}>
                        <TableCell>
                            <Button
                                variant="link"
                                onClick={() =>
                                    router.push(`/block/${index + 1}`)
                                }
                            >
                                {index}
                            </Button>
                        </TableCell>

                        <TableCell className="overflow-hidden text-clip">
                            <div className="text-primary">{block.hash}</div>

                            {new Date(block.timestamp).toLocaleString()}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default TxTable;
