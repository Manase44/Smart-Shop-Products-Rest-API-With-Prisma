import { PrismaClient } from "@prisma/client" 
const prisma = new PrismaClient()

const getAllProducts = async(req, res) => {
    try {
        const gettingAllProducts = await prisma.products.findMany()
        if (gettingAllProducts.length === 0) {
            res.status(200).json({ok:true, message: "The product store is empty"})
        } else {
            res.status(200).json({ok: true, message: gettingAllProducts})
        }
    } catch (error) {
        res.status(500).json({ok:false, message: "Something is wrong"})
    }
}

export default getAllProducts