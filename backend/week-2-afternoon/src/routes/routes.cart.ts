import express from "express";
import * as cartController from "../controllers/CartController";

const router = express.Router();


router.post("/cart", cartController.creatACart);

router.delete('/:userId/cart/:productId', cartController.removeProductFromCart)
export default router;

