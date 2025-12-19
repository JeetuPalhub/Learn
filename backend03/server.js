const express  = require("express");
require(dotenv).config();

const app = express();

app.use(express.json());

// in memory db 
let products = [
    { id: "1", name: "Laptop", price: "50000" },
    { id: "2", name: "Mobile", price: 200000},
];

//get all products
app.get("/api/products", (req, res) => {
    res.status(200).json(products);
});

//  post products
app.post("/api/products", (req, res) => {
    const { name, price }= req.body;

    if(!name || !price) {
        return res.status(400).json({
            message: "Name and price are required",
        })
    }

    const newProduct = {
        id: Date.now().toString(),
        name,
        price,
    };

    products.push(newProduct);

    res.status(201).json(newProduct)
})

// delete products by id

const { id } = req.params;

const productExists = pro
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`)
})