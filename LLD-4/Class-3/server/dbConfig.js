const mongoose = require("mongoose");

const connectDb = async ()=>{
    try {
       await mongoose.connect('mongodb+srv://mrinal12:CdJ7SHLy7Pjs4Tp4@cluster0.sweiye6.mongodb.net/LMS?appName=Cluster0')
       console.log("DB Connected")
    } catch (error) {
        console.log("DB Connection Failed ", error)
    }
}

module.exports={
    connectDb
}


