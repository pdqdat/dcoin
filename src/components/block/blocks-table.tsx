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

// Assets
import { Box } from "lucide-react";

import { useRouter } from "next/navigation";

const BlocksTable = async ({ data, big }: { data: any; big?: boolean }) => {
    const router = useRouter();

    return (
        <Table>
            {big && (
                <TableHeader>
                    <TableRow>
                        <TableHead>Block</TableHead>
                        <TableHead>Timestamp</TableHead>
                        <TableHead>Txn</TableHead>
                        <TableHead>Hash</TableHead>
                        <TableHead>Fee recipient</TableHead>
                    </TableRow>
                </TableHeader>
            )}

            <TableBody>
                {data.map((block: any, index: any) => (
                    <TableRow key={block.hash}>
                        {!big && (
                            <TableCell className="p-1">
                                <Box />
                            </TableCell>
                        )}

                        <TableCell className="p-1">
                            <Button
                                variant="link"
                                onClick={() =>
                                    router.push(`/block/${index + 1}`)
                                }
                            >
                                {index}
                            </Button>
                        </TableCell>

                        {big ? (
                            <TableCell>
                                {" "}
                                {new Date(block.timestamp).toLocaleString()}
                            </TableCell>
                        ) : (
                            <TableCell className="overflow-hidden text-clip p-1">
                                <div className="text-primary">{block.hash}</div>

                                <div>
                                    {new Date(block.timestamp).toLocaleString()}
                                </div>
                            </TableCell>
                        )}

                        {big && (
                            <TableCell>
                                {block.transactions?.length || "0"}
                            </TableCell>
                        )}

                        {big && <TableCell>{block.hash}</TableCell>}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default BlocksTable;
