import React from "react";
import Link from "next/link";

// Components
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import RegisterForm from "@/components/auth/register-form";

// Assets
import { ChevronLeft } from "lucide-react";

const SignUpPage = () => {
    return (
        <div className="mt-4 flex h-screen justify-center sm:mt-0 sm:items-center">
            <div className="space-y-4">
                <Link href="/">
                    <Button variant="outline" className="pl-2">
                        <ChevronLeft className="mr-1 h-5 w-5" />
                        Home
                    </Button>
                </Link>

                <Card className="mx-auto max-w-sm">
                    <CardHeader>
                        <CardTitle className="text-xl">Register</CardTitle>

                        <CardDescription>
                            Enter your information to create an account
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <RegisterForm />

                        <div className="mt-6 select-none text-center text-sm">
                            Already have an account?{" "}
                            <Link
                                href="/login"
                                className="text-primary underline"
                            >
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
