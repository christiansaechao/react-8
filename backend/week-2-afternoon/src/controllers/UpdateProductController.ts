import { Request, Response } from 'express';
import { updateProductsService } from '../services/products.service';

export const updateProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const result = await updateProductsService(id as string, updateData);

        res.status(200).json({
            message: "Product updated successfully",
            data: result
        });
    } catch (error: any) {
        res.status(500).json ({
            error: "Failed to update product",
            details: error.message
        });
    }
};