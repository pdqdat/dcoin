"use server";

import { prisma } from "@/lib/prisma";

export const createTransaction = async (
    fromAddress: string,
    toAddress: string,
    amount: number,
    signature: string,
) => {
    const transaction = await prisma.transaction.create({
        data: {
            fromAddress,
            toAddress,
            amount,
            signature,
        },
    });

    return transaction;
};

export const createBlock = async (
    timestamp: number,
    previousHash: string,
    hash: string,
    nonce: number,
) => {
    const block = await prisma.block.create({
        data: {
            timestamp: new Date(timestamp),
            previousHash,
            hash,
            nonce,
        },
    });

    return block;
};

export const clearBlockchain = async () => {};
