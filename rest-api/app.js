// Use dotenv to read .env vars into Node
require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT;
const sendMail = require('./controllers/sendMail')
const forget_password = require('./controllers/forget_password')
const cors = require('cors');

//creation of routes
const donarRoute = require('./api/routes/donar');
const userRoute = require('./api/routes/user');


mongoose.connect('mongodb+srv://aasthapanwar0710:aastha07@merncluster.yba4x6w.mongodb.net/?retryWrites=true&w=majority')

mongoose.connection.on('error', err=>{
    console.log(`connection failed`);
});

mongoose.connection.on('connected', connected=>{
    console.log(`connected with database...`);
});
//middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
app.use('/donar', donarRoute);
app.use('/user', userRoute);
app.get('/user/mail', sendMail);
app.get('/user/forget-password', forget_password);

// app.use((req, res)=>{
//     res.status(404).json({
//         error: `bad request`
//     })
// })

const start = async()=>{
try {
    app.listen(port, console.log(`server is running at port ${port}`));
} catch (error) {
    
}
}
start();

app.get('/', (req, res, next)=>{
    res.status(200).send({
        msg:`Hello! You are welcome here.`
    });
});



// post listing
// app.listen(port, console.log("server is running"));

module.exports= app;