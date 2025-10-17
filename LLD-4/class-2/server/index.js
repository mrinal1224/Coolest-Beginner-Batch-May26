const express = require('express')


const app = express()

app.use(express.json())

const courses = [
    {id:1 , name:'Java' , instructor:"Atif" , ratings:4.8 , isActive:true},
    {id:2 , name:'JavaScript' , instructor:"Samprit" , ratings:4.9 , isActive:true},
    {id:3 , name:'DBMS' , instructor:"Ekta" , ratings:4.85 , isActive:false},
]
 


// get request
app.get('/topics' , (req , res)=>{
    res.send("Hello from the Express Server")
})

// getting all courses
app.get('/topics/courses' , (req , res)=>{
   res.send(courses)
})

// get a specific course
// Route Parmeters

app.get('/topics/courses/:id' , (req ,res)=>{
    console.log(req.params) //id{2}
    let course = courses.find((course)=>course.id===parseInt(req.params.id))

    if(!course){
        return res.send('Course with the id not found')
    }
    res.send(course)
})



// How to create something  - post 

app.post('/topics/courses', (req , res)=>{
     let course = {
        id : req.body.id,
        name : req.body.name,
        instructor:req.body.instructor,
        ratings : req.body.ratings,
        isActive: req.body.isActive

     }

     courses.push(course)

     res.send(courses)
})



// update - put
app.put('/topics/courses/:id' , (req , res)=>{
  let course = courses.find((course)=>course.id===parseInt(req.params.id))

  course.isActive = req.body.isActive
  course.instructor = req.body.instructor

  res.send(course)
})



// delete

app.delete('/topics/courses/:id' , (req , res)=>{
    // complete this block
})




//more http methods and more properties

app.listen(8001 , ()=>{
    console.log('Server Started in port 8001')
})