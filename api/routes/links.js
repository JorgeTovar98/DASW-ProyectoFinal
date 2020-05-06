'use strict'

const express = require('express');
const linkController = require('../controllers/links');

let api = express.Router();

api.patch('/linkcampaign/:unique', linkController.phishingLink);
api.patch('/linklogin/:unique', linkController.loginLink);

module.exports = api;