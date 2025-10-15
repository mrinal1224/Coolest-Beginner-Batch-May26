// http module
// starting at 10:45

const http = require('http')

const myServer = http.createServer((req, res)=>{
   res.end('Hello from the server')
   // some more things over here
})

myServer.listen(8000 , ()=>{
    console.log("Server Started")
})






