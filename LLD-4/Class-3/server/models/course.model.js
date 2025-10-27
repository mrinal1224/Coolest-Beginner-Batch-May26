const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },

    instructor : {
        type:String,
        required: true
    },

    isActive:{
        type:Boolean,
        required:true
    },

    ratings:{
        type:Number
    }
})


const Course = mongoose.model('courses' , courseSchema )

module.exports = Course