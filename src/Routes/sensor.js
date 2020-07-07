var express = require('express'),
  router = express.Router(),
  models = require('../Models/model');

router.route('/').get(function (req, res, next) {
  req.result = models.pi.casa.comodo.atuador;
  next();
});

router.route('/temperature').get(function (req, res, next) {
  req.result = models.pi.casa.comodo.atuador.luminaria;
  next();
});

router.route('/humidity').get(function (req, res, next) { 
  req.result = models.pi.casa.comodo.atuador.luminaria[req.params.id];
  next();
}).put(function(req, res, next) { 
  var selectedLed = models.pi.casa.comodo.atuador.luminaria[req.params.id];
  selectedLed.value = req.body.value; //#C
  //console.log('selectedLed.value: '+selectedLed.value);
  req.result = selectedLed;
  next();
});

module.exports = router;

