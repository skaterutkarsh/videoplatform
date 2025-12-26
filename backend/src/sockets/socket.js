
let ioInstance;
exports.initSocket = (server) => {
  ioInstance = require("socket.io")(server, { cors: { origin: "*" } });
};
exports.io = () => ioInstance;
