const express = require("express");
const route = express.Router();
const products=require("../models/Products");
 
route.post("/Products", async(req,res)=> {
    try {
        const data=req.body
        const newProduct = await new products({
            name:data.name,color:data.colors,numberOfItems:data.numberOfItems,rating:data.rating,
            description:data.description,details:data.details,price:data.price,images:data.images
        })
        await newProduct.save();
        res.send("new product added")

    } catch (error) {
        console.log(error)
        res.send("fail to add product")
    } 
} );
route.get("/Products",async(req,res)=>{
    try {
      const data= await products.find();
      res.json(data);

    } catch (error) {
        console.log(error)
        res.send("fail to get productss")
    }
})
module.exports=route