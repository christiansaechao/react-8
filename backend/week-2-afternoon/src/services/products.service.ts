// @ts-ignore
import { prisma } from "../utils/prismaClient";

export const updateProductsService = async (
  productId: string,
  updateData: any,
) => {
  const id = parseInt(productId);

  const updatedProduct = await prisma.product.update({
    where: { id: id },
    data: updateData,
  });
  return updatedProduct;
};

export const getProductService = async (id: string) => {
  const product = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
  });
  return product;
};

export const deleteProduct = async (id: number) => {
  return prisma.product.delete({
    where: { id },
  });
};

export const createProductService = async (productData: {
  price: number;
  name: string
}) => {
  const { price, name } = productData;
  const product = await prisma.product.create({
    data: { price, name},
  });
  return product;
};
//connect with Prisma to update the product in the database locating it with ProductId,
