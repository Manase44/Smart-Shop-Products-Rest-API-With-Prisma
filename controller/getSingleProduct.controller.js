import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const getSingleProduct = async(req, res) => {
    const productId = req.params.id
    try {
        const gettingSingleProduct = await prisma.products.findUnique({
            where:{
                id: productId
            }
        })

        if (!gettingSingleProduct) {
            res.status(200).json({ok:true, message: "The product was not found"})
        } else {
            res.status(200).json({ok:true, message: gettingSingleProduct})
        }
        
    } catch (error) {
        res.status(500).json({ok:false, message: "Something is wrong"})
    }
}

export default getSingleProduct;