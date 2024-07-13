export interface User {
    id: string;
    email: string;
    password: string;
    role: string;
    name: string;
    // createdAt: DateTime;
    publicKey: string;
    privateKey: String;
}

export interface Transaction {
    fromAddress: string | null;
    toAddress: string;
    amount: number;
    signature: string|undefined;
}

export interface Block {
    timestamp: number;
    transactions: Transaction[];
    previousHash: string;
    hash: string;
    nonce: number;
}
