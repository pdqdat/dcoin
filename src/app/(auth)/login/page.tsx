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
import LoginForm from "@/components/auth/login-form";

// Assets
import { Loader2, ChevronLeft } from "lucide-react";

const LoginPage = () => {
    return (
        <div className="mt-4 flex h-screen justify-center sm:mt-0 sm:items-center">
            <div className="space-y-4">
                <Link href="/">
                    <Button variant="outline" className="pl-2">
                        <ChevronLeft className="mr-1 h-5 w-5" />
                        Home
                    </Button>{" "}
                </Link>

                <Card className="mx-auto max-w-sm">
                    <CardHeader>
                        <CardTitle className="text-2xl">Login</CardTitle>

                        <CardDescription>
                            Enter your email below to login to your account
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        {/* <div className="grid gap-5"> */}
                            {/* <div className="grid gap-2">
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
                            </div> */}
                        {/* </div> */}

                        <LoginForm/>

                        <div className="mt-5 text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <Link
                                href="/register"
                                className="text-primary underline"
                            >
                                Register
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default LoginPage;
