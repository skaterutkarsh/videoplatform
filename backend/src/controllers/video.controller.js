const Video = require("../models/Video")

exports.uploadVideo = async (req, res) => {
  const io = req.app.get("io")

  const video = await Video.create({
    filename: req.file.filename,
    userId: req.user.id,
    status: "PROCESSING",
  })

  // Emit progress updates (simulated)
  let progress = 0
  const interval = setInterval(async () => {
    progress += 20
    io.emit("processing-progress", { videoId: video._id, progress })

    if (progress >= 100) {
      clearInterval(interval)
      video.status = "SAFE"
      await video.save()
      io.emit("processing-complete", { videoId: video._id })
    }
  }, 1000)

  res.status(201).json(video)
}

exports.listVideos = async (req, res) => {
  const videos = await Video.find({ userId: req.user.id })
  res.json(videos)
}
