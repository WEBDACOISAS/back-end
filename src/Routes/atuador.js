var express = require('express'),
  router = express.Router(),
  models = require('./../Models/models.');

router.route('/').get(function (req, res, next) {
  req.result = models.pi.atuador;
  next();
});

router.route('/Luminaria').get(function (req, res, next) {
  req.result = models.pi.atuador.Luminaria;
  next();
});

router.route('/Luminaria/:id').get(function (req, res, next) { //#A
  req.result = models.pi.atuador.Luminaria[req.params.id];
  next();
}).put(function(req, res, next) { 
  var selectedLed = models.pi.atuador.Luminaria[req.params.id];
  selectedLed.value = req.body.value; 
  req.result = selectedLed;
  next();
});

module.exports = router;
