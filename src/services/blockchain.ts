import { SHA256 } from "crypto-js";
import { ec as EC } from "elliptic";
const ec = new EC("secp256k1");

class Transaction {
    fromAddress: string | null;
    toAddress: string;
    amount: number;
    signature?: string;

    constructor(fromAddress: string | null, toAddress: string, amount: number) {
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
    }

    calculateHash(): string {
        return SHA256(
            this.fromAddress + this.toAddress + this.amount,
        ).toString();
    }

    signTransaction(signingKey: EC.KeyPair): string {
        if (signingKey.getPublic("hex") !== this.fromAddress) {
            throw new Error("You cannot sign transactions for other wallets!");
        }

        const hashTx = this.calculateHash();
        const sig = signingKey.sign(hashTx, "base64");
        this.signature = sig.toDER("hex");

        return this.signature;
    }

    isValid(): boolean {
        if (this.fromAddress === null) {
            return true;
        }

        if (!this.signature || this.signature.length === 0) {
            throw new Error("No signature in this transaction.");
        }

        const publicKey = ec.keyFromPublic(this.fromAddress, "hex");
        return publicKey.verify(this.calculateHash(), this.signature);
    }
}

class Block {
    public timestamp: number;
    public transactions: Transaction[];
    public previousHash: string;
    public hash: string;
    public nonce: number;

    constructor(
        timestamp: number,
        transactions: Transaction[],
        previousHash = "",
        hash = "",
        nonce = 0,
    ) {
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.previousHash = previousHash;
        this.hash = hash || this.calculateHash();
        this.nonce = nonce || 0;
    }

    calculateHash(): string {
        return SHA256(
            this.timestamp +
                JSON.stringify(this.transactions) +
                this.previousHash +
                this.nonce,
        ).toString();
    }

    mineBlock(difficulty: number): void {
        while (
            this.hash.substring(0, difficulty) !==
            Array(difficulty + 1).join("0")
        ) {
            this.nonce++;
            this.hash = this.calculateHash();
        }

        console.log("Block mined: " + this.hash);
    }

    hasValidTransactions(): boolean {
        for (const tx of this.transactions) {
            if (!tx.isValid()) {
                return false;
            }
        }
        return true;
    }
}

class Blockchain {
    public chain: Block[];
    difficulty: number;
    pendingTransactions: Transaction[];
    miningReward: number;

    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 2;
        this.pendingTransactions = [];
        this.miningReward = 100;
    }

    createGenesisBlock(): Block {
        return new Block(Date.now(), [], "0");
    }

    updateGenesisBlock(
        timestamp: number,
        previousHash: string,
        hash: string,
        nonce: number,
    ): void {
        let genesisBlock = this.chain[0];
        genesisBlock.timestamp = timestamp;
        genesisBlock.previousHash = previousHash;
        genesisBlock.hash = hash;
        genesisBlock.nonce = nonce;
    }

    getLatestBlock(): Block {
        return this.chain[this.chain.length - 1];
    }

    minePendingTransactions(miningRewardAddress: string): void {
        const rewardTx = new Transaction(
            null,
            miningRewardAddress,
            this.miningReward,
        );
        this.pendingTransactions.push(rewardTx);

        let block = new Block(
            Date.now(),
            this.pendingTransactions,
            this.getLatestBlock().hash,
        );
        block.mineBlock(this.difficulty);

        console.log("Block successfully mined!");
        this.chain.push(block);

        this.pendingTransactions = [];
    }

    addTransaction(transaction: Transaction): void {
        if (!transaction.fromAddress || !transaction.toAddress) {
            // if (!transaction.toAddress || !transaction.fromAddress) {
            throw new Error("Transaction must include from and to address.");
        }

        if (!transaction.isValid()) {
            throw new Error("Cannot add invalid transaction to chain.");
        }

        this.pendingTransactions.push(transaction);
    }

    getBalanceOfAddress(address: string): number {
        let balance = 0;

        for (const block of this.chain) {
            for (const trans of block.transactions) {
                if (trans.fromAddress === address) {
                    balance -= trans.amount;
                }

                if (trans.toAddress === address) {
                    balance += trans.amount;
                }
            }
        }

        return balance;
    }

    isChainValid(): boolean {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (!currentBlock.hasValidTransactions()) {
                return false;
            }

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }

        return true;
    }
}

export { Blockchain, Transaction };
