const {Router} = require("mongoose");
const userRouter = Router();
const {User} = require("../db")

const jwt = requier("jsonwebtoken");
const {JWT_SECRET} = require('../config');

userRouter.post("/signup",function(req,res){

    const { username,
        password,
        firstName ,
        lastName  } = req.body;

        const user = User.create({
            username,
            password,
            firstName,
            lastName,
        })

        if(user){
            res.json({
                msg:'user create successfully'
            })

        }
})


userRouter.post("/signin",function(req,res){

    const { username,
        password,
         } = req.body;

        const user = User.findOne({
            username,
            password,
        })

        if(user){

            const token = jwt.sign({
                id:user._id
            },JWT_SECRET)

            res.json({
                mtoken:token
            })

        }
})




module.exports = userRouter;