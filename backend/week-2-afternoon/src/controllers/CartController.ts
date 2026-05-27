import type { Request, Response } from "express";
import * as userService from "../services/service.users";
import { createCart, deleteCart } from "../services/cart.service";

// export const getUser = async (req, res) => {
  
// }

type CartType = {
    id: number;
    userId: number;
    productId: number;
}

export const creatACart = async (req: Request, res: Response) => {
  try {
    if (!req.body) return res.status(401).json({error: "no body"});

    const { userId, productId } = req.body;
    if(!userId || !productId) return res.status(401).json({error: "no user id or product id"});
    
    const cart: CartType = await createCart(userId, productId);
    return res.status(201).json({ cart, msg: "success" });
  } catch (err) {
    return res.status(404).json({error: "failed to create cart"})
  }
}

export const removeProductFromCart = async (req: Request, res: Response) => {
  if(!req.params.userId || !req.params.productId){
    res.status(401).json({ error: "no body" });
  }
  const userId = Number(req.params.userId);
  const productId = Number(req.params.productId);
  const deletedCart = await deleteCart(userId, productId);
  return res.status(200).json({ deletedCart, msg: "Cart deleted sucessfully" });
};


