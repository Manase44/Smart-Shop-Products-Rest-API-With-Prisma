import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const deleteProduct = async(req, res) => {
    const productId = req.params.id
    try {
        const deletingProduct =  await prisma.products.delete({
            where:{
                id : productId
            }
        })
        res.status(200).json({ok:true, message: "The product was deleted successfully"})
    } catch (error) {
        res.status(500).json({ok:false, message:"Something is wrong"})
    }
}

export default deleteProduct;