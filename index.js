'use strict'

var express = require('express');
var app = express();

const DEVICE_ID = '39002b001747343338333633';
const ACCESS_TOKEN = 'c4367f4e405c0c2bded555973f95d5b022f840b4';

const Particle = require('particle-api-js');
const particle = new Particle();



app.get('/', function (req, res) {
  res.send('here we go!!!!!');
  
  let param = req.query.value;
  
  console.log(req.query.value);
  
  var fnPr = particle.callFunction({
    deviceId: DEVICE_ID,
    name: 'preset',
    argument: param,
    auth: ACCESS_TOKEN
  }).then(
    (data) => {
      console.log('Function called succesfully:', data);
    },
    (err) => {
      console.log('An error occurred:', err);
    }
  );
});

app.get('/guinea', function (req, res) {
  res.send('here we go custom!!!!!!!!!');
  
  let param = req.query.value;
  
  console.log(req.query.value);
  
  var fnPr = particle.callFunction({
    deviceId: DEVICE_ID,
    name: 'guinea',
    argument: param,
    auth: ACCESS_TOKEN
  }).then(
    (data) => {
      console.log('Function called succesfully:', data);
    },
    (err) => {
      console.log('An error occurred:', err);
    }
  );
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});