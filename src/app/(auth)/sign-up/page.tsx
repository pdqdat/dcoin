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

const SignUpPage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const router = useRouter();
    const { toast } = useToast();

    const toastDuration = 2500;

    const handleSignUp = () => {
        setIsLoading(true);

        toast({
            duration: toastDuration,
            title: "Creating your account...",
            description: "Just kidding :> This feature is being developed.",
        });

        setTimeout(() => {
            setIsLoading(false);
        }, toastDuration);
    };

    const handleSignUpWithGoogle = () => {
        setIsLoading(true);

        toast({
            duration: toastDuration,
            title: "Signing up with Google...",
            description: "Just kidding :> This feature is being developed",
        });

        setTimeout(() => {
            setIsLoading(false);
        }, toastDuration);
    };

    return (
        <div className="flex h-screen items-center justify-center">
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
                        <CardTitle className="text-xl">Sign Up</CardTitle>

                        <CardDescription>
                            Enter your information to create an account
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <div className="grid gap-5">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="first-name">
                                        First name
                                    </Label>
                                    <Input
                                        id="first-name"
                                        placeholder="Dat"
                                        required
                                    />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="last-name">Last name</Label>
                                    <Input
                                        id="last-name"
                                        placeholder="Phan"
                                    />
                                </div>
                            </div>

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
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" />
                            </div>

                            <Button
                                type="submit"
                                className="w-full"
                                disabled={isLoading}
                                onClick={handleSignUp}
                            >
                                {isLoading && (
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                )}{" "}
                                Create an account
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
                                onClick={handleSignUpWithGoogle}
                            >
                                {isLoading && (
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                )}{" "}
                                Google
                            </Button>
                        </div>

                        <div className="mt-4 text-center text-sm">
                            Already have an account?{" "}
                            <Link href="/login" className="underline">
                                Login
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default SignUpPage;
