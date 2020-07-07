var express = require('express'),
  router = express.Router(),
  models = require('../Models/model');

router.route('/').get(function (req, res, next) {
  req.result = models.pi.casa.comodo.atuador;
  next();
});

router.route('/comodo').get(function (req, res, next) {
  req.result = models.pi.casa.comodo;
  next();
});

router.route('/comodo/:id').get(function (req, res, next) {
  req.result = models.pi.casa.comodo[req.params.id];
  next();
});

router.route('/comodo/:id/luminaria/:id').get(function (req, res, next) { //#A
  req.result = models.pi.casa.comodo[req.params.id].atuador.luminaria[req.params.id];
  next();
}).put(function(req, res, next) { 
  var selectedluminaria = models.pi.casa.comodo.atuador.luminaria[req.params.id];
  selectedluminaria.value = req.body.value; 
  req.result = selectedluminaria;
  next();
});

module.exports = router;
