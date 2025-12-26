
const fs = require("fs");
module.exports = (req, res, path) => {
  const stat = fs.statSync(path);
  const range = req.headers.range;
  const start = range ? Number(range.replace(/\D/g, "")) : 0;
  const end = stat.size - 1;

  res.writeHead(range ? 206 : 200, {
    "Content-Range": `bytes ${start}-${end}/${stat.size}`,
    "Accept-Ranges": "bytes",
    "Content-Length": end - start + 1,
    "Content-Type": "video/mp4"
  });

  fs.createReadStream(path, { start, end }).pipe(res);
};
