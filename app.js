var hapi = require('hapi');
//load env config
require('dotenv').load();

// Create a server with a host, port, and options
var server = module.exports = new hapi.Server(require('config').mainServer.options);

server.connection(require('config').mainServer.app);

server.connection(require('config').chatServer);

//require('database');

require('modules');

server.start(function() {
	console.log('Server is up and running');
});

server.route({
  path  :'/*',
  method : 'OPTIONS',
  handler: function(request,reply) {
    reply();
  }
})