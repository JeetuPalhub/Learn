io.on("connection", (socket) => {

    socket.on("joinRoom", (roomId)=> {
        socket.join(roomId)
    })

    socket.on("sendMessage", ({ roomId, message }) => {
        io.to(roomId).emit("receive message", message)
    })
})

socket.to(roomId).emit("message", msg)

io.use((socket, next) => {
    const token = socket.handshake.auth.token;

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        socket.user = decoded;
        next()
    } catch (error) {
        next(new Error("Unauthorized"))
    }
})

