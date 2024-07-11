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

export const assignTransactionToBlock = async (
    transactionID: string,
    blockTimestamp: number,
) => {
    const transaction = await prisma.transaction.findUniqueOrThrow({
        where: { id: transactionID },
    });

    const block = await prisma.block.findUniqueOrThrow({
        where: { timestamp: new Date(blockTimestamp) },
    });

    const transactionToBlockStatus = await prisma.transaction_Block.create({
        data: {
            transactionID: transaction.id,
            blockTimestamp: block.timestamp,
        },
    });

    return transactionToBlockStatus;
};

export const clearBlockchain = async () => {
    await prisma.transaction.deleteMany();
    await prisma.block.deleteMany();
    await prisma.transaction_Block.deleteMany();
};
