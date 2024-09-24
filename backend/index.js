const express=require("express")
const app=express();
const cors=require("cors");

const DbConfig=require("./config/DbConfig")
DbConfig()

const authRouter=require("./routers/AuthRouter")
const userRouter=require("./routers/UserRouter")
const AuthModel=require("./models/AuthModel")

const{createServer}=require("http")
const myServer=createServer(app);

const {Server}=require("socket.io")
const io=new Server(myServer,{
    cors: {
        origin: 'http://localhost:5173', // Replace with your client's origin
        methods: ['GET', 'POST'],
    }
})

app.use(cors({
    origin: '*', // Replace with your client’s origin
    methods: ['GET', 'POST'],
}))
app.use(express.json())
app.use(authRouter);
app.use(userRouter);

io.on("connection",(socket)=>{
    console.log("connected"+socket.id)

    socket.on("updateLocation",async(data)=>{

        // let res=await AuthModel.findByIdAndUpdate({_id:id},{
        //     $set:{
        //         coords:{
        //             lat: data.latitude,
        //             lon:data.longitude
        //         }
        //     }
        // })

        // if(res){

        //     console.log(data)
        //     io.emit("updateAll",data)
        // }

    })

    socket.on('disconnect', () => {
        console.log('Client disconnected');
      });
})





myServer.listen(3000,()=>{
    console.log("server listening");
})

