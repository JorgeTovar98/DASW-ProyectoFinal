'use strict'

const mongoose = require('mongoose');

let campaignSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true,
        unique: true
    },
    date:{
        type: Date,
        required:true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    platform:{
        type: String,
        required:true
    },
    creator:{
        type: Object,
        required:true
    },
    recount:{
        type: Number,
        required:true
    }
})

module.exports = mongoose.model("Campaign", campaignSchema);