const Product = require("../models/product");

// create product /api/product
const createProduct = async (req, res) => {
    const product = await Product.create(req.body);
    res.status(201).json(product)
}

const getProduct = async (req, res) => {
    const product = await Product.find();
    res.json(product)
}


const deleteProduct = async (req, res) => {
    const product = await Product.findByIdAndDelete(req.param.id);
    res.json(product)
}


module.exports = { createProduct, getProduct, deleteProduct };
