import { Request, Response } from "express"
import { receiptModel } from "../models/receipt.model"

export const receiptController =  {
    addToCart: async (req: Request, res: Response) => {
        const result = await receiptModel.addToCart(req.body,Number(req.tokenData.id))

    }
}