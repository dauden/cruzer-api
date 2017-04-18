var Hapi = require('hapi');
var Joi = require('joi');

var apis = {};


apis.get = function (request, reply) {

    reply('Success!\n');
};

var server = new Hapi.Server(~~process.env.PORT || 3000, '0.0.0.0');

server.route([
    { method: 'GET', path: '/', config: { handler: apis.get, validate: { query: { username: S() } } } }
]);

server.start(function () {
    console.log('Server started at [' + server.info.uri + ']');
});