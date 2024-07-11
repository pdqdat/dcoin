import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const HomePage = () => {
    return (
        <main className="flex min-h-screen flex-col items-center p-12">
            <p className="text-2xl font-bold">DCoin</p>

            <div className="flex flex-col space-y-2 pt-16 items-center">
                <Link href="/login" className='block'>
                    <Button>Login</Button>
                </Link>

                <Link href="/register">
                    <Button variant="secondary">Register</Button>
                </Link>
            </div>
        </main>
    );
};

export default HomePage;
