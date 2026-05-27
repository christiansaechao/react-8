import express from "express";
import {getProduct, deleteProductById, createProduct} from "../controllers/ProductController";

const router = express.Router();

router.get('/:id' , getProduct);

router.post('/', createProduct);


router.delete('/:id', deleteProductById)
export default router;

