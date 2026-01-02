const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// connect db
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Test route
app.get("/", (req, res) => {
  res.send("API is running");
});

module.exports = app;
