// @ts-ignore
import { prisma } from "../utils/prismaClient.js";

type UserType = {
  username: string;
  password: string;
};

export const signupUserInDB = async (User: UserType) => {
  const user = await prisma.users.create({
    data: { username: User.username, password: User.password },
  });

  return user;
};

export const usernameInUseCheck = async (username: string) => {
  const user = await prisma.users.findMany({
    where: { username: username },
  });

  return user;
};

export const passwordCheck = async (username: string) => {
  const user = await prisma.users.findMany({
    where: { username: username },
  });

  return user[0].password;
};
