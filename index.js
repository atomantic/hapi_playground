// include package so we can get the version number
var pjson = require('./package.json');

/**
 * Server Layer
 */
// http://hapijs.com/api
var Hapi = require('hapi');
var Joi = require('joi');
var server = new Hapi.Server(parseInt(process.env.PORT, 10) || 3666);


server.route({ method: 'GET', path: '/',
    config:{
        validate:{
            query:{
                v: Joi.bool().optional()
            }
        }
    },
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