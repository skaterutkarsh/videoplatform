
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

connectDB();
const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
)

app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/videos", require("./routes/video.routes"));

module.exports = app;
