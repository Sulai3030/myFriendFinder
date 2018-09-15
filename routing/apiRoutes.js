//app.get('/api/function,function(req,res){
//    res.send('')
//}

//var express = require('express')
//var app = express()

//app.get('/survey,function(req,res){
//    res.send('')
//}

// GET method route
app.get('/api'/friends, function (req, res) {
    res.send('GET request to the survey')
  })
  
  // POST method route
  app.post('/api'/friends, function (req, res) {
    res.send('POST request to the homepage')
  })