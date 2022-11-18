const express=require("express");
const router=express.Router();
// const College=require("../Modules/note_modules")

router.route("/").get((req,res)=>{
    college.then(foundColleges=>res.json(foundColleges))
})
module.exports=router;
