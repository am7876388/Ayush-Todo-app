const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Schema = new mongoose.Schema({
    name:{type:String,required:true},
    Class:{type:String,required:true},
    Pass:{type:Boolean,required:true}
},{strict:true})
const User = mongoose.model("Ayush1",Schema);
router.post("/user",async (req,res) =>{
    try {
    const{name,Class,Pass} = req.body;
    const newUser = new User({name,Class,Pass});
    await newUser.save();
    res.status(201).json({msg:"Success"});
    console.log("Success");
    } catch (error) {
    res.status(500).json({msg:error});
    console.log("Error ",error);
    }
});
router.get("/find",(req,res) =>{
    const ID = req.body.id;
    User.findById(ID).then((data) =>{
    res.status(200).json({data});
    console.log(data);
    }).catch((error) =>{
        res.status(500).json({msg:error});
        console.log(error);
    })
})
router.put("/update", (req, res) => {
    const data = req.body;
    const ID = data.id;
    User.findByIdAndUpdate(ID, { $set: data }, { new: true, runValidators: true })
        .then((document) => {
            if (document) {
                res.status(201).json("Success");
                console.log("Success");
            } else {
                res.status(404).json({ msg: "Document not found" });
                console.log("Error");
            }
        })
        .catch((error) => {
            res.status(404).json({ msg: error.message });
            console.log("Error ", error);
        });
});
router.delete("/delete",(req,res) =>{
    const ID = req.body.id;
    User.findByIdAndDelete(ID).then(() =>{
        res.status(201).json({msg:"Deleted"});
        console.log("Deleted");
    }).catch((error) =>{
        res.status(404).json({error});
        console.log("Error ",error);
    })
})
module.exports = router;