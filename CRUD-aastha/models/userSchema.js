const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true
    },
    userEmail:{
        type: String,
        required: true,
        unquie: true
    },
    password:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true,
        index: true
    },
    isActive:{
        type: Boolean,
        required: true,
        default: true
    }
    
});

userSchema.set('timestamps',true)
module.exports = mongoose.model('user',userSchema)
