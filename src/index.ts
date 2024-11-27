import express , {Request,Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute"

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(()=>{
    console.log("Connection to db success");
}).catch((e)=>{
    console.log(e.message);
    
})

const app = express();
app.use(express.json());
app.use(cors());

app.get("/health",async(req:Request,res:Response)=>{
    res.send({message:"health OK!"});
})

app.use("/api/my/user",myUserRoute);

// app.get("/test",async (req:Request,res:Response)=>{
//     res.json({"message":"Hello i am the test !!!"});
// })

app.listen(3000,()=>{
    console.log("http://localhost:3000");
})