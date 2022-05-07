const express = require("express");
const app = express();
const mongoose = require("mongoose");
//const Product = require("./models/Products");
const cors = require("cors");
const userRoute=require("./Routes/UserRoute");
const ProductRoute = require('./Routes/ProductRoute');

//middleware
app.use(express.json());
app.use(cors());

//connect to database and start listen to specific port
mongoose
  .connect(
    "mongodb+srv://mydb:93928@cluster0.g0he0.mongodb.net/Ecommerce?retryWrites=true&w=majority"
  )
  .then((res) => {
    app.listen(4000, () => {
      console.log("server is running on port 4000 . . .");
    });
  })
  .catch((err) => {
    console.log(err);
  });

//routes
app.use("/",userRoute);
app.use("/Products",ProductRoute);