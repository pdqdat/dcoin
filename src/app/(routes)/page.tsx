import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const HomePage = () => {
    return (
        <main className="flex min-h-screen flex-col items-center p-12">
            <p className="text-2xl font-bold">DCoin</p>


            <div className="flex flex-col space-y-2 pt-16 items-center">
                A simple blockchain implementation
            </div>
        </main>
    );
};

export default HomePage;
