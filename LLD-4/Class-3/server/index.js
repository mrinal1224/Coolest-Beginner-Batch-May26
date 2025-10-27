const express = require("express");
const dbConnection = require("./dbConfig.js");
const Course = require("./models/course.model.js");
const CourseController = require("./controllers/course.controllers.js");

// MongoDb Basic Setup - not

const app = express();
dbConnection.connectDb();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from the Server");
});

// http method - post
// creating a course

app.post("/courses", CourseController.createCourse);


// get 
// update a course 

app.listen(8002, () => {
  console.log("Server Started");
});
