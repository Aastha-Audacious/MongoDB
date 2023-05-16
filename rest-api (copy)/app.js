// Use dotenv to read .env vars into Node
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const router = require('./src/routes/user')
const app = express();
const port = process.env.PORT;


//middleware
app.use(express.json());
app.use(router)

//default method
app.all('/', (req, res, next)=>{
    res.status(200).send({
        msg:`Hello! You are welcome here.`
    });
});



// post listing
app.listen(port, console.log("server is running"));

module.exports= app;







// //creation of routes
// const donarRoute = require('./src/routes/donar');
// const userRoute = require('./src/routes/user');


// mongoose.connect('mongodb+srv://aasthapanwar0710:aastha07@merncluster.yba4x6w.mongodb.net/?retryWrites=true&w=majority')

// mongoose.connection.on('error', err=>{
//     console.log(`connection failed`);
// });

// mongoose.connection.on('connected', connected=>{
//     console.log(`connected with database...`);
// });
// //middleware
// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());

// app.use('/donar', donarRoute);
// app.use('/user', userRoute);
// app.get('/user/mail', sendMail);
// app.get('/user/forget-password', forget_password);

// app.use((req, res)=>{
//     res.status(404).json({
//         error: `bad request`
//     })
// })

