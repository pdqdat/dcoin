"use server";

import { prisma } from "@/lib/prisma";

export const getAllMembers = async () => {
    const users = await prisma.user.findMany();

    return {
        users,
    };
};

export const getUserByID = async (id: string) => {
    const user = await prisma.user.findUniqueOrThrow({
        where: { id: id },
    });

    return { user };
};

export const getAllBlocks = async () => {
    const blocks = await prisma.block.findMany();

    return {
        blocks,
    };
}