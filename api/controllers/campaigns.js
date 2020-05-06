'use strict'

let Campaign = require('../schema/campaign');
const moment = require('moment');
let config = require('../config/config');

function getCampaignsByUser(req,res){
    let id = req.params.creatorid;
    console.log(req.params);
    Campaign.find({creatorid:{$eq:id}}).lean(true).exec((err,campaign)=>{
        if(err){
            res.status(500).send({message: 'Server error.'});
        }else{
            if(Object.entries(campaign).length === 0){
                res.status(200).send({message: 'User has no campaigns.', results : []});
            }else{
                res.status(200).send({message:'Campaigns obtained', results : campaign});
            }
        }
    });
}

function createCampaign(req,res){
    let campaign = new Campaign();
    let params = req.body;
    campaign.name = params.name;
    campaign.city = params.city;
    campaign.date = params.date;
    campaign.email = params.email;
    campaign.platform = params.platform;
    campaign.creatorid = params.creatorid;
    campaign.linkcampaign = `${config.SERVER_URL}/api/linkcampaign/${moment().valueOf()}`;
    campaign.linklogin = `${config.SERVER_URL}/api/linklogin/${moment().valueOf()}`;
    campaign.ip = " ";
    campaign.linkcounter = 0;
    campaign.logincounter = 0;
    campaign.datelink = " ";
    campaign.datelogin = " ";

    campaign.save((err, storedCampaign) => {
        if(err){
            console.log(err);
            res.status(500).send({mesage:'Server error.'});
        } else {
            if(!storedCampaign){
                res.status(404).send({message:'Error while saving.'});
            } else {
                res.status(201).send({message:'User stored', user : storedCampaign});
            }
        }
    });
}

module.exports = {
    getCampaignsByUser,
    createCampaign
};