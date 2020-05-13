'use strict'

let Campaign = require('../schema/campaign');
const moment = require('moment');
let config = require('../config/config');

function phishingLink(req,res){
    let unique = req.params.unique;
    let url = `/api/linkcampaign/${unique}`;
    let update = {
        datelink: moment().format(),
        linkcounter: 1,
        ip: req.connection.remoteAddress
    }

    Campaign.findOneAndUpdate({linkcampaign:{$eq:url}},update,{new:true},(err,campaign)=>{
        if(err){
            res.status(500).send({message: 'Server error.'});
        }else{
            res.status(200).send({message:'Campaign updated, link clicked', results : campaign});
        }
    });
}

function loginLink(req,res){
    let unique = req.params.unique;
    let url = `/api/linklogin/${unique}`;

    let update = {
        datelogin: moment().format(),
        logincounter: 1
    }

    Campaign.findOneAndUpdate({linklogin:{$eq:url}},update,{new:true},(err,campaign)=>{
        if(err){
            res.status(500).send({message: 'Server error.'});
        }else{
            res.status(200).send({message:'Campaign updated, login pwned', results : campaign});
        }
    });
}

module.exports = {
    phishingLink,
    loginLink
};