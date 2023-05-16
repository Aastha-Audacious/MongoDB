const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const app = express();

// Connect to MongoDB with Mongoose
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Import routes
const authRoutes = require('./routers/authRoutes');

// Use body-parser middleware to parse request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.get('/', (req, res)=>{
    res.json({msg:"hii aastha , welcome to homepage"})
})

// Use routes
app.use('/api/auth', authRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));