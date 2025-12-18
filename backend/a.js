app.get("/user/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req.query.name);
    res.json({ success: true })
})
// /user/10?name=jeetu
// req - params, query, body, headers
// res - send, json, status

// http methods
app.get("/users", (req, res) => {})
app.post("/users", (req, res) => {})
app.put("/users/:id", (req, res) => {})
app.delete("/users/:id", (req, res) => {})

// middleware
app.use(express.json());

const logger = (req, res, next) => {
    console.log(req.method, req.url);
    next();
}

app.use(logger);
// Request → middleware → route → response

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Server Error" })
})

