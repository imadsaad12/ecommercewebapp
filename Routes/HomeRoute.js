
const express = require("express");

const route = express.Router();
const Home = require("../models/home");

route.post("/", async (req, res) => {
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

  module.exports = route;