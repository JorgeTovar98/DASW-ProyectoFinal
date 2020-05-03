'use strict'

const mongoose = require('mongoose');

let usersSchema = mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    user:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type: String,
        required:true
    }
})

module.exports = mongoose.model("User", usersSchema);