import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

import chatRouter from "./app/routes/chatbot.route.js";

const PORT =process.env.PORT ||5000 ||3000;

const app = express();

app.use(cors())

app.use(express.json());

app.use("/api/chatbot",chatRouter)

mongoose.connect(process.env.DBURL).then(() =>{
    console.log("mongodb connected successfully");

app.listen(process.env.PORT,() =>{
    console.log(`server running on port ${process.env.PORT}`);
});
}).catch((err) =>{
    console.log("mongodb connection faild",err);
});
