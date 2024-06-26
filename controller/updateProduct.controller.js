import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const updateProduct = async(req, res) => {
    const productId = req.params.id;
    const {productThumbnail, productTitle, productDescription, productCost, onOffer} = req.body;

    try {
        const findTheProductToBeUpdated = await prisma.products.findUnique({
            where: {
                id: productId
            }
        })
        if (!findTheProductToBeUpdated) {
            res.status(200).json({ok:false, message: "The product to be updated was not found"})
        }else{
            const updatingProduct = await prisma.products.update({
                where: {
                    id : productId
                },
                data: {
                    productThumbnail,
                    productTitle,
                    productDescription,
                    productCost,
                    onOffer
                }
            })
            res.status(200).json({ok:true, message:"The product was updated successfully"})
        }
        
    } catch (error) {
        res.status(500).json({ok:false, message: "Something is wrong"})
    }
}

export default updateProduct;