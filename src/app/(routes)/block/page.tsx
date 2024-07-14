import React from "react";

// Components
import Container from "@/components/container";
import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";

import dCoin from "@/lib/d-coin";

const AllBlocksPage = () => {
    return (
        <Container>
            {dCoin.chain.map((block, index) => (
                <Card key={index}>
                    <CardHeader>
                        <CardTitle></CardTitle>

                        <CardDescription>
                            {new Date(block.timestamp).toLocaleString()}
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <p>Transactions: </p>
                    </CardContent>
                </Card>
            ))}
        </Container>
    );
};

export default AllBlocksPage;
