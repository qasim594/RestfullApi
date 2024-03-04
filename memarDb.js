require("dotenv").config();
const connectDB=require("./db/connect");
const memar =require("./memarDb.json");
const almemar=require("./models/schema");

const start=async()=>{
    try{
     await connectDB(process.env.MONGODB_URL);
     await almemar.create(memar);
     console.log("sucess");
    }catch(e){
        console.log(e);
    }
}


start();