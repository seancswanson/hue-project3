require('dotenv').config();
var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var User = require("../models/user");
var request = require('request');
var bodyParser = require('body-parser');

router.post('/', function(req, res, next){
	console.log('user', req.body.user.email);
	console.log('html', req.body.selected);
	User.update(
		{email: req.body.user.email},
		{$push: 
			{saved: 
				{selected: req.body.selected}
			}
		}
  	).then((result) => {
  		res.send(result);
  		console.log(result);
  	}).catch(err => console.log(err));
});

router.delete('/', function(req, res, next){
	console.log("req.dot.body",req.body);	
	User.update({"saved.selected": req.body.selected},
		{$pull:
			{"saved.$.selected": req.body.user}
		}
		).then((result) => {
  		res.send(result);
  		console.log("result is", result);
  	}).catch(err => console.log(err));

})

module.exports = router;