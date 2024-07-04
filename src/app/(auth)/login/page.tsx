"use client";

import React, { useState } from "react";
import Link from "next/link";

// Hooks
import { useRouter } from "next/navigation";

// Components
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

// Assets
import { Loader2, ChevronLeft } from "lucide-react";

const LoginPage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [privateKey, setPrivateKey] = useState<string>("");
    const [publicKey, setPublicKey] = useState<string>("");
    const [file, setFile] = useState<File>();

    const router = useRouter();
    const { toast } = useToast();

    const toastDuration = 2500;

    // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     if (event.target.files) {
    //         const file = event.target.files[0];

    //         if (file) {
    //             const reader = new FileReader();

    //             reader.onload = (e) => {
    //                 if (e.target && e.target.result) {
    //                     const content = e.target.result;

    //                     try {
    //                         const keys = JSON.parse(content as string);
    //                         setPrivateKey(keys.privateKey);
    //                         setPublicKey(keys.publicKey);
    //                         console.log(privateKey, publicKey);

    //                         toast({
    //                             title: "Keys loaded successfully",
    //                             duration: toastDuration,
    //                         });
    //                     } catch (error) {
    //                         console.error("Error parsing the file", error);

    //                         toast({
    //                             title: "Error loading keys",
    //                             description: "The file could not be parsed.",
    //                             duration: toastDuration,
    //                         });
    //                     }
    //                 } else {
    //                     console.error(
    //                         "FileReader did not load the file correctly.",
    //                     );
    //                     toast({
    //                         title: "File Load Error",
    //                         description: "There was an issue loading the file.",
    //                         duration: toastDuration,
    //                     });
    //                 }
    //             };

    //             reader.readAsText(file);
    //         }
    //     }
    // };

    const handleLogin = () => {
        setIsLoading(true);

        toast({
            duration: toastDuration,
            title: "Logging you in...",
            description: "Just kidding :> This feature is being developed",
        });

        setTimeout(() => {
            setIsLoading(false);
        }, toastDuration);
    };

    const handleLoginWithGoogle = () => {
        setIsLoading(true);

        toast({
            duration: toastDuration,
            title: "Logging in with Google...",
            description: "Just kidding :> This feature is being developed",
        });

        setTimeout(() => {
            setIsLoading(false);
        }, toastDuration);
    };
    console.log(file);

    return (
        <div className="mt-4 flex h-screen justify-center sm:mt-0 sm:items-center">
            <div className="space-y-4">
                <Button
                    variant="outline"
                    onClick={() => router.push("/")}
                    className="pl-2"
                >
                    <ChevronLeft className="mr-1 h-5 w-5" />
                    Home
                </Button>

                <Card className="mx-auto max-w-sm">
                    <CardHeader>
                        <CardTitle className="text-2xl">Login</CardTitle>

                        <CardDescription>
                            Enter your email below to login to your account
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <div className="grid gap-5">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="pd.quocdat@gmail.com"
                                    required
                                />
                            </div>

                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>

                                    <Link
                                        href="#"
                                        className="ml-auto inline-block text-sm underline"
                                    >
                                        Forgot your password?
                                    </Link>
                                </div>

                                <Input id="password" type="password" required />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="email">Key pair</Label>
                                <Input
                                    id="key-pair"
                                    type="file"
                                    required
                                    onChange={(e) =>
                                        setFile(e.target.files?.[0])
                                    }
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full"
                                disabled={isLoading}
                                onClick={handleLogin}
                            >
                                {isLoading && (
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                )}
                                Login with email
                            </Button>

                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t" />
                                </div>

                                <div className="relative flex justify-center text-xs uppercase">
                                    <span className="bg-background px-2 text-muted-foreground">
                                        Or continue with
                                    </span>
                                </div>
                            </div>

                            <Button
                                variant="outline"
                                className="w-full"
                                disabled={isLoading}
                                onClick={handleLoginWithGoogle}
                            >
                                {isLoading && (
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                )}
                                Google
                            </Button>
                        </div>

                        <div className="mt-4 text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <Link href="/sign-up" className="underline">
                                Sign up
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default LoginPage;
