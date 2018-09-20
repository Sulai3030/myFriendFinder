//app.get('/api/function,function(req,res){
//    res.send('')
//}

//var express = require('express')
//var app = express()

//app.get('/survey,function(req,res){
//    res.send('')
//}
var myFriends = require("../app/friends.js");
module.exports = function(app) {
    app.get('/api/friends', function (req, res) {
    res.json(myFriends)
    }) 
  // POST method route
  app.post('/api/friends', function (req, res) {
    res.send(path.join(___dirname,"../public/home.html"))
  })
 };
