var hapi = require('hapi');

var apis = {};

apis.get = function (request, reply) {

    reply('Success!\n');
};

var server = new hapi.Server();
server.connection({
	port:3000,
 	routes: { cors: {
    	credentials: true,
        origin: ["*"]
        } 
    }
});

server.route([
    { method: 'GET', path: '/', config: { handler: apis.get } }
]);

server.start(function () {
    console.log('Server started at [' + server.info.uri + ']');
});