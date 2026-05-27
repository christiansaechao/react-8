import type { Request, Response } from "express";
import {
  updateProductsService,
  getProductService,
  deleteProduct,
  createProductService,
} from "../services/products.service";

export const createProduct = async (req: Request, res: Response) => {
  if (!req.body) return res.status(400).json({ msg: "bad request" });
  try {
    const product = await createProductService(req.body);
    return res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "could not be created" });
  }
};

export const getProduct = async (req: Request, res: Response) => {
  try {
    const product = await getProductService(req.params.id as string);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "some Controller error message" });
  }
};

export const deleteProductById = async (req: Request, res: Response) => {
  if (!req.params.id) {
    res.status(401).json({ error: "no body" });
  }

  const id = Number(req.params.id);
  
  const deletedProduct = await deleteProduct(id);
  return res
    .status(200)
    .json({ deletedProduct, msg: "Product deleted sucessfully" });
};
