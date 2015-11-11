var express         = require('express')
var giphy           = express.Router()
var request         = require('request')


giphy.get('/:query', function(req,res){
  var searchString = "http://api.giphy.com/v1/gifs/search?q=" + req.params.query + "&api_key=dc6zaTOxFJmzC"
  request(searchString, function(error, response, body){
    var imgsrc = JSON.parse(body).data[Math.floor((Math.random()*(JSON.parse(body).data).length))].images.fixed_height.url
    res.send('<img src="' + imgsrc + '">')
      })
})


module.exports = giphy
