var express = require('express'),
  atuadorRoutes = require('./../Routes/atuador'),
  sensorRoutes = require('./../Routes/sensor'),

  //models = require('./../Models/model'),
  converter = require('./../Middleware/converter'),
  cors = require('cors'),
  bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.use(cors());

app.use('/pi/atuador', atuadorRoutes);
app.use('/pi/sensors', sensorRoutes);

app.get('/pi', function (req, res) {
  res.send('This is the WoT-Pi!')
});

// For representation design
app.use(converter());
module.exports = app;