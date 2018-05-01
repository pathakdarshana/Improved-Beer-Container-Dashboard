const express = require('express');
const app = express();

const BeerController = require('./beer/beerController');
const db = require('../config/db');

app.use('/brewery', BeerController);

module.exports = app;