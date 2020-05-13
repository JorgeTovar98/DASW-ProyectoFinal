'use strict'

const express = require('express');
const campaignController = require('../controllers/campaigns');
const mdAuth = require('../middlewares/authenticate');

let api = express.Router();

api.get('/campaigns/:creatorid',mdAuth.ensureAuth, campaignController.getCampaignsByUser);
api.get('/campaign/:id',mdAuth.ensureAuth, campaignController.getCampaignById);
api.post('/campaign/',mdAuth.ensureAuth, campaignController.createCampaign);
api.delete('/campaign/:id',mdAuth.ensureAuth, campaignController.deleteCampaignById);

module.exports = api;