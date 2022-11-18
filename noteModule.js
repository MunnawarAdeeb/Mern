const { default: mongoose } = require("mongoose")
const collegeSchema=new mongoose.Schema({
    title:String,
    description:String,
    url:String
    });
    const Colleges=new mongoose.model("colleges",collegeSchema)
    module.exports=Colleges;