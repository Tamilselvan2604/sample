const express= require("express");
const app=express();
const path= require("path");


app.get("/superstar",(req,res)=>{
    res.sendFile(path.join(__dirname,"superstar.html"))
})
app.get("/vip",(req,res)=>{
    res.sendFile(path.join(__dirname,"vip.html"))
})
app.get("/thalapthy",(req,res)=>{
    res.sendFile(path.join(__dirname,"thalapathy.html"))
})

app.listen(4021   ,   ()=>{
    console.log("server is running");
})