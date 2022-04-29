const mongoose=require("mongoose");
// define schema (document)
const productSchema=new mongoose.Schema({
    name:String,
    color:String,
    numberOfItems:{
        type:Number,
        required:true
    }
});

// define collection to the user schema
const Product=mongoose.model("products",productSchema);
// export schema to use it in index.js
module.exports=Product;

