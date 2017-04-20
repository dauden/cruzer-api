var hapi = require('hapi');

var Sequelize = require('sequelize');
var sequelize = new Sequelize('sql12169727', 'sql12169727', 'eyfagbaq4q',{
  host: 'sql12.freemysqlhosting.net',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

var Members = sequelize.define('members', {
  id: {
  	type: Sequelize.INTEGER.UNSIGNED,
  	primaryKey: true
  },
  FullName: Sequelize.STRING(60),
  Facebook: Sequelize.STRING(256),
  NickName: Sequelize.STRING(25),
  Phone: Sequelize.STRING(11),
  Email: Sequelize.STRING(50),
  Local: Sequelize.STRING(10),
  Place: Sequelize.STRING(10),
  Job: Sequelize.STRING(50),
  PlaceNumber: Sequelize.STRING(10),
  Vehicle: Sequelize.STRING(20),
  Year: Sequelize.STRING(4)
});

sequelize.sync().then(function() {
  return Members.create({
    FullName: 'Anh, Nguyen Ngoc Tuan',
	Facebook: '',
	NickName: 'Dau Den',
	Phone: '0944534128',
	Email: 'anh.nguyen@codingland.com',
	Local: 'District 9',
	Place: 'District 3',
	Job: 'Software Enginnering',
	PlaceNumber: '51F-236.52',
	Vehicle: 'Cruze',
	Year: '2015'
  });
}).then(function(data) {
  console.log(data);
});

console.log(123);

var apis = {};

apis.get = function (request, reply) {

    reply('Success!\n');
};

var server = new hapi.Server();
server.connection({
	port: process.env.PORT || 3000,
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