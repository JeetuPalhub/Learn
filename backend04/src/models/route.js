const express = require("express");

const {createUser, getUser, deleteUser} = require("../controllers/auth.controller");

const router = express.Router();

router.post("/api/users", createUser);
router.get("/api/users", getUser);
router.delete("/api/users/:id", deleteUser);

module.exports = router;
