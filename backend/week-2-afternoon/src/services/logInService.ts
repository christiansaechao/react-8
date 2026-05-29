// @ts-ignore
import { prisma } from "../utils/prismaClient.js";
import bcrypt from "bcrypt";

export const logIn = async (username: string, password: string) => {
  const user = await prisma.users.findUnique({
    where: { username: username },
  });

  if (!user) {
    console.error(`No user found for user: ${user}`);
    return;
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (isPasswordValid) {
    return user;
  }
  return null;
};
