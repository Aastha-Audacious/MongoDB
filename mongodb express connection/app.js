require("./config/db.config")
const express = require('express')
const app = express()
const PORT = 2323
const {userRouter} = require('./routers/user_router')

//middleware
app.use(express.json())
app.use('/api/v1', userRouter)


//homepage
app.get("/", (req,res)=>{
    res.send("<h1>HELOO its homepage </h1>")
})



//server creation
app.listen(PORT , ()=>{
    console.log(`server has started ${PORT}`)
})