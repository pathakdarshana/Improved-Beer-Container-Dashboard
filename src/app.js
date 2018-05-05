const express = require('express');
const app = express();

const BeerController = require('./beer/beerController');
const containerController = require('./beerContainer/containerController');
const db = require('../config/db');

app.use('/brewery', BeerController, containerController);

module.exports = app;