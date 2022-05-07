const express = require("express");
const route = express.Router();
const productController = require("../controllers/ProductController");

route.post("/", productController.addProduct);
route.get("/", productController.getProducts);

module.exports = route