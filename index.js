const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/Products");
const Home = require("./models/home");
const cors = require('cors');

const homeRoute = require('./Routes/HomeRoute');

//middleware
app.use(express.json());
app.use(cors());

//connect to database and start listen to specific port
mongoose
  .connect(
    ""
  )
  .then((res) => {
    app.listen(4000, () => {
      console.log("server is running on port 4000 . . .")
      console.log("Welcome To Mazarita International Film Festival")
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/products", async (req, res) => {
  const data = {
    fisrtname: {
      x: "wew",
    },
    lastname: "hashem",
  };
  res.json(data);
});

app.post("/products", async (req, res) => {
  // get the data sent by the frontend
  const data = req.body;
  try {
    console.log(data);
    console.log("HI")
    const newProduct = await new Product({
      name: data.name,
      color: data.color,
      numberOfItems: data.numberOfItems,
    });
    await newProduct.save();
    res.send("product saved ");
  } catch (error) {
    console.log(error);
  }
});

app.use('/home', homeRoute);
