const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, 
    {Timestamp: true}
);

module.exports = mongoose.model("User", userSchema);

// 💡 Schema = structure
// 💡 Model = tool to interact with DB

// MongoDB is NoSQL, so it doesn’t have joins like SQL.
// Mongoose lets you reference another document using its _id.

// populate() is used when fetching data to replace the ObjectId with actual document data.