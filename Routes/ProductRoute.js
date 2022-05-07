const express = require("express");
const route = express.Router();
const productController = require("../controllers/ProductController");

route.post("/Products", productController.addProduct);
route.get("/Products", productController.getProducts);

module.exports = route