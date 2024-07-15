import React from "react";

// Components
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import AllBlocks from "@/components/all-blocks";
import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";

const BlockPage = ({ params }: { params: { blockID: string } }) => {
    return (
        <Container>
            <h1>Block #{params.blockID}</h1>
        </Container>
    );
};

export default BlockPage;
