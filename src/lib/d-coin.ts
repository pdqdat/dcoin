import { prisma } from "@/lib/prisma";

import { Blockchain, Transaction } from "@/services/blockchain";

import { getAllBlocks } from "@/services";
import {
    createTransaction,
    createBlock,
    assignTransactionToBlock,
} from "@/services/actions";

import { ec as EC } from "elliptic";
const ec = new EC("secp256k1");

let dCoin = new Blockchain();

const myKey = ec.keyFromPrivate(
    "149f6e847722a1e4c45770455d136b2ade671ed989101c046f807c6ec493eab1",
);

const myWalletAddress = myKey.getPublic("hex");



export default dCoin;
