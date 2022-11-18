const express=require("express");
const app=express();
const cors=require("cors");
const { default: mongoose } = require("mongoose");
const DATABASE_URL="mongodb+srv://munnawar:powerofs@cluster0.wvli9ud.mongodb.net/college"
app.use(cors());
app.use(express.json());
mongoose.connect(DATABASE_URL).then(()=>{
    console.log("Connected Sucessfully")
}).catch((error)=>{console.log(error)})
app.use("/",require("./Routes/route"))
app.listen(3001,()=>{console.log("Connected on serever 3001")})