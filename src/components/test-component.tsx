"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";

import { generateKeys } from "@/services/generate-keys";
import { SHA256 } from "crypto-js";
import { ec as EC } from "elliptic";
import { Blockchain, Transaction } from "@/services/blockchain";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { getAllBlocks } from "@/services";
import { createBlock, createTransaction } from "@/services/actions";
import dCoin from "@/lib/d-coin";

const TestComponent = () => {
    const { status, data } = useSession();
    const [message, setMessage] = useState<string[]>([]);
    // const [message, setMessage] = useState<React.ReactNode[]>([]);

    const ec = new EC("secp256k1");

    const myKeys = ec.keyFromPrivate(
        data?.user.privateKey ||
            "149f6e847722a1e4c45770455d136b2ade671ed989101c046f807c6ec493eab1",
        "hex",
    );

    const myWalletAddress = myKeys.getPublic("hex");

    const handleTest = async () => {
        const tx1 = new Transaction(myWalletAddress, "testAddress", 10);
        setMessage((prevMessages) => [
            ...prevMessages,
            `Created a new transaction...`,
        ]);

        tx1.signTransaction(myKeys);
        setMessage((prevMessages) => [
            ...prevMessages,
            `The transaction has been signed.`,
        ]);

        dCoin.addTransaction(tx1);
        setMessage((prevMessages) => [
            ...prevMessages,
            `The transaction has been added to the pending transactions.`,
        ]);

        console.log("\nStarting mining...");
        setMessage((prevMessages) => [...prevMessages, `Starting mining...`]);

        dCoin.minePendingTransactions(myWalletAddress);
        setMessage((prevMessages) => [
            ...prevMessages,
            `Block has been mined.`,
        ]);

        console.log(
            "\nBalance of miner is",
            dCoin.getBalanceOfAddress(myWalletAddress),
        );
        setMessage((prevMessages) => [
            ...prevMessages,
            `Balance of miner is ${dCoin.getBalanceOfAddress(myWalletAddress)}`,
        ]);

        console.log("=============");
    };

    return (
        <div className="text-center">
            <Button onClick={handleTest}>Mine a block</Button>

            {message && message.length > 0 && (
                <div className="mt-4 space-y-2 rounded-lg border border-dashed p-4">
                    {message.map((msg, index) => (
                        <>
                            <div key={index}>{msg}</div>

                            {msg.includes("Balance of miner is") && (
                                <Separator className="my-4" />
                            )}
                        </>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TestComponent;
