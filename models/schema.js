const mongoose=require("mongoose");

const memarSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    work_type:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    experience:{
        type:String,
        required:true
    }
})

module.exports=new mongoose.model("almemar",memarSchema);