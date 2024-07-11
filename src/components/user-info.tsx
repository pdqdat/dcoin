"use client";

import React from "react";

import { useSession } from "next-auth/react";

const UserInfo = () => {
    const { status, data } = useSession();

    return (
        <>
            <h1 className="text-lg font-semibold md:text-2xl">
                {status === "authenticated"
                    ? "User info"
                    : "You have to login first?"}
            </h1>

            {status === "authenticated" && (
                <>
                    <p>Email: {data?.user.email}</p>
                    <p>Role: {data?.user.name}</p>
                    <p>Role: {data?.user.role}</p>
                    <p>Role: {data?.user.privateKey}</p>
                    <p>Role: {data?.user.publicKey}</p>
                </>
            )}
        </>
    );
};

export default UserInfo;
