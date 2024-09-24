const express=require("express");
const userRouter=express.Router();
const UserControllers=require("../controllers/UserControllers");
const authRouter = require("./AuthRouter");


authRouter.get("/getAllUsers",UserControllers.getAllUsers)
authRouter.post("/singleUser",UserControllers.getSingleUser);

module.exports=userRouter