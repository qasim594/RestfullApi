const express=require("express");
const almemar=require("../models/schema");

const getAllProducts= async(req,res)=>{
     
    const myData = await  almemar.find({});
    res.status(200).json({myData});
}
const getAllProductsTesting = async(req,res)=>{

        const dataa = await almemar.find({name : "aqif"});
     
    res.status(200).json({dataa});
}

module.exports={getAllProducts,getAllProductsTesting};