const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 7474;
require("./config/db.config")
const router = require("./router/userRoute")


//middleware
app.use(express.json())
app.use(router)
//homepagerouting
app.get("/",(req,res)=>{
    res.send("its homepage")
})

//server
app.listen(port,()=>{
    console.log(`server is runing on port:${port}`)
})