import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import AllBlocks from "@/components/all-blocks";

import { Blockchain, Transaction } from "@/services/blockchain";
import dCoin from "@/lib/d-coin";
import { ec as EC } from "elliptic";
const ec = new EC("secp256k1");

const HomePage = () => {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <p className="text-2xl font-bold">DCoin</p>

            {dCoin.chain.map((block, index) => (
                <div key={index} className="my-4 border p-4">
                    <p>Block {index}</p>
                    <p>Hash: {block.hash}</p>
                    <p>Previous Hash: {block.previousHash}</p>
                    <p>Nonce: {block.nonce}</p>
                    <p>Timestamp: {block.timestamp}</p>
                    <p>Transactions: {block.transactions.length}</p>
                    <ul>
                        {block.transactions.map((tx, index) => (
                            <li key={index}>
                                <p>From: {tx.fromAddress}</p>
                                <p>To: {tx.toAddress}</p>
                                <p>Amount: {tx.amount}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </main>
    );
};

export default HomePage;
