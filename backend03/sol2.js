const express = require("express");
const app =  express();
app.use(express.json());

let todos  = [
    {id: "1", title: "Learn Express", done: false},
];

//get
app.get("/api/todos", (req, res) => {
    res.json(todos)
})

//post
app.post("/api/todos", (req, res) => {
    const { title } = req.body;
    if(!title) return res.status(400).json({ message: "Title required"});

    const todo = { id: Date.now().toString(), title, done: false};
    todos.push(todo);
    res.status(201).json(todo);
});

//patch
app.patch("/api/todos/:id", (req, res) => {
    const todo = todos.find(t => t.id === req.params.id);
    if(!todo) return res.status(404).json({ message: "Todo not found"});

    todo.done = !todo.done;
    res.json(todo)
});

app.listen(5000, () => console.log("API"))