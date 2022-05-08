const express = require("express");
const route = express.Router();
const productController = require("../controllers/ProductController");

route.post("/", productController.addProduct);
route.get("/", productController.getProducts);
route.delete("/:id", productController.deleteProduct);
route.put("/", productController.updateProduct);
route.get("/:id", productController.getProductsById);

module.exports = route