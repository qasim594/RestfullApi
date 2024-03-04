require("dotenv").config();
const express=require("express");
const app=express();
const router=require("./routers/route");
const connectDb=require("./db/connect");
const Port=process.env.Port || 5000;


app.get("/",(req,res)=>{
    res.send("hello from the other side");
})

app.use("/api/products",router);


const start=async()=>{
    try{
       await connectDb(process.env.MONGODB_URL);
  app.listen(Port,()=>{
    console.log(`connected the port is ${Port}`);
  })
    }catch(e){
        console.log(e);
    }
}

start();