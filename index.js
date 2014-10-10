var Hapi = require('hapi');
var server = new Hapi.Server(parseInt(process.env.PORT,10)||46100);

//var memcached = require('./memcached');

server.route({ method: 'GET', path: '/',
    handler: function (request, reply) {
        reply({data:'Hello Hapi'});
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});

process.on('message', function(msg) {
  if (msg == 'shutdown') {
    console.log('Hapi Server received shutdown event, waiting for close');

    var timer = setTimeout(function () {
      console.log('Hapi Server killed anyway after timeout');
      process.exit(1);
    }, 1000);

    server.stop({}, function () {
      clearTimeout(timer);
      console.log('Hapi Server successfully stopped');
      process.exit(0);
    });
  }
});

module.exports = server;
