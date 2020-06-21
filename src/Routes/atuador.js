var express = require('express'),
  router = express.Router(),
  models = require('../Models/model');

router.route('/').get(function (req, res, next) {
  req.result = models.pi.atuador;
  next();
});

router.route('/luminaria').get(function (req, res, next) {
  req.result = models.pi.atuador.luminaria;
  next();
});

router.route('/luminaria/:id').get(function (req, res, next) { //#A
  req.result = models.pi.atuador.luminaria[req.params.id];
  next();
}).put(function(req, res, next) { 
  var selectedluminaria = models.pi.atuador.luminaria[req.params.id];
  selectedluminaria.value = req.body.value; 
  req.result = selectedluminaria;
  next();
});

module.exports = router;
