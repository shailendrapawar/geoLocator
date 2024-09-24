const mongoose=require("mongoose");
require("dotenv").config()
const DbConfig=async()=>{
    const res=await mongoose.connect(process.env.MONGO_URL)
    if(res){
        console.log("DB connected")
    }else{
        console.warn("DB not connected")
    }
}

module.exports=DbConfig;