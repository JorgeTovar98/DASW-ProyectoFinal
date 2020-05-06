'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();

app.use(cors())

//cargar rutas
let userRoutes = require('./routes/users');
let campaignsRoutes = require('./routes/campaigns');
let linkRoutes = require('./routes/links');

//middleware de body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// app.use(express.static(__dirname + "/../public"))
// app.use(express.static(__dirname + "/../public/views"))

// //Rutas Base
app.use('/api',userRoutes);
app.use('/api',campaignsRoutes);
app.use('/api',linkRoutes);

//ENVIAR TIMESTAMP PARA LOS LINKS DESDE FRONTEND Y NO EN BACKEND

module.exports = app;