const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());
mongoose
  .connect("mongodb://localhost:27017/ecommmerce")
  .then((res) => {
    app.listen(4000, () => console.log("server is running on port 4000 . . ."));
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/products", async (req, res) => {
  const data = {
    fisrtname: "ali",
    lastname: "hashem",
  };
  res.json(data);
});
