const express=require("express");
const AuthModel=require("../models/AuthModel")

class UserController{
    static getAllUsers=async(req,res)=>{
        const users=await AuthModel.find({});

        if(users){
            res.send({
                status:200,
                msg:"success",
                users:users
            })
        }else{
            res.send({
                status:400,
                msg:"failure",
                users:[]
            })
        }

    }

    static getSingleUser=async(req,res)=>{
        const {id}=req.body;
        const user=await AuthModel.findOne({id:id});

        if(user){
            res.send({
                status:200,
                msg:"success",
                user:user
            })
        }else{
            res.send({
                status:400,
                msg:"failure",
                user:[]
            })
        }
    }
}

module.exports=UserController