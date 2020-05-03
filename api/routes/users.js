'use strict'

const express = require('express');
const UserController = require('../controllers/users');
// const mdAuth = require('../middlewares/authenticate');

let api = express.Router();

api.post('/login',UserController.login);
api.post('/user', UserController.registerUser);

module.exports = api;