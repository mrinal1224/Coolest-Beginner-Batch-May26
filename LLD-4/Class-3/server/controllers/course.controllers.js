const Course = require('../models/course.model.js')

async function createCourse(req , res) {
    const course = await Course.create({
    name: req.body.name,
    instructor: req.body.instructor,
    isActive: req.body.isActive,
    ratings: req.body.ratings,
    
  });

  res.status(201).json(course);
}

module.exports={
    createCourse
}