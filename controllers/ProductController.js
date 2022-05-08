const products = require("../models/Products");

const addProduct = async (req, res) => {
    try {
        const data = req.body
        const newProduct = await new products({
            name: data.name, color: data.colors, numberOfItems: data.numberOfItems, rating: data.rating,
            description: data.description, details: data.details, price: data.price, images: data.images
        })
        await newProduct.save();
        res.send("new product added")

    } catch (error) {
        console.log(error)
        res.send("fail to add product")
    }
}

const getProducts = async (req, res) => {
    try {
        const data = await products.find();
        res.json(data);

    } catch (error) {
        console.log(error)
        res.send("fail to get productss")
    }
}

const deleteProduct = async (req, res) => {
    try {
        var pid = req.params.id;
        if (pid != null)
            var deletedP = await products.findByIdAndDelete(pid);
        if (!deletedP) {
            res.status(400).send("failed to delete product");
        } else {
            res.status(200).send("Product deleted successfully");
        }
    } catch (error) {
        console.log(error);
        res.send("Product to be deleted not found");
    }
}

const updateProduct = async (req, res) => {
    try {
        var pid = req.query.id;
        if (pid != null){
        var newData=req.body;
         var upadetedP = await products.findByIdAndUpdate(pid,newData);
        }
        if (!upadetedP) {
            res.status(400).send("failed to upadete product");
        } else {
            res.status(200).send("Product upadeted successfully");
        }
    } catch (error) {
        console.log(error);
        res.send("Product to be updated not found");
    }
}


const getProductsById = async (req, res) => {
    try {
        var pid=req.params.id;
                                    //you can use "findbyid(pid)"
        const data = await products.find({_id:pid});
        res.json(data);

    } catch (error) {
        console.log(error)
        res.send("fail to get productss")
    }
}


module.exports = {
    addProduct,
    getProducts,
    deleteProduct,
    updateProduct,
    getProductsById
}