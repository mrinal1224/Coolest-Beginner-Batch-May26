const http = require("http");
const fs = require("fs"); 
const path = require("path");

const VIDEO_PATH = path.join(__dirname , 'video.mp4')

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const html = fs.readFileSync("index.html");

    return res.end(html);
  }


  if(req.url=='/video'){
    const readVideostream = fs.createReadStream(VIDEO_PATH)
    const stat = fs.statSync(VIDEO_PATH)
    res.writeHead(200, {
        "Content-Type": "video/mp4",
        "Content-Length": stat.size
      });
   

    readVideostream.on('data' , (chunk)=>{
        console.log('Buffer Chunk' , chunk)
    })

    readVideostream.pipe(res)
    return


  }
});


server.listen(8001 , ()=>{
    console.log("Server Started")
})
