//@ts-ignore
import { prisma } from "../utils/prismaClient.js";

export const getUser = async (userId: number) => {
  const user = await prisma.users.findUnique({
    where: {
      id: Number(userId),
    },
  });
  
  return user;
};

// createUser()
export const createUser = async (name: string, address: string) => {
  const user = await prisma.users.create({
    data: { name, address },
  });
  console.log("user", user);
  return user;
};

export const deleteUser = async (id: number) => {
  const deletedUser = await prisma.users.delete({
    where: { id },
  });

  return deletedUser;
};
