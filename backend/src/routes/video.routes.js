
const router = require("express").Router();
const upload = require("../middleware/upload.middleware");
const Video = require("../models/Video");
const stream = require("../utils/streamVideo");
const { process } = require("../services/videoProcessor");

router.post("/upload", upload.single("video"), async (req, res) => {
  const video = await Video.create({
    filename: req.file.filename,
    path: req.file.path,
    status: "uploaded",
    progress: 0
  });
  process(video._id);
  res.json(video);
});

router.get("/", async (_, res) => {
  res.json(await Video.find());
});

router.get("/:id/stream", async (req, res) => {
  const v = await Video.findById(req.params.id);
  stream(req, res, v.path);
});

module.exports = router;
