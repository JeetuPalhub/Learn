const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId, ref: "User"
    },
    roomId: String,
    text: String,
})


socket.on("sendMessagge", async({ roomId, message}) => {
    await MessageChannel.create({
        sender: socket.user.id,
        roomId,
        text: message
    })

    io.to(roomId).emit("receiveMessage", message)
})

socket.on("typing", () => {
    socket.broadcast.emit("typing")
})