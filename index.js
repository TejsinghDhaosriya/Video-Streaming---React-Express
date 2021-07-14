const express = require("express");
const app = express();

const fs = require("fs");
app.get("/", (req, res) => {
  const range = req.headers.range;
  const videoPath = "infinity.mp4";
  const videoSize = fs.statSync(videoPath).size;

  const chunkSize = 0.5 * 1e6;

  const start = Number(range.replace(/\D/g, ""));
  console.log(start);
  const end = Math.min(start + chunkSize, videoSize - 1);
  console.log(end);
  const contentLength = end - start + 1;

  const headers = {
    "Content-Range": `bytes ${start}-${end}/${videoSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": contentLength,
    "Content-Type": "video/mp4",
  };
  res.writeHead(206, headers);

  const stream = fs.createReadStream(videoPath, { start, end });
  stream.pipe(res);
});

app.listen(process.env.PORT || 4000);
