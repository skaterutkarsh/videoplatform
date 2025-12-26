
const mongoose = require("mongoose");
module.exports = mongoose.model("Video", new mongoose.Schema({
  filename: String,
  path: String,
  status: String,
  progress: Number
}, { timestamps: true }));
