const express = require("express");
require("dotenv").config();

const app =  express();

app.use(express.json());
app.get("/", (req, res) => {
    res.send("API")
})

app.use("/api/users", require("../src/routes/user.routes"))

const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
    console.log(`Server is running on port ${PORT}`)
})