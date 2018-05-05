const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const BeerContainer = require('./container');
const getCurrentTemperature = require('./temperatureSensor'); 

//get details of all containers
router.get('/container', function(req,res){

	BeerContainer.find({}, function(err, containers){
		if (err) {
			res.send ("An error Occured");
		} else {
			res.send(containers);
		}
	});
});

//to create new containers
router.post('/container/update', function(req,res){
	BeerContainer.create({
		containerNumber: req.body.number,
		beerType: req.body.type,
		currentTemperature: req.body.temperature
	},
	function(err, container){
		if (err) {
			res.send("An error occured");
		} else {
			res.send(container);
		}
	});
});

//to delete a container
router.delete('/container/delete', function(req,res) {
	BeerContainer.remove({ containerNumber : req.body.containerNumber} ,
		function(err, deletedContainer){
			if (err) {
				res.send("An error occured");
			} else {
				res.send(containerNumber);
			}
	});
});

//to update temperature of container
router.put('/container/temperature', function(req, res) {
	const temperature = getCurrentTemperature();
	console.log(temperature);
	const query = {containerNumber : req.body.containerNumber} 
	BeerContainer.findOneAndUpdate(query, {$set :{currentTemperature : temperature}},
		{ new:true },
		function(err, containerAffected) {
			if (err) {
				res.send ("An error occured");
			} else {
				res.send (containerAffected);
			}
		}
	);
});
















module.exports = router;