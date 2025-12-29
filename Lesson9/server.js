const http = require("http");
const app = require("./app");

const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: "*"
    }
})

io.on("connection", (socket) => {
    console.log("User connected:", socket.id)
})

socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id)
})

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => 
console.log`Servver running on port{PORT}`)


io.on("connection", (socket) => {
    socket.on("message", (data) => {
        console.log(data);
        io.emit("message", data)
    })
})