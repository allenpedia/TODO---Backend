const mongoose = require("mongoose");


async function connectDB(){

    await mongoose.connect("mongodb+srv://test:2e12YhhbNOyog2oq@testproject.3agnpeo.mongodb.net/test");
    console.log("Connected to DB");
}


module.exports = connectDB;