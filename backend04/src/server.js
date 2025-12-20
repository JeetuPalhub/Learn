const express = require("express");
const app = express();

require("config").dotenv();

app.use(express.json());
app.get("/", (req, res) => {
    res.send("API")
})



app.use("/api/v1/users", require("../src/router/auth.router"));

const PORT = process.env.PORT || PORT;
app.listen(5000, () => {
    console.log(`Server is running on port${PORT}`)
})