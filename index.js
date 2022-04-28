const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/Products");
const Home = require("./models/home");

//middleware
app.use(express.json());

//connect to database and start listen to specific port
mongoose
  .connect(
    "mongodb+srv://mydb:93928@cluster0.g0he0.mongodb.net/Ecommerce?retryWrites=true&w=majority"
  )
  .then((res) => {
    app.listen(4000, () => console.log("server is running on port 4000 . . ."));
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

app.post("/home", async (req, res) => {
  const data = req.body;
  try {
    const newHome = await new Home(data);
    await newHome.save();
    res.send("done");
  } catch (error) {
    console.log(error);
    res.send("failed");
  }
});

app.get("/home", async (req, res) => {
  try {
    const allDoc = await Home.find({});
    res.json(allDoc);
  } catch (error) {
    console.log(error);
    res.send("failed");
  }
});

app.get("/home/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const home = await Home.findById(id);
    res.json(home);
  } catch (error) {
    console.log(error);
    res.send("failed");
  }
});

app.put("/home/:id",async(req,res)=>{
  try {
    const id=req.params.id
    const data=req.body;
    await Home.findByIdAndUpdate({_id:id},data);
    res.send("done")
    
  } catch (error) {
    console.log(error);
    res.send("failed")
  }
})

app.delete("/home/:id",async (req,res)=>{
  try {
    const id=req.params.id;
    await Home.findByIdAndDelete(id)
    console.log(id)
    res.send("done")
  } catch (error) {
    console.log(error);
    res.send("failed")
  }
})

//post , get , delete , put
