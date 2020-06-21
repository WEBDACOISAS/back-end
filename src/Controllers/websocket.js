var WebSocketServer = require('ws').Server,
models = require('./../Models');

exports.listen = function(server) {
  var wss = new WebSocketServer({server: server}); 
  console.info('WebSocket server started...');
  wss.on('connection', function (ws) { 
    var url = ws.upgradeReq.url;
    console.info(url);
    try {
      Object.observe(selectResouce(url), function (changes) { 
        ws.send(JSON.stringify(changes[0].object), function () {
        });
      })
    }
    catch (e) { 
      console.log('Unable to observe %s resource!', url);
        console.log(''+e);
    };
  });
};

function selectResouce(url) { 
  var parts = url.split('/');
  parts.shift();
  var result = models;
  for (var i = 0; i < parts.length; i++) {
    result = result[parts[i]];
  }
  console.log(result);
  return result;
}

