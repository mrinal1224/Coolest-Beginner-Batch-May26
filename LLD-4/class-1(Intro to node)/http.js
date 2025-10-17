// http module
// starting at 10:45

const http = require("http");

const myServer = http.createServer((req, res) => {
  console.log(req.url);

  switch (req.url) {
    case "/":
      res.end("Home Page");
      break;

    case "/about":
      res.end("This is the About Page");
      break;

    case "/contact":
      res.end("This is the Contact Page");
      break;

    default :
    res.end("Page not Found");
     break;

  }
});

myServer.listen(8000, () => {
  console.log("Server Started");
});
