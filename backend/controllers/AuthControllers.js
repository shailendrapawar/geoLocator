const express=require("express");
const AuthModel=require("../models/AuthModel");

class AuthControllers{

    static login=async(req,res)=>{
        const {id,password}=req.body;
        const isRegistered=await AuthModel.findOne({id:id});

        if(isRegistered){
            if(isRegistered.password==password){
                res.json({
                    msg:"authentic user",
                    status:200,
                    user:isRegistered
                })
            }else{
                res.json({
                    msg:"wrong credebtials",
                    status:400
                })
            }

        }else{
            res.json({
                msg:"not registered",
                status:400
            })
        }
    }

    static register=async(req,res)=>{
        const {id,name,password}=req.body;
        const isRegistered=await AuthModel.findOne({id:id});
        if(!isRegistered){

            const userData=new AuthModel({
                name:name,
                id:id,
                password:password
            })

            const isCreated= await userData.save()
            if(isCreated){
                res.json({
                    msg:"user created",
                    status:200
                })
            }else{
                res.json({
                    msg:"user not created",
                    status:400
                })
            }

        }else{
            res.json({
                msg:"user exists",
                status:400
            })
        }

        
    }

}

module.exports=AuthControllers;