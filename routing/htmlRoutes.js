//var express = require('express')
//var app = express()

//app.get('/survey,function(req,res){
//    res.send('')
//
var path = require("path");

module.exports = function(app) {
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
})

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});
 };

// POST method route



 // GET method route
