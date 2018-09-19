//app.get('/api/function,function(req,res){
//    res.send('')
//}

//var express = require('express')
//var app = express()

//app.get('/survey,function(req,res){
//    res.send('')
//}
module.exports = function(app) {
    app.get('/api/friends', function (req, res) {
    res.sendFile(path.join(___dirname,"../public/home.html"))
  })
  
  // POST method route
  app.post('/api/friends', function (req, res) {
    res.send('POST request to the homepage')
  })
 };
// GET method route
app.get('/api/friends', function (req, res) {
  res.send('GET request to the homepage')
})