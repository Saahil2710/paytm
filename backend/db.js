const mongoose = require("express");


const userModel = new mongoose.Schema({
    username:String,
    password:String,
    firstName :String,
    lastName : String,
})

const User = new mongoose.model("User",userModel);

module.exports ={
    User
}