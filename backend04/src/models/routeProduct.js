const express = require("express");

const { createProduct, getProduct, deleteProduct}  =  require("../controllers/product");
const { model } = require("mongoose");

const router = express.Router();

router.post("/create", createProduct);
router.get("/getProduct", getProduct);
router.delete("/deleteProduct", deleteProduct);


model.exports = router;

