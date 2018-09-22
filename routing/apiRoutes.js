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
    console.log(JSON.stringify(req.body))
    var smallestDiffernce=100
    var totalDifference=0
    var closestFriendIndex=0
    var a;  
    for (a = 0; a < myFriends.length; a++) {
      var b;
      totalDifference = 0
      for (b = 0; b < 10; b++) { 
        totalDifference += Math.abs(myFriends[a].scores[b]-req.body.scores[b])
      }
      if (totalDifference < smallestDifference){
        smallestDiffernce = totalDifference
        closestFriendIndex = a
      }
    }res.json (myFriends [closestFriendIndex])

  })
 };
