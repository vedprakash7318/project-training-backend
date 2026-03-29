import express from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from "mongoose";
dotenv.config()

const app = express()

app.use(cors())

const PORT = process.env.PORT || 4000


app.get('/',(req,res)=>{
    res.send("Server is Running")
})

mongoose.connect(process.env.MongoUrl)
.then(()=>console.log("MongoDb Connect"))
.catch((err)=>console.log(err))


app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    
})


