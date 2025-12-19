let users = [];

app.post("/api/users", (req, res) => {
    const user = { id: Date.now(), ...req.body };
    users.push(user);
    res.status(201).json(user)
})

app.get("/api/users", (req, res) => {
    res.json(users);
})

app.delete("/api/users/:id", (req, res) => {
    users = users.filter(u => u.id != req.param.id);
    res.json({ message: "User deleted"})
})