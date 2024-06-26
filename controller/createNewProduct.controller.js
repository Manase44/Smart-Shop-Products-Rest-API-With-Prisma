import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

const createProduct = async(req, res) => {
    const {productThumbnail, productTitle, productDescription, productCost, onOffer} = req.body;
    try {
        const creatingProduct = await prisma.products.create({
            data: {
                productThumbnail,
                productTitle,
                productDescription,
                productCost,
                onOffer
            }
        })
        res.status(201).json({ok:true, message: "The product was created successfully"})
    } catch (error) {
        res.status(500).json({ok:false, message: "Something is wrong"})
    }
    

    
}


export default createProduct;