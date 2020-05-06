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
    creatorid:{
        type: String,
        required:true
    },
    linkcampaign:{
        type: String,
        required:true
    },
    linklogin:{
        type: String,
        required:true
    },
    ip:{
        type: String,
        required:true
    },
    linkcounter:{
        type: Number,
        required:true
    },
    logincounter:{
        type: Number,
        required:true
    },
    datelink:{
        type: String,
        required:true
    },
    datelogin:{
        type: String,
        required:true
    }
})

module.exports = mongoose.model("Campaign", campaignSchema);