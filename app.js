var express = require('express');
var app = express();
var apiRoutes = require('./routes/api.js');

app.get('/', function(req, res){
	res.json({message: "Welcome To My App!"})
})


app.use('/api', apiRoutes);

app.listen(3000, function(){
	console.log("Server running. Magic will happen. Sparks will fly!");
})