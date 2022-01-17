
const express=require('express');
const usercotroller= require("../Coding_Evaluation/src/controller/user.controller");


const connection = require("../config/db.js")
const app=express();

app.listen(2345,async function(){
    try{
        // await connection();
    console.log("listening port 2345 is on")
    }catch(e){
        console.log("error");
    }
})

