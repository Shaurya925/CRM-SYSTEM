import express from "express";
import cors from "cors";
import errorMiddleware from "./middleware/errorMiddleware.js";
import router from "./routes/leadRoutes.js";


const app = express()


app.use(cors({
    origin:"*"
}))
app.use(express.json())
app.use("/",router)


app.use(errorMiddleware)




export default app;