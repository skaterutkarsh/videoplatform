let ioInstance

exports.initSocket = (server) => {
  ioInstance = require("socket.io")(server, {
    cors: {
      origin: "http://localhost:5173", 
      methods: ["GET", "POST"],
    },
  })

  ioInstance.on("connection", (socket) => {
    console.log("Socket connected:", socket.id)
  })
}

exports.io = () => ioInstance
