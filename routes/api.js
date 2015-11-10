var express = require('express');
var api = express.Router();

api.get('/', function(req,res) {
	res.json({message: "Our API's root route!"});
});

module.exports = api