import dotenv from"dotenv"
import express from "express";
import authUser from "./router/authRouter.js"
import db from "./DB/db.js"
import cookieParser from "cookie-parser"
import postRouter from "./router/postRouter.js"
import linkRouter from "./router/linkRouter.js"
import cors from "cors"
dotenv.config()
const app=express()
const port = process.env.PORT

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
  }))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/auth",authUser);
app.use("/api/post",postRouter);
app.use("/api/share",linkRouter);



app.listen(port,()=>{
console.log(`Server Running On Port ${port}`);
db()
})