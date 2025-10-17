const express = require('express')

const app = express()
// get request
app.get('/' , (req , res)=>{
    res.send("Hello from the Express Server")
})

//more http methods and more properties

app.listen(8001 , ()=>{
    console.log('Server Started in port 8001')
})