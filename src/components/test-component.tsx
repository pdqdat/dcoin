"use client";

import React from "react";
import { useSession } from "next-auth/react";

import { generateKeys } from "@/services/generate-keys";
import { SHA256 } from "crypto-js";
import { ec as EC } from "elliptic";
import { Blockchain, Transaction } from "@/services/blockchain";

import { Button } from "@/components/ui/button";

import { getAllBlocks } from "@/services";
import { createBlock, createTransaction } from "@/services/actions";
import dCoin from "@/lib/d-coin";

const TestComponent = () => {
    const { status, data } = useSession();

    const ec = new EC("secp256k1");

    const myKeys = ec.keyFromPrivate(
        data?.user.privateKey ||
            "149f6e847722a1e4c45770455d136b2ade671ed989101c046f807c6ec493eab1",
        "hex",
    );

    const myWalletAddress = myKeys.getPublic("hex");

    const handleTest = async () => {
        const tx1 = new Transaction(myWalletAddress, "testAddress", 10);
        tx1.signTransaction(myKeys);
        dCoin.addTransaction(tx1);

        console.log("\nStarting mining");

        dCoin.minePendingTransactions(myWalletAddress);

        console.log(
            "\nBalance of miner is",
            dCoin.getBalanceOfAddress(myWalletAddress),
        );
    };

    return (
        <>
            <Button onClick={handleTest}>test</Button>
        </>
    );
};

export default TestComponent;
