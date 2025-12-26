
const multer = require("multer");
module.exports = multer({
  storage: multer.diskStorage({
    destination: "uploads/",
    filename: (_, f, cb) => cb(null, Date.now() + "-" + f.originalname)
  })
});
