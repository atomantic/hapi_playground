// include package so we can get the version number
var pjson = require('./package.json');

/**
 * Server Layer
 */
// http://hapijs.com/api
var Hapi = require('hapi');
// run at port 46000 to support cellophane proxy
var server = new Hapi.Server(parseInt(process.env.PORT, 10) || 46000);


server.route({ method: 'GET', path: '/',
    handler: function (request, reply) {
        reply({data:'good'});
    }
});



/**
 * Start the Server!
 */
server.start(function () {
    console.log('Server running at:', server.info.uri, 'version: ', pjson.version);
});

module.exports = server;