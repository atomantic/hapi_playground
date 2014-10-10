/**
 * Caching Layer
 */
// https://github.com/3rd-Eden/node-memcached
var Memcached = require('memcached');

var ENV = {
    LOCAL: ['localhost:11211'],
    DEV: ['localhost:11211']
};
var nodes = ENV[process.env.APP_ENV];

// create the memcached instance (with self)
var memcached =  new Memcached(nodes);

memcached.on('failure', function( details ) {
    console.error( "Server " + details.server + "went down due to: " + details.messages.join( '' ) );
});
memcached.on('reconnecting', function( details ) {
    console.debug( "Total downtime caused by server " + details.server + " :" + details.totalDownTime + "ms");
});

module.exports = memcached;