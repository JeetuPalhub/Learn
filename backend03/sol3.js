const express = require("express");
const app = express();
app.use(express.json());

let cart = [
    {id:"1", name:"book", qty:1},
    {id: "2", name:"toy", qty: 2}
]

//get
app.get("/api/cart", (req, res)=> {
    res.json(cart)
})

//post
app.post("/api/cart", (req, res) => {
    const { name, qty } = req.body;
    if(!name  || !qty) {
        return res.status(400).json({message: "NAme"})
    }

    const item = { id: Date.now().toString(), name, qty}
    cart.push(item)
    res.status(201).json(item)
})

// delete
app.delete("/api/cart/:id", (req, res) => {
    const exists = cart.find(i => i.id === req. params.id);
    if(!exists) return res.status(404).json({ message: "ITEM"})

        cart = cart.filter(i => i.id !==req.params.id)
        res.json({})
})