const express=require("express");
const app=express();

const HOST="0.0.0.0"
const PORT=80;

app.get("/",(req,res)=>{
    res.send("Hi m from docker container")
})

app.listen(PORT,HOST);

console.log(`Your app is runnning on ${HOST}:${PORT}`)