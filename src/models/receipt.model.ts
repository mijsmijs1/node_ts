import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export const receiptModel = {
    addToCart: async (item: any, userId: any) => {
        try {
            // let cartExisted = await prisma.receipts.findMany({
            //     where: {
            //         status: ReceiptStatus.shopping,
            //         userId: userId
            //     },
            //     include: {
            //         receipt_details: {
            //             include: {
            //                 product: true
            //             }
            //         }
            //     }
            // })
        } catch (err) {

        }

    }
}