const express= require('express');
const user= require('../models/user.model.js');

const app = express();

app.get("/user", async function(req, res) {
    const user= await user.find().lean().exec();
    return res.send(user);
});

app.post("/user", async function(req,){
    try{
        const data= await user.create(req.body);
        return res.send(data);

    }catch(err){
        console.log(err)

    }
})