// server.js
// Minimal HTTP video streamer WITH BUFFER LOGS

const http = require("http");
const fs = require("fs");
const path = require("path");

const VIDEO_PATH = path.join(__dirname, "video.mp4");
const PORT = 8001;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const html = fs.readFileSync(path.join(__dirname, "index.html"));
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end(html);
  }

  if (req.url === "/video") {
    if (!fs.existsSync(VIDEO_PATH)) {
      res.writeHead(404);
      return res.end("Video not found.");
    }

    const stat = fs.statSync(VIDEO_PATH);
    const fileSize = stat.size;
    const range = req.headers.range;

    if (range) {
      const parts = range.replace(/bytes=/, "").split("-");
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

      const chunkSize = end - start + 1;

      console.log(chunkSize)

      const videoStream = fs.createReadStream(VIDEO_PATH, { start, end });

      res.writeHead(206, {
        "Content-Range": `bytes ${start}-${end}/${fileSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": chunkSize,
        "Content-Type": "video/mp4"
      });

      // 🔥 LOG EACH BUFFER CHUNK
      videoStream.on("data", (chunk) => {
        console.log(
          `Chunk: ${chunk.length} bytes | Range: ${start} - ${end}`
        );
      });

      videoStream.on("end", () => {
        console.log("Stream finished for this request.\n");
      });

      videoStream.pipe(res);
    } else {
      res.writeHead(200, {
        "Content-Length": fileSize,
        "Content-Type": "video/mp4",
        "Accept-Ranges": "bytes"
      });

      const videoStream = fs.createReadStream(VIDEO_PATH);

      // 🔥 LOG EACH CHUNK WHEN FULL FILE IS STREAMED
      videoStream.on("data", (chunk) => {
        console.log(`Full-file Stream Chunk: ${chunk.length} bytes`);
      });

      videoStream.on("end", () => {
        console.log("Full-file streaming complete.\n");
      });

      videoStream.pipe(res);
    }

    return;
  }

  res.writeHead(404);
  res.end("Not found");
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
