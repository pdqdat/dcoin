import React from "react";

import { generateKeys } from "@/services/generate-keys";
import { ec as EC } from "elliptic";
import { Blockchain, Transaction } from "@/services/blockchain";

import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import TestComponent from "@/components/test";

// Auth
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

import { createTransaction } from "@/services/actions";
import dCoin from "@/lib/d-coin";

const TestPage = async () => {
    const session = await getServerSession(authOptions);

    const ec = new EC("secp256k1");

    const myKeys = ec.keyFromPrivate(
        session?.user.privateKey ||
            "149f6e847722a1e4c45770455d136b2ade671ed989101c046f807c6ec493eab1",
        "hex",
    );

    return (
        <Container>
            <TestComponent />
        </Container>
    );
};

export default TestPage;
