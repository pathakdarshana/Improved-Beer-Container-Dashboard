const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const Beer = require('./beer');


router.get('/beerdata', function(req,res){
	Beer.find({}, function(err, beers){
		if (err) {
			res.send("An error occured")
		} else {
			res.send(beers)
		}
	});
});

router.post('/addbeer', function(req,res){
	Beer.create({
		beerType: req.body.beerType,
		maxTemperature: req.body.maxTemperature
	},
	function(err,beer){
		if (err) {
			res.send("An error occured")
		} else {
			res.send(beer)
		}
	});
});

router.delete('/beerdata/:beertype/removebeer', function(req,res){
	const beer = req.params.beertype
	console.log(req.params.beertype)
	Beer.remove({ "beerType" : beer }, function(err,removed){
		if (err) {
			res.send("An error occured")
		} else {
			res.send("Removed successfully")
		}
	});
});






module.exports = router;