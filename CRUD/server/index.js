const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userModel = require('./models/users');
const cors = require('cors');
app.use(express.json())
app.use(cors());

//CONNECTING WITH THE DATABASE

mongoose.connect("mongodb://localhost:27017/crudTut", {useNewUrlParser:true});

//CREATING A USER MANUALLY

// app.get('/insert', async (req,res) => {
//     const user = new userModel({name:"Raju", age: 22});
//     await user.save();
//     res.send("Added")
// })

//CREATE A GET REQUEST
app.get('/read', async (req,res) => {
    await userModel.find({}, (err,result) => {
        if(err){
            res.send(err)
    }
    else{
        res.send(result)
        }
    })
})

app.listen(3001, () => {
    console.log("Server Running")
})