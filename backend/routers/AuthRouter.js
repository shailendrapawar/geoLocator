const express=require("express");
const authRouter=express.Router();
const AuthControllers=require("../controllers/AuthControllers")
authRouter.post("/login",AuthControllers.login);
authRouter.post("/register",AuthControllers.register);

module.exports=authRouter;