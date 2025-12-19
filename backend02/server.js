const express = require("express");
require(dotenv).config();

const app = express();

// middleware to read json body
app.use(express.json());

app.get("/", (req, res) => {
    res.send("home");
});


// fake in-memory product data
let products = [{
    id: "1",
    name: "Laptop",
    price: 5000,
},{
    id: "2",
    name: "Mobile",
    price: 2000,
},];

// /api/products routes
app.get("/api/products", (req, res) => {
    res.status(200).json(products)
});

// create product
app.post("/api/products", (req, res) => {
    const {name, price } = req.body;

    if(!name || !price) {
        return res.status(400).json({
            message: "Name and price are required",
        });
    }

    const newProduct = {
        id: Date.now().toString(), // simple unique id
        name,
        price,
    };

    products.push(newProduct);

    res.status(201).json(newProduct);
})

// delete - product by id
app.delete("/api/products/:id", (req, res) => {
    const { id } = req.params;

    const productExists = products.find((p) => p.id === id);

    if(!productExists) {
        return res.status(404).json({
            message: "Product not found",
        })
    }

    products = products.filter((p) => p.id !== id);

    res.status(200).json({
        message: "Product deleted successfully",
    })
})

const PORT = process.env.PORT || 5000;
// start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})