import express from "express"
import mongoose from "mongoose";

const app = express();
const port = 3000;

app.listen({port}, ()=>{
    {`Servidor corriendo en el puerto ${port}`}
});

app.set('view engine', 'ejs');

mongoose.connect(
    "mongodb://127.0.0.1:27017/economiaPage",
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
)
.then(() => console.log("Connected to mongoDB"))




app.use(express.urlencoded({ extended: true }));
app.use(express.json());

import productRoutes from "./routes/products.js";
app.use("/",productRoutes)
