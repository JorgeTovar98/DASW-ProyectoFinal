'use strict'

let Campaign = require('../schema/campaign');
const moment = require('moment');
let config = require('../config/config');

function getCampaignsByUser(req,res){
    let id = req.params.creatorid;
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

function getCampaignById(req,res){
    let id = req.params.id;
    Campaign.findById(id,(err,campaign) => {
        if(err){
            console.log(err);
            res.status(500).send({message: 'Server error.'});
        }else{
            if(Object.entries(campaign).length === 0){
                res.status(404).send({message: 'Campaign not found.'});
            }else{
                res.status(200).send({message:'Campaign obtained', result : campaign});
            }
        }
    });
}

function deleteCampaignById(req,res){
    let id = req.params.id;
    Campaign.deleteOne({_id:Object(`${id}`)},(err,campaign) => {
        if(err){
            console.log(err);
            res.status(500).send({message: 'Server error.'});
        }else{
            if(Object.entries(campaign).length === 0){
                res.status(404).send({message: 'Campaign not found.'});
            }else{
                res.status(200).send({message:'Campaign deleted'});
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
    campaign.linkcampaign = params.linkcampaign;
    campaign.linklogin = params.linklogin;
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
    createCampaign,
    getCampaignById,
    deleteCampaignById
};