


var app = require('express').Router();

path = require('path');

app.get('/', function (req, res) {
   
    res.status(201);
    res.json(req.body);
  })

  
  module.exports = app;