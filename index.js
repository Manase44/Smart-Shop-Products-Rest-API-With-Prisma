import e from "express";
import { config } from "dotenv";
import productsRouter from "./routes/products.routes.js";


config()
const app = e()

app.use(e.json())

app.use("/products", productsRouter)


app.listen(3000, () => {
    console.log("The server is running successfully")
})