// @ts-ignore
import { prisma } from "../utils/prismaClient.js";

export const signUp = async (username: string, password: string) => {
    console.log("hit service", username, password);

    const user = await prisma.users.create({
        data: { username, password },
    });
    console.log(`user: ${user}`);
    return user;
};

export const getUser = async (username: string) => {
    const user = await prisma.users.findUnique({
        where: {
            username: username,
        }
    });

    return user;
}
