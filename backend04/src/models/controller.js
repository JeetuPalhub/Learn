const User = require("../models/User");

//post /api/users
const createUser = async (req, res) => {
    const user = await User.create(req.body);
    res.status(201).json(user)
}

// get /api/users
const getUser = async (req, res) => {
    const users = await User.find();
    res.json(users)
}

// delete /api/users/:id
const deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted"})
}

module.exports = { createUser, getUser, deleteUser };
