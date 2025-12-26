const mongoose = require("mongoose")

const videoSchema = new mongoose.Schema({
  filename: String,
  status: {
    type: String,
    enum: ["PROCESSING", "SAFE", "FLAGGED"],
    default: "PROCESSING",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
})

module.exports = mongoose.model("Video", videoSchema)
