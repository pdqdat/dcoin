-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL,
    "fromAddress" TEXT,
    "toAddress" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "signature" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Block" (
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "previousHash" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "nonce" INTEGER NOT NULL,

    CONSTRAINT "Block_pkey" PRIMARY KEY ("timestamp")
);

-- CreateTable
CREATE TABLE "Transaction_Block" (
    "transactionID" TEXT NOT NULL,
    "blockTimestamp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Transaction_Block_pkey" PRIMARY KEY ("transactionID","blockTimestamp")
);

-- AddForeignKey
ALTER TABLE "Transaction_Block" ADD CONSTRAINT "Transaction_Block_transactionID_fkey" FOREIGN KEY ("transactionID") REFERENCES "Transaction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction_Block" ADD CONSTRAINT "Transaction_Block_blockTimestamp_fkey" FOREIGN KEY ("blockTimestamp") REFERENCES "Block"("timestamp") ON DELETE RESTRICT ON UPDATE CASCADE;
