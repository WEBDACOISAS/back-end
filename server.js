// Final version
var httpServer = require('./src/Controllers/http'),
wsServer = require('./src/Controllers/websocket'),
models = require('./src/Models/model');

// Internal Plugins
//ledsPlugin = require('./plugins/internal/ledsPlugin'), //#A
// pirPlugin = require('./plugins/internal/pirPlugin'), //#A
//dhtPlugin = require('./plugins/internal/DHT22SensorPlugin'); //#A

// start simulação
//pirPlugin.start({'simulate': true, 'frequency': 2000}); //#B
//ledsPlugin.start({'simulate': true, 'frequency': 10000}); //#B
//dhtPlugin.start({'simulate': true, 'frequency': 10000}); //#B

// HTTP Server
var server = httpServer.listen(models.pi.port, function () {
  console.log('HTTP server started...');
  // Websockets server
  wsServer.listen(server);

  console.info('Pi is up and running on port %s', models.pi.port);
});