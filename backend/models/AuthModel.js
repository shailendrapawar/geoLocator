const mongoose=require("mongoose");

const authSchema= new mongoose.Schema({
    id:{
        type:Number,
    },
    name:{
        type:String,
    },
    password:{
        type:String,
    },
    coords:{
        lat:{
           type:Number,
           default:0
            
        },
        lon:{
            type:Number,
            default:0
        }
    },
    status:{
        type:Boolean,
        default:false
    }

})

const authModel=mongoose.model("authModel",authSchema);

module.exports=authModel;