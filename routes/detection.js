require("dotenv").config();
var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var User = require("../models/user");
var request = require('request');

apiKey = process.env.API_KEY;
apiSecret = process.env.API_SECRET;

router.post('/', function(req,res,next) {
  var imageURL = req.body.imageURL;
  var colorAPI = 'https://api.imagga.com/v1/colors?url='+encodeURIComponent(imageURL)
  request.get(colorAPI, function (error, response, body) {
    console.log('Status:', response.statusCode);
    console.log('Headers:', JSON.stringify(response.headers));
    console.log('Response:', body);
}).auth(apiKey, apiSecret, true);
})

module.exports = router;