import { Router } from "express";
import getAllProducts from "../controller/gettingAllProducts.controller.js";
import getSingleProduct from "../controller/getSingleProduct.controller.js";
import createProduct from "../controller/createNewProduct.controller.js";
import updateProduct from "../controller/updateProduct.controller.js";
import deleteProduct from "../controller/deleteProduct.controller.js";


const route = Router()

route
.get("/", getAllProducts)
.get("/:id", getSingleProduct)
.post("/", createProduct)
.patch("/:id", updateProduct)
.delete("/:id", deleteProduct)

export default route;