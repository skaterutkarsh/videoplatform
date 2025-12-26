
const Video = require("../models/Video");
const { io } = require("../sockets/socket");

exports.process = async (id) => {
  let p = 0;
  const t = setInterval(async () => {
    p += 25;
    io().emit("progress", { id, progress: p });
    await Video.findByIdAndUpdate(id, { progress: p, status: "processing" });
    if (p >= 100) {
      clearInterval(t);
      await Video.findByIdAndUpdate(id, { status: "safe" });
    }
  }, 1000);
};
