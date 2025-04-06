const {Router} = require("mongoose");
const userRouter = Router();
const {User} = require("../db")
const zod = require("zod");

const jwt = requier("jsonwebtoken");
const {JWT_SECRET} = require('../config');

const signupSchema = zod.object({
    username :zod.string().email(),
    password :zod.string(),
    firstName:zod.string(),
    lastName:zod.string()

}) 

userRouter.post("/signup",async function(req,res){

    const body = req.body;
    const {success} = signupSchema.safeParse(req.body);
    if(!success){
        return res.json({
            message:"Email already taken / Incorrect inputs"
        })
    } 

        const user = User.findOne({
            username : body.username
        })

        if(user._id){
            return res.json({

            })
        }

        const dbUser = await User.create(body);
        const token = jwt.sign({
            userId:dbUser.id
        },JWT_SECRET)
        res.json({
            message:'User created successfully',
            token:token
        })
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