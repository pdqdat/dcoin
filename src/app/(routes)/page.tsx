"use client";

import React from "react";

// Hooks
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

const HomePage = () => {
    const router = useRouter();

    return (
        <main className="flex min-h-screen flex-col items-center p-12">
            <p className="text-2xl font-bold">DCoin</p>

            <div className="flex flex-col space-y-2 pt-16">
                <Button onClick={() => router.push("/login")}>Login</Button>

                <Button variant="secondary" onClick={() => router.push("/sign-up")}>Sign up</Button>
            </div>
        </main>
    );
};

export default HomePage;
