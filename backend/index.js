const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();


app.use(express.json());
app.use("api/v1/user");


mongoose.connect("mongodb+srv://sahilsher2710:zcHoE7xB87iPNSkA@cluster0.tk8xj.mongodb.net/paytm")
console.log("database is connect!")

app.listen(3000);