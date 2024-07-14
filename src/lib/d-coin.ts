import { prisma } from "@/lib/prisma";

import { Blockchain, Transaction } from "@/services/blockchain";
import { Block } from "@/types";

import { getAllBlocks } from "@/services";
import { createTransaction, createBlock } from "@/services/actions";

import { ec as EC } from "elliptic";
const ec = new EC("secp256k1");

const myKey = ec.keyFromPrivate(
    "149f6e847722a1e4c45770455d136b2ade671ed989101c046f807c6ec493eab1",
);

const myWalletAddress = myKey.getPublic("hex");

let blocks: Block[] = [];
let dCoin: Blockchain | null = null;

const fetchBlocks = async () => {
    blocks = (await getAllBlocks()) as unknown as Block[];
    console.log("blocks: ", blocks);

    // console.log("before: ", dCoin.chain[0]);
    // if (blocks.length > 0) {
    //     dCoin = new Blockchain(
    //         blocks[0].timestamp,
    //         blocks[0].previousHash,
    //         blocks[0].hash,
    //         blocks[0].nonce,
    //     );
    // }
    // console.log("after: ", dCoin?.chain[0]);
};

if (dCoin !== null) {
    fetchBlocks();
}

export default dCoin;
