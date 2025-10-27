const express = require('express')
const dbConnection = require('./dbConfig.js')


// MongoDb Basic Setup - not 


const app = express()
dbConnection.connectDb()


app.get('/' , (req , res)=>{
    res.send('Hello from the Server')
})






app.listen(8002 , ()=>{
    console.log('Server Started')
})