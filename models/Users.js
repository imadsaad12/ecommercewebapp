const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    name:{
        firstname:{
            type:String,
            required:true,
        },
        lastname:{
            type:String,
        }
    },
    userName:String,
    email:{
        unique:true,
        required:true,
        type:String,
    },
    password:{
        type:String,
        required:true
    },
    age:Number
},{
    timestamps:true
});

// define collection to the user schema
const Users=mongoose.model("users",userSchema);
// export schema to use it in index.js
module.exports=Users;