const mongoose=require("mongoose");


uri="mongodb+srv://qasimshahzad594:qasim1122@almemar.hekix9g.mongodb.net/alMemar?retryWrites=true&w=majority&appName=alMemar";



const connectDb=(uri)=>{
    return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true
      }) 
}
module.exports=connectDb;