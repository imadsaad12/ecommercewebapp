const mongoose=require("mongoose");
const homeSchema=new mongoose.Schema({
    name:String,
    age:Number,
    car:Boolean,
})

const Home=mongoose.model("Home",homeSchema);
module.exports=Home