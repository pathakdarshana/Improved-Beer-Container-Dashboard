const mongoose = require('mongoose');
const getCurrentTemperature = require('./temperatureSensor'); 

ContainerSchema = new mongoose.Schema({
	containerNumber: Number,
	beerType: Number,
	currentTemperature:String
});
mongoose.model('BeerContainer',ContainerSchema);

module.exports = mongoose.model('BeerContainer');