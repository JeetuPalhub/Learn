const { json } = require("body-parser");
const express = require("express");
const app = express();
app.use(express.json());

let users = [
    {id: "1", name: "Jeetu"},
    {id: "2", name: "Jane"},
];

//get all users
app.get("/api/users", (req, res) => {
    res.json(users)
})

//  post user
app.post("/api/users", (req, res) => {
    const { name } = req.body;
    if(!name) return res.status(400).json({ message: "Name required"});

    const newUser = { id: Date.now().toString(), name};
    users.push(newUser)
    res.status(201).json(newUser)
})

// delete user by id
app.delete("/api/users/:id", (req, res) => {
    const exists = users.find(u => u.id === req.params.id);
    if(!exists) return res.status(404).json({ message: "User not found"})
    
        users = users.filter(u => u.id !== req.params.id);
        res.json({ message: "User deleted"})
})

app.listen(5000, () => console.log("User API running"))