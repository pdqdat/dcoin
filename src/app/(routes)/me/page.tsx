import React from "react";
import Link from "next/link";

// Components
import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import Container from "@/components/container";

// Assets
import { Slash } from "lucide-react";

// Auth
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const UserInfoPage = async () => {
    const session = await getServerSession(authOptions);

    if (!session) {
        return (
            <h1 className="text-lg font-semibold md:text-2xl">
                You have to{" "}
                <Link href="/login" className="underline">
                    login
                </Link>{" "}
                first!
            </h1>
        );
    }

    return (
        <Container>
            <div className="flex flex-1 flex-col gap-4 lg:gap-6">
                <div className="flex items-center"></div>

                {/* <UserInfo /> */}
                <div className="space-y-2 rounded-lg border border-dashed p-4">
                    <div className="flex space-x-2">
                        <h1 className="text-lg font-semibold md:text-2xl">
                            <span>{session?.user.name}</span>
                        </h1>

                        <Slash />

                        <h1 className="text-lg font-semibold md:text-2xl">
                            <span>{session?.user.email}</span>
                        </h1>
                    </div>

                    <p>Your balance: $100</p>
                </div>

                <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                    <Card className="border-dashed border-green-500">
                        <CardHeader>
                            <CardTitle className="text-green-500">
                                Your Public key
                            </CardTitle>

                            <CardDescription>
                                This is your wallet address, you are free to
                                share it
                            </CardDescription>
                        </CardHeader>

                        <CardContent>
                            <div className="bg-accent p-2">
                                <code className="break-words">
                                    {session.user.publicKey}
                                </code>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-red-500">
                        <CardHeader>
                            <CardTitle className="text-red-500">
                                Your Private key
                            </CardTitle>

                            <CardDescription>
                                Do not share your private key to anyone!
                            </CardDescription>
                        </CardHeader>

                        <CardContent>
                            <div className="bg-accent p-2">
                                <code className="break-words">
                                    <code>{session.user.privateKey}</code>
                                </code>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </Container>
    );
};

export default UserInfoPage;
