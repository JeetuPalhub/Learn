const asyncHandler = require("express-async-handler");

const getUsers = asyncHandler(async(req, res) => {
    const users = await User.find();
    res.json(users)
})