const mongoose = require('mongoose');
BeerSchema = new mongoose.Schema({
	beerType: Number,
	maxTemperature: Number
});
mongoose.model('Beer',BeerSchema);

module.exports = mongoose.model('Beer');