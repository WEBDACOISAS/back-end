var express = require('express'),
  router = express.Router(),
  models = require('../Models/model');

router.route('/').get(function (req, res, next) {
  req.result = models.pi.actuators;
  next();
});

router.route('/leds').get(function (req, res, next) {
  req.result = models.pi.actuators.leds;
  next();
});

router.route('/leds/:id').get(function (req, res, next) { 
  req.result = models.pi.actuators.leds[req.params.id];
  next();
}).put(function(req, res, next) { 
  var selectedLed = models.pi.actuators.leds[req.params.id];
  selectedLed.value = req.body.value; //#C
  //console.log('selectedLed.value: '+selectedLed.value);
  req.result = selectedLed;
  next();
});

module.exports = router;

