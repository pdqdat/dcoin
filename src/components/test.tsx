"use client";

import React from "react";
import { useSession } from "next-auth/react";

import { generateKeys } from "@/services/generate-keys";
import { SHA256 } from "crypto-js";
import { ec as EC } from "elliptic";
import { Blockchain, Transaction } from "@/services/blockchain";

import { Button } from "@/components/ui/button";

import { createBlock, createTransaction } from "@/services/actions";

const TestComponent = () => {
    const { status, data } = useSession();

    const ec = new EC("secp256k1");

    const myKeys = ec.keyFromPrivate(
        data?.user.privateKey ||
            "149f6e847722a1e4c45770455d136b2ade671ed989101c046f807c6ec493eab1",
        "hex",
    );

    const myWalletAddress = myKeys.getPublic("hex");

    const handleCreateTransaction = async () => {
        let dCoin = new Blockchain();

        const tx1 = new Transaction(myWalletAddress, "hapham", 10);
        const transactionSignature = tx1.signTransaction(myKeys);

        const transaction = await createTransaction(
            myWalletAddress,
            "hapham",
            10,
            transactionSignature,
        );

        dCoin.addTransaction(tx1);
        const assignTransactionToBlock = console.log("Start the miner");
        dCoin.minePendingTransactions(myWalletAddress);

        console.log("balance: ", dCoin.getBalanceOfAddress(myWalletAddress));

        console.log("Is chain valid? ", dCoin.isChainValid());
    };

    return (
        <>
            <Button onClick={handleCreateTransaction}>
                create transaction
            </Button>
        </>
    );
};

export default TestComponent;
