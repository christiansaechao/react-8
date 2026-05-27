// @ts-ignore
import { prisma } from "../utils/prismaClient.js";

export const createCart = async (userId:number, productId:number) => {
    const cart = await prisma.user.create({
        data: userId, productId
    });
    
    return cart;
};


export const deleteCart = async (userId:number, productId:number) => {
    return prisma.shoppingCart.delete({
    where: {
      userId_productId: {
        userId,
        productId,
      },
    },
  });
};