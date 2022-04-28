
const express = require("express");

const route = express.Router();
const homeCont = require('../Controllers/HomeController');
route.post("/", homeCont.addHome);

route.get("/", homeCont.getAllHomes);

route.get("/:id", homeCont.getSpecificHome);
  
route.put("/:id",homeCont.updateHome)
  
route.delete("/:id",homeCont.deleteHome)

  module.exports = route;