const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const {router} = require("./routes/index");
const userRouter = require("./routes/user");
const { MONGO_URL } = require("./config");
const cors = requier('cors');
app.use(cors());
app.use(express.json());
app.use("api/v1/main",router);
app.use("api/v1/user",userRouter);
 

async function main() {

await mongoose.connect(MONGO_URL)
    console.log("database is connect!")
    app.listen(3000);
}

main()