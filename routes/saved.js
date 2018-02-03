require('dotenv').config();
var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var User = require("../models/user");
var request = require('request');
var bodyParser = require('body-parser');

router.get('/', function(req, res){
	console.log("worky",req.body);//should console log something
	User.find({_id: req.body.id}, function(err, user){
		console.log("user",user);//here's the first place where stuff isn't working
		res.json(user.saved);
	}).catch(err => {console.log(err)});
});

router.post('/color', function(req, res){
	console.log("worky",req.body);//should console log something
	User.find({_id: req.body.id}, function(err, user){
		console.log("user",user[0].saved);//here's the first place where stuff isn't working
		res.json(user[0].saved);
	}).catch(err => {console.log(err)});
});

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

module.exports = router;